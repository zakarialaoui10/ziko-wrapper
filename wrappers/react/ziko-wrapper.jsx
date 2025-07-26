import { useRef, useEffect } from "react";
const processZikoComponent = (child) => {
  if (typeof child?.type === "function") {
    let zikoComponent;
    if (child.props?.children) {
      const childArray = Array.isArray(child.props.children)
        ? child.props.children
        : [child.props.children];
      const processedChildren = childArray
        .map((nestedChild) => processZikoComponent(nestedChild))
        .filter((element) => element !== null);
      zikoComponent = child.type(child.props, ...processedChildren);
    } 
    else zikoComponent = child.type(child.props);
    return zikoComponent.unrender();
  }
  return null;
};
export function ZikoWrapper({ children }) {
  const containerRef = useRef(null);
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
