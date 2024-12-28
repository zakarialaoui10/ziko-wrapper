import { children as jsx2dom} from 'solid-js';

export function DomWrapper({children, engine, wrapper}) {
  return (
    <div
    {...(engine && { "data-engine": engine})}
    {...(wrapper && { "data-wrapper": wrapper})}
      style={{display : "contents"}}
      ref={(Wrapper) =>
        globalThis.addEventListener("DOMContentLoaded",()=>{
          const element  = jsx2dom(() => children)();
          Wrapper.append(element)
        })
      }
    ></div>
  );
}