import { createEffect } from 'solid-js';

export function ZikoWrapper(props) {
  __Ziko__.__Config__.setDefault({ render: false });
  createEffect(() => {
    if (props.children) {
      const { element } = props.children();
      if (element) {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.appendChild(element);
        return wrapperDiv;
      }
    }
  });

  return (
    <div
      data-engine="ziko.js"
      data-wrapper="ziko-wrapper"
      style={{display : "contents"}}
      ref={(el) =>
        globalThis.addEventListener("DOMContentLoaded",()=>{
          el && props.children && el.appendChild(props.children().element)
        })
      }
    ></div>
  );
}