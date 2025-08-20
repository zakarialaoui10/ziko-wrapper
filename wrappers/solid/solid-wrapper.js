import {UIElement} from "ziko"
import { render } from 'solid-js/web'
import { createComponent } from 'solid-js'
function SolidWrapper(Component, props){
    let ui=new UIElement("div").setAttr({
        dataWrapper : "solid-js"
    }).style({
        display : "contents"
    })
    render(() => createComponent(Component,props), ui.element);
    Object.defineProperty(ui, 'element', {
        get() {
          return this.__ele__.firstChild;
        },
        configurable: false,
      });
    return ui
}

export{
    SolidWrapper
}