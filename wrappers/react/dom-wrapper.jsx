import { useRef, useEffect } from 'react';
export function DomWrapper({ children, engine, wrapper }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current && children) {
      containerRef.current.innerHTML = '';
      if (!(children instanceof Array)) children = [children];
      children.forEach(child => {
        if (typeof child.type === 'function') {
          const childElement = child.type(child.props);
          if (childElement instanceof HTMLElement) {
            containerRef.current.appendChild(childElement);
          }
        }
      });
    }
  }, [children]);
  return <div 
    {...(engine && { "data-engine": engine})}
    {...(wrapper && { "data-wrapper": wrapper})}
    ref={containerRef}
    style={{display : "contents"}}
    ></div>;
}
