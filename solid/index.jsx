import { createEffect, onCleanup, createSignal } from 'solid-js';
import { ZikoUIElement } from 'ziko';
function ZikoUI(props) {
  let containerRef;
  const [ui,_] = createSignal(props.ui);

  createEffect(() => {
    console.log(ui());
    if (containerRef && ui() instanceof ZikoUIElement) {
      ui().unrender();
      containerRef.innerHTML = '';
      containerRef.appendChild(ui().element);
    }
  });

  onCleanup(() => {

  });

  return <div ref={containerRef} data-engine="zikojs"></div>;
}

export default ZikoUI;
