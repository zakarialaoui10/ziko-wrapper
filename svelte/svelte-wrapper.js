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
    Object.defineProperty(ui, 'element', {
        get() {
          return this.__ele__.firstChild;
        },
        configurable: false,
      });
    return ui 
}
export {SvelteWrapper}