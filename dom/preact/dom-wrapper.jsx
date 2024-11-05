import { useRef, useEffect } from "preact/hooks";
export function DomWrapper({ children }) {
    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = "";             
            const childrenArray = Array.isArray(children) ? children : [children];
            childrenArray.forEach((child) => {
                const {type, props} = child
                const element = type.call(this, props)
                if (element instanceof HTMLElement) containerRef.current.appendChild(element);
                
            });
        }
    }, [children]);
    return (
        <div 
          data-wrapper="ziko-wrapper" 
          ref={containerRef}
          style={{display : "contents"}}
        ></div>
    );
}
