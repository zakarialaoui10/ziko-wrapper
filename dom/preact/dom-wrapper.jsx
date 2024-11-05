// import { useRef, useEffect } from "preact/hooks";
// import { render } from "preact"; 

// export function DomWrapper({ children }) {
//     const containerRef = useRef(null);
    
//     useEffect(() => {
//         if (containerRef.current) {
//             containerRef.current.innerHTML = "";             
//             const childrenArray = Array.isArray(children) ? children : [children];
//             childrenArray.forEach((child) => {
//                 const childWithProps = { ...child, props: { ...child.props } };
//                 const childElement = render(childWithProps, containerRef.current, containerRef.current.firstChild);
//                 if (childElement instanceof HTMLElement) {
//                     containerRef.current.appendChild(childElement);
//                 }
//             });
//         }
//     }, [children]);

//     return (
//         <div data-wrapper="ziko-wrapper" ref={containerRef}></div>
//     );
// }
