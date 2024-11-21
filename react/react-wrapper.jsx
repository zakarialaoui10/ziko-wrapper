import ReactDOM from "react-dom/client";
import { ZikoUIElement} from "ziko"
export const ReactWrapper = (Component) => {
    const container = document.createElement("div");
    const root = ReactDOM.createRoot(container);
    root.render(Component);
    const ui = new ZikoUIElement(container).style({
        display : "contents"
    }).setAttr({
        dataWrapper : "react"
    });
    Object.defineProperty(ui, 'element', {
        get() {
          return this._element.firstChild;
        },
        configurable: false,
      });
    return ui;
};