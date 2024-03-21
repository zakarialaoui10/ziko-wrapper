import React, { useRef, useEffect } from "react";
import {ZikoUIElement} from "ziko";
function ZikoUI({ ui }) {
  const containerRef = useRef(null);
  useEffect(() => {
    globalThis.__ZikoConfig__.setDefault({render:false})
    if (containerRef.current && ui && ui instanceof ZikoUIElement) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(ui.element);
    }
  }, [ui]);
  useEffect(() => {
    if (containerRef.current && style) {
      Object.assign(containerRef.current.style, style);
    }
  }, [style]);
  return (
      <ziko-ui ref={containerRef} data-engine="ziko"></ziko-ui>
  );
}
export default ZikoUI;
