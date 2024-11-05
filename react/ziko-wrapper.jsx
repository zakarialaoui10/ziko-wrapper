import { useRef, useEffect } from 'react';
export function ZikoWrapper({ children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current && children) {
      containerRef.current.innerHTML = '';
      if (!(children instanceof Array)) children = [children];
      children.forEach((child) => {
        if (typeof child.type === 'function') {
          const childElement = child.type().element;
          if (childElement instanceof HTMLElement) {
            containerRef.current.appendChild(childElement);
          }
        }
      });
    }
  }, [children]);
  return <div data-engine="ziko.js" ref={containerRef}></div>;
}
