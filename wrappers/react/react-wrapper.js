import {createRoot} from "react-dom/client";
import { isValidElement,createElement } from "react";
import { UIElementom "ziko"

export const ReactWrapper = (Component, props = {}) => {
    const container = document.createElement("div");
    const root = createRoot(container);
    const isJsx = isValidElement(Component);
    root.render(isJsx ? Component : createElement(Component, props));
    const ui = new UIElementtainer).style({
        display : "contents"
    }).setAttr({
        dataWrapper : "react"
    });
    Object.defineProperty(ui, 'element', {
        get() {
          return this.__ele__.firstChild;
        },
        configurable: false,
      });
    return ui;
};