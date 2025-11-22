import { createSignal, onCleanup, onMount, createEffect } from 'solid-js';
import { render } from 'solid-js/web';

// Helpers
const isDOMElement = (obj) => obj instanceof HTMLElement;
const isSolidComponent = (child) =>
  typeof child === 'function' && !isDOMElement(child);

// Transform Solid elements to DOM, or return DOM elements as-is
const domify = (element, ...args) => {
  // DOM element → return directly
  if (isDOMElement(element)) return element;

  // Solid component (function)
  if (isSolidComponent(element)) {
    const [props, ...children] = args;
    const container = document.createElement('div');
    container.style.display = 'contents';

    // Render the Solid component into the container
    const dispose = render(() => element(props, ...children), container);
    container._solidDispose = dispose;

    return container;
  }

  // ZikoJS-like object (with .element)
  if (element && typeof element === 'object' && isDOMElement(element.element)) {
    return element.element;
  }

  return null;
};

// Recursively process children (DOM, Solid, or ZikoJS)
const processChild = (child) => {
  if (typeof child === 'function') {
    const result = child();
    return processChild(result);
  }

  if (Array.isArray(child)) {
    const frag = document.createDocumentFragment();
    child.forEach((c) => {
      const el = processChild(c);
      if (el) frag.appendChild(el);
    });
    return frag;
  }

  return domify(child);
};

// Solid version of DOMWrapper
export function DOMWrapper(props) {
  let container;
  let disposes = [];

  const cleanup = () => {
    disposes.forEach((d) => d?.());
    disposes = [];
    if (container) container.innerHTML = '';
  };

  onCleanup(cleanup);

  createEffect(() => {
    cleanup();
    if (!props.children || !container) return;

    const childArray = Array.isArray(props.children)
      ? props.children
      : [props.children];

    childArray.forEach((child) => {
      const el = processChild(child);
      if (el instanceof HTMLElement || el instanceof DocumentFragment) {
        container.appendChild(el);
        if (el._solidDispose) disposes.push(el._solidDispose);
      }
    });
  });

  return <div ref={container} style="display: contents;" />;
}

// ---------- Pure DOM Element Creators ----------
const createButton = (text, onClick) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.style.cssText =
    'padding: 8px 16px; margin: 5px; background: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 4px;';
  if (onClick) btn.onclick = onClick;
  return btn;
};

const createParagraph = (text) => {
  const p = document.createElement('p');
  p.textContent = text;
  p.style.margin = '10px 0';
  return p;
};

const createCard = (title, ...children) => {
  const card = document.createElement('div');
  card.style.cssText =
    'padding: 15px; border: 2px solid #4CAF50; margin: 10px; border-radius: 8px; background: #f0f0f0;';
  const h4 = document.createElement('h4');
  h4.textContent = title;
  h4.style.marginTop = '0';
  card.appendChild(h4);

  children.forEach((child) => {
    const el = domify(child);
    if (el) card.appendChild(el);
  });
  return card;
};

// ---------- Solid Components ----------
function SolidCard(props) {
  return (
    <div
      style={{
        padding: '15px',
        border: `2px solid ${props.color || '#2196F3'}`,
        margin: '10px',
        'border-radius': '8px',
        background: props.color === '#2196F3' ? '#e3f2fd' : '#fff3e0',
      }}
    >
      <h4 style={{ 'margin-top': 0 }}>{props.title}</h4>
      {props.children}
    </div>
  );
}

function SolidButton(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: '8px 16px',
        margin: '5px',
        background: '#2196F3',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        'border-radius': '4px',
      }}
    >
      {props.children}
    </button>
  );
}

// ---------- Demo ----------
export default function Demo() {
  return (
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>DOMWrapper - SolidJS Interleaving Demo</h2>
      <p style="color: #666">
        Mix DOM elements, Solid components, and ZikoJS elements dynamically.
      </p>

      <div style="margin-top: 20px;">
        <h3>Example 1: Simple DOM Elements</h3>
        <DOMWrapper>
          {[
            createParagraph('This is a pure DOM paragraph'),
            createButton('DOM Button', () => alert('DOM button clicked!')),
            domify(
              SolidButton,
              { onClick: () => alert('domified!') },
              'Domified Button'
            ),
          ]}
        </DOMWrapper>
      </div>

      <div style="margin-top: 20px;">
        <h3>Example 2: DOM → Solid</h3>
        <DOMWrapper>
          {createCard(
            'DOM Card',
            createParagraph('DOM content here'),
            <SolidCard title="Nested Solid Card" color="#FF9800">
              <p>This is a Solid component inside a DOM card</p>
              <SolidButton onClick={() => alert('Solid button clicked!')}>
                Click Me
              </SolidButton>
            </SolidCard>
          )}
        </DOMWrapper>
      </div>

      <div style="margin-top: 20px;">
        <h3>Example 3: Solid → DOM</h3>
        <DOMWrapper>
          <SolidCard title="Solid Card">
            <p>Solid component wrapping DOM elements</p>
            <DOMWrapper>
              {[
                createParagraph('DOM inside Solid!'),
                createButton('DOM Button Inside Solid', () => alert('Works!')),
              ]}
            </DOMWrapper>
          </SolidCard>
        </DOMWrapper>
      </div>

      <div style="margin-top: 20px;">
        <h3>Example 4: Deep Nesting</h3>
        <DOMWrapper>
          {createCard(
            'Level 1: DOM',
            createParagraph('DOM content'),
            <SolidCard title="Level 2: Solid">
              <p>Solid component</p>
              <DOMWrapper>
                {createCard(
                  'Level 3: DOM',
                  createParagraph('Back to DOM!'),
                  <SolidCard title="Level 4: Solid" color="#FF9800">
                    <p>🎉 Full interleaving works!</p>
                    <SolidButton onClick={() => alert('Deep nested button!')}>
                      Click Me
                    </SolidButton>
                  </SolidCard>
                )}
              </DOMWrapper>
            </SolidCard>
          )}
        </DOMWrapper>
      </div>
    </div>
  );
}
