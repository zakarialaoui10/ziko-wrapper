import { useRef, useEffect } from "preact/hooks";

const processDomComponent = (child) => {
  if (typeof child?.type === "function") {
    let DomComponent;
    if (child.props?.children) {
      const childArray = Array.isArray(child.props.children)
        ? child.props.children
        : [child.props.children];
      const processedChildren = childArray
        .map((nestedChild) => processDomComponent(nestedChild))
        .filter((element) => element !== null);
      DomComponent = child.type(child.props, ...processedChildren);
    } else {
      DomComponent = child.type(child.props);
    }
    return DomComponent;
  }
  return null;
};

export function ZikoWrapper({ children, engine, wrapper}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && children) {
      containerRef.current.innerHTML = "";
      const childArray = Array.isArray(children) ? children : [children];
      childArray.forEach((child) => {
        const processedComponent = processDomComponent(child);
        if (processedComponent instanceof HTMLElement) {
          containerRef.current.appendChild(processedComponent);
        }
      });
    }
  }, [children]);

  return (
    <div
      {...(engine && { "data-engine": engine})}
      {...(wrapper && { "data-wrapper": wrapper})}
      ref={containerRef}
      style={{ display: "contents" }}
    />
  );
}