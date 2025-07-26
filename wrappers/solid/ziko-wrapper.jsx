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
          const childElements = resolvedChildren.toArray();
          childElements.forEach(child => {
            if (child) {
              child.unrender()
              Wrapper.append(child.element);
            }
          });
        })
      }
      }
    ></div>
  );
}