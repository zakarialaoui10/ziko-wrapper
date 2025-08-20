import { UIElementrom "ziko";
import { createRoot } from "react-dom/client";
import { isValidElement, createElement } from "react";

const zikofy = (Component, props) => {
  const container = document.createElement("div");
  const root = createRoot(container);
  const element = isValidElement(Component) ? Component : createElement(Component, props);
  const ui = new UIElementtainer)
    .style({
      display: "contents",
    })
    .setAttr({
      dataWrapper: "react",
    });
  root.render(element);
  const observer = new MutationObserver(() => {
    if (container.firstChild) {
      observer.disconnect();
      Object.defineProperty(ui, "element", {
        get() {
          return this.__ele__.firstChild;
        },
        configurable: false,
      });
    }
  });
  observer.observe(container, { childList: true });
  return ui;
};

export{
    zikofy
}