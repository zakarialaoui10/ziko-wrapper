import { renderToString } from "ziko-server/server-only-utils"
function check(Component, attributes) {
    if (typeof Component !== "function") return false;
	return true
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
    const UI = Component(props)
    const html = renderToString(UI)
    // console.log({metadata})
    return { 
        html,
        // hydration: {
        //     ...metadata,
        //     directive: "astro-zikojs",               
        //     // componentExport: "default",        
        //     // componentUrl: metadata.filePath,   
        // },
     };
}

export default {
    name : "astro-zikojs",
    check,
    renderToStaticMarkup
}