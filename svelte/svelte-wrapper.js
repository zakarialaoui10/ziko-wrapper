import { ZikoUIElement } from "ziko";
import { mount } from "svelte";
function SvelteWrapper(Component, props = {}){
    let ui = new ZikoUIElement("div").setAttr({
        dataWrapper : "svelte"
    })
    mount(Component,{
        target : ui.element,
        props
    })
    return ui 
}
export {SvelteWrapper}