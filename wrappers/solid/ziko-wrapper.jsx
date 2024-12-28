import { children } from 'solid-js';

export function ZikoWrapper(props) {
  return (
    <div
      data-engine="ziko.js"
      data-wrapper="ziko-wrapper"
      style={{display : "contents"}}
      ref={(Wrapper) =>
        globalThis.addEventListener("DOMContentLoaded",()=>{
          const { element } = children(() => props.children)();
          Wrapper.append(element)
        })
      }
    ></div>
  );
}