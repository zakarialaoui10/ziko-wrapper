function transformCode(inputCode) {
    const wrapperDiv = '<div id="ziko-wrapper"></div>\n\n<script>';
    const functionNameMatch = inputCode.match(
      /export default function\s+(\w+)\s*\(/
    );
    const functionName = functionNameMatch
      ? functionNameMatch[1]
      : 'defaultFunction';
  
    const transformedCode = inputCode
      .replace(/export default function\s+(\w+)\s*\(/, 'function $1(')
      .replace(/return\s+Flex\((.*)\)/, 'return Flex($1)')
      .replace(
        /<\/script>/,
        `\n${functionName}().render(document.querySelector("#ziko-wrapper"))\n</script>`
      );
  
    return wrapperDiv + '\n' + transformedCode;
  }
  
  export function zikoVite() {
    return {
      name: 'astro-zikojs-import',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.ziko.js')) {
          return {
            code : transformCode(code),
            map: null, 
          };
        }
        return null;
      },
      resolveId(id) {
        if (id.endsWith('.ziko.js')) {
          return id.replace('.ziko.js', '.astro');
        }
        return null;
      },
    };
  }
  
  export default function zikoAstro(/*options = {}*/) {
    return {
      name: 'astro-plugin-ziko',
      hooks: {
        'astro:config:setup': ({ config }) => {
          // Add the zikoVite plugin to the Vite plugins array
          config.vite.plugins.push(zikoVite());
        },
      },
    };
  }
  