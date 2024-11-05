import { createEffect } from 'solid-js';

export function DomWrapper(props) {
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
      data-wrapper="ziko-wrapper"
      ref={(el) =>
        globalThis.addEventListener("DOMContentLoaded",()=>{
          el && props.children && el.appendChild(props.children())
        })
      }
    ></div>
  );
}