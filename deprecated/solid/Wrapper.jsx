import { createEffect } from 'solid-js';

function Wrapper(props) {
  __Ziko__.__Config__.setDefault({ render: false });
  createEffect(() => {
    if (props.children) {
      const { element } = props.children();
      if (element) {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.appendChild(element);
        return wrapperDiv;
      }
    }
  });

  return (
    <div
      data-engine="ziko.js"
      ref={(el) =>
        el && props.children && el.appendChild(props.children().element)
      }
    ></div>
  );
}

export default Wrapper;


/*

import Wrapper from './Wrapper';
import { p } from 'ziko';
function Text() {
  return p('hello from ziko');
}
function App() {
  return (
    <Wrapper>
      <Text />
    </Wrapper>
  );
}

export default App;


*/