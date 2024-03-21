import { createEffect, onCleanup, createSignal } from 'solid-js';

function ZikoUI(props) {
  let containerRef;
  const [ui, setUI] = createSignal(props.ui);

  createEffect(() => {
    if (containerRef && ui() instanceof ZikoUIElement) {
      containerRef.innerHTML = "";
      containerRef.appendChild(ui().element);
    }
  });

  onCleanup(() => {
    // Cleanup logic if needed
  });

  return (
    <ziko-ui ref={containerRef} data-engine="ziko"></ziko-ui>
  );
}

export default ZikoUI;
