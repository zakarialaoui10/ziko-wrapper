export default function zikoTransformPlugin() {
    return {
      name: 'vite-plugin-ziko-transform',
      enforce: 'pre',
      transform(src, id) {
          if (id.endsWith(".ziko.jsx")) {
            // console.log("Transforming .ziko file:", id);  
            const exportDefaultFuncRegex =
              /export\s+default\s+function\s+([a-zA-Z_]\w*)\s*\(\)\s*{([\s\S]*?)}/;
            const transformedCode = src.replace(
              exportDefaultFuncRegex,
              (match, funcName, funcBody) => {
                return `
import ZikoWrapper from "ziko-wrapper/solid";
function ${funcName}() {
    ${funcBody}
}  
export default () => {
    return (
      <ZikoWrapper>
        <${funcName} />
      </ZikoWrapper>
    );
  };`
              },
            );
            // console.log(transformedCode)
            return {
              code: transformedCode,
              map: null, 
            };
          }
          return null;
        },
      
      // Step 4: Change the file extension from `.ziko.js` to `.jsx`
      resolveId(source, importer) {
      //   if (source.endsWith('.ziko.js')) {
      //     return source.replace('.ziko.js', '.jsx');
      //   }
        return null;
      },
    };
  }