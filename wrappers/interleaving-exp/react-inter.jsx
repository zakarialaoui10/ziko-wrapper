import { useRef, useEffect, isValidElement } from 'react';
import { createRoot } from 'react-dom/client';

const isDOMElement = (obj) => obj instanceof HTMLElement;
const isReactElement = (child) => isValidElement(child);

// Create a React mount point for React elements
const createReactBridge = (reactElement) => {
  const container = document.createElement('div');
  container.style.display = 'contents';
  const root = createRoot(container);
  root.render(reactElement);
  return {
    element: container,
    root: root,
  };
};

// Process mixed children (React elements or DOM elements)
const processChild = (child) => {
  // If it's already a DOM element, return it wrapped
  if (isDOMElement(child)) return { element: child };
  // If it's a React element, bridge it
  if (isReactElement(child)) return createReactBridge(child);
  // If it's a function, call it and process the result
  if (typeof child === 'function') {
    const result = child();
    return processChild(result);
  }
  // If it's an object with .element property (like ZikoJS UIElement)
  if (
    child &&
    typeof child === 'object' &&
    'element' in child &&
    isDOMElement(child.element)
  ) {
    return child;
  }
  return null;
};

export function DOMWrapper({ children }) {
  const containerRef = useRef(null);
  const mountedRootsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !children) return;

    // Cleanup previous React roots
    mountedRootsRef.current.forEach((root) => {
      if (root?.unmount) {
        root.unmount();
      }
    });
    mountedRootsRef.current = [];

    containerRef.current.innerHTML = '';
    const childArray = Array.isArray(children) ? children : [children];

    childArray.forEach((child) => {
      const processedComponent = processChild(child);

      if (processedComponent?.element instanceof HTMLElement) {
        containerRef.current.appendChild(processedComponent.element);

        // Track React roots for cleanup
        if (processedComponent.root) {
          mountedRootsRef.current.push(processedComponent.root);
        }
      }
    });

    // Cleanup function
    return () => {
      mountedRootsRef.current.forEach((root) => {
        if (root?.unmount) {
          root.unmount();
        }
      });
      mountedRootsRef.current = [];
    };
  }, [children]);

  return <div ref={containerRef} style={{ display: 'contents' }} />;
}

// Pure DOM element creators
const createButton = (text, onClick) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.style.cssText =
    'padding: 8px 16px; margin: 5px; background: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 4px;';
  if (onClick) btn.onclick = onClick;
  return btn;
  // return { element : btn} it's working
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

  const titleEl = document.createElement('h4');
  titleEl.textContent = title;
  titleEl.style.marginTop = '0';
  card.appendChild(titleEl);

  children.forEach((child) => {
    if (isDOMElement(child)) {
      card.appendChild(child);
    } else if (isReactElement(child)) {
      // Bridge React elements inside DOM
      const bridge = createReactBridge(child);
      card.appendChild(bridge.element);
    }
  });

  return card;
};

// React component
function ReactCard({ title, children, color = '#2196F3' }) {
  return (
    <div
      style={{
        padding: '15px',
        border: `2px solid ${color}`,
        margin: '10px',
        borderRadius: '8px',
        background: color === '#2196F3' ? '#e3f2fd' : '#fff3e0',
      }}
    >
      <h4 style={{ marginTop: 0 }}>{title}</h4>
      {children}
    </div>
  );
}

function ReactButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        margin: '5px',
        background: '#2196F3',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
      }}
    >
      {children}
    </button>
  );
}

// Demo
export default function Demo() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>DOMWrapper - Interleaving Demo</h2>
      <p style={{ color: '#666' }}>
        Seamlessly mix DOM elements and React components
      </p>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 1: Simple DOM Elements</h3>
        <DOMWrapper>
          {createParagraph('This is a pure DOM paragraph')}
          {createButton('DOM Button', () => alert('DOM button clicked!'))}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 2: DOM → React</h3>
        <DOMWrapper>
          {createCard(
            'DOM Card',
            createParagraph('This is DOM content'),
            <ReactCard title="Nested React Card">
              <p>This is React content inside a DOM element!</p>
              <ReactButton onClick={() => alert('React button!')}>
                React Button
              </ReactButton>
            </ReactCard>
          )}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 3: React → DOM</h3>
        <DOMWrapper>
          <ReactCard title="React Card" color="#FF9800">
            <p>React component here</p>
            <DOMWrapper>
              {createParagraph('DOM content inside React!')}
              {createButton('DOM Button Inside React', () => alert('Works!'))}
            </DOMWrapper>
          </ReactCard>
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 4: Deep Nesting (DOM → React → DOM → React)</h3>
        <DOMWrapper>
          {createCard(
            'Level 1: DOM',
            createParagraph('DOM content'),
            <ReactCard title="Level 2: React">
              <p>React component</p>
              <DOMWrapper>
                {createCard(
                  'Level 3: DOM',
                  createParagraph('Back to DOM!'),
                  <ReactCard title="Level 4: React" color="#FF9800">
                    <p>🎉 Full interleaving works!</p>
                    <ReactButton onClick={() => alert('Deep nested button!')}>
                      Click Me
                    </ReactButton>
                  </ReactCard>
                )}
              </DOMWrapper>
            </ReactCard>
          )}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 5: Mixed Array</h3>
        <DOMWrapper>
          {[
            createParagraph('First DOM element'),
            <ReactCard title="React in the middle">
              <DOMWrapper>
                {createButton('Nested DOM Button', () => alert('Nested!'))}
              </DOMWrapper>
            </ReactCard>,
            createParagraph('Last DOM element'),
          ]}
        </DOMWrapper>
      </div>
    </div>
  );
}
