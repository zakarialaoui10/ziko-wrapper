import React, { useRef, useEffect } from "react";
import {ZikoUIElement} from "ziko";
/**
 * A React component for rendering ZikoUIElement.
 * @param {Object} props - Component props.
 * @param {ZikoUIElement} props.ui - The ZikoUIElement to render.
 * @returns {JSX.Element} JSX representation of the ZikoUI component.
 */
function ZikoUI({ ui }) {
  const containerRef = useRef(null);
  useEffect(() => {
    __Ziko__.__Config__.setDefault({render:false});
    //document.querySelector("html[data-engine='zikojs']").removeAttribute("data-engine")
    console.log(containerRef)
    if (containerRef.current && ui && ui instanceof ZikoUIElement) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(ui.element);
    }
    // Cleanup function to remove the UI element when the component unmounts or UI changes
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [ui]);
  return (
      <section ref={containerRef} data-engine="ziko"></section>
  );
}
export default ZikoUI;
