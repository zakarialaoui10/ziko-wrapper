import { children } from 'solid-js';

export function ZikoWrapper(props) {
  return (
    <div
      data-engine="zikojs"
      data-wrapper="ziko-wrapper"
      style={{ display: "contents" }}
      ref={(Wrapper) =>{
        globalThis.addEventListener("DOMContentLoaded", () => {
          const resolvedChildren = children(() => props.children);
          const items = resolvedChildren.toArray();
          items.forEach(item => {
            if (item) {
              item.unrender()
              Wrapper.append(item.element);
            }
          });
        })
      }
      }
    ></div>
  );
}