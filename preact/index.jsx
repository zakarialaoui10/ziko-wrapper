import { useRef, useEffect } from "preact/hooks";
import { render } from "preact"; 

export default function Wrapper({ children }) {
    const containerRef = useRef(null);
    
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = ""; 
            
            // Ensure children is an array
            const childrenArray = Array.isArray(children) ? children : [children];
            
            childrenArray.forEach((child) => {
                // Clone the child to ensure it receives props
                const childWithProps = { ...child, props: { ...child.props } };
                const childElement = render(childWithProps, containerRef.current, containerRef.current.firstChild);
                
                if (childElement instanceof HTMLElement) {
                    containerRef.current.appendChild(childElement);
                }
            });
        }
    }, [children]);

    return (
        <div data-engine="ziko.js" ref={containerRef}></div>
    );
}
