import { useRef, useEffect } from "react";

export function ZikoWrapper({ children }) {
  const containerRef = useRef(null);

  // Recursively process Ziko components and their children
  const processZikoComponent = (child) => {
    if (typeof child?.type === "function") {
      let zikoComponent;
      
      if (child.props?.children) {
        // Process children first
        const childArray = Array.isArray(child.props.children) 
          ? child.props.children 
          : [child.props.children];
        
        const processedChildren = childArray
          .map(nestedChild => processZikoComponent(nestedChild))
          .filter(element => element !== null);
        
        // Call component with props and processed children as arguments
        zikoComponent = child.type(child.props, ...processedChildren);
      } else {
        // No children, call with props only
        zikoComponent = child.type(child.props);
      }
      
      const parentElement = zikoComponent?.element;
      
      if (parentElement instanceof HTMLElement) {
        return zikoComponent;
      }
    }
    return null;
  };

  useEffect(() => {
    if (containerRef.current && children) {
      containerRef.current.innerHTML = "";
      
      const childArray = Array.isArray(children) ? children : [children];
      
      childArray.forEach((child) => {
        const processedComponent = processZikoComponent(child);
        if (processedComponent?.element instanceof HTMLElement) {
          containerRef.current.appendChild(processedComponent.element);
        }
      });
    }
  }, [children]);

  return (
    <div
      data-wrapper="ziko-wrapper"
      data-engine="zikojs"
      ref={containerRef}
      style={{ display: "contents" }}
    />
  );
}