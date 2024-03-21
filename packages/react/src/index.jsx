import React, { useRef, useEffect } from "react";
import {ZikoUIElement} from "ziko";
function ZikoUI({ ui }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current && ui && ui instanceof ZikoUIElement) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(ui.element);
    }
  }, [ui]);
  return (
      <div ref={containerRef} data-engine="ziko"></div>
  );
}
export default ZikoUI;
