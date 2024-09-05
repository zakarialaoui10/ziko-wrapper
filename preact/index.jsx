import  {useRef, useEffect } from "preact/hooks";
import {ZikoUIElement} from "ziko";
export default function ZikoUI({ui}){
    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current && ui && ui instanceof ZikoUIElement) {
            ui.unrender()
            containerRef.current.innerHTML = "";
            containerRef.current.appendChild(ui.element);
        }
  }, [ui]);
    return (
        <div ref={containerRef} data-engine="ziko"></div>
    )
}