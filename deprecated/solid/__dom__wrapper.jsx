import { createEffect } from 'solid-js';

function Wrapper(props) {
  let ref;
  createEffect(() => {
    console.log(ref);
  });

  return (
    <div ref={ref} class="wrapper">
      {props.children}
    </div>
  );
}

export default Wrapper;
