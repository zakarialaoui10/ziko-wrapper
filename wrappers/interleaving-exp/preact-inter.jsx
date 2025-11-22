import { useRef, useEffect } from 'preact/hooks';
import { render, createElement, isValidElement } from 'preact';

const isDOMElement = (obj) => obj instanceof HTMLElement;
const isPreactElement = (child) => isValidElement(child);

// Transform Preact elements to DOM, or return DOM elements as-is
const domify = (element, ...args) => {
  // If it's already a DOM element, return it directly
  if (isDOMElement(element)) return element;

  // If it's a Preact element, bridge it and return the DOM container
  if (isPreactElement(element)) {
    const container = document.createElement('div');
    container.style.display = 'contents';
    render(element, container);
    // Mark for cleanup tracking
    container._preactRendered = true;
    return container;
  }

  // If it's a function (Preact component), create element with props and children
  if (typeof element === 'function') {
    const [props, ...children] = args;
    const preactElement = createElement(element, props, ...children);
    return domify(preactElement);
  }

  return null;
};

// Process mixed children (Preact elements or DOM elements)
const processChild = (child) => {
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
  )
    return child.element;

  // Use domify for all other cases (DOM elements, Preact elements, or Preact components)
  return domify(child);
};

export function DOMWrapper({ children }) {
  const containerRef = useRef(null);
  const mountedContainersRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !children) return;

    // Cleanup previous Preact renders
    mountedContainersRef.current.forEach((container) => {
      if (container?._preactRendered) {
        render(null, container); // Unmount Preact components
      }
    });
    mountedContainersRef.current = [];

    containerRef.current.innerHTML = '';
    const childArray = Array.isArray(children) ? children : [children];

    childArray.forEach((child) => {
      const processedElement = processChild(child);

      if (processedElement instanceof HTMLElement) {
        containerRef.current.appendChild(processedElement);

        // Track Preact-rendered containers for cleanup
        if (processedElement._preactRendered) {
          mountedContainersRef.current.push(processedElement);
        }
      }
    });

    // Cleanup function
    return () => {
      mountedContainersRef.current.forEach((container) => {
        if (container?._preactRendered) {
          render(null, container);
        }
      });
      mountedContainersRef.current = [];
    };
  }, [children]);

  return <div ref={containerRef} style={{ display: 'contents' }} />;
}

// Pure DOM element creators
const CreateButton = (text, onClick) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.style.cssText =
    'padding: 8px 16px; margin: 5px; background: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 4px;';
  if (onClick) btn.onclick = onClick;
  return btn;
};

const CreateParagraph = (text) => {
  const p = document.createElement('p');
  p.textContent = text;
  p.style.margin = '10px 0';
  return p;
};

const CreateCard = (title, ...children) => {
  const card = document.createElement('div');
  card.style.cssText =
    'padding: 15px; border: 2px solid #4CAF50; margin: 10px; border-radius: 8px; background: #f0f0f0;';

  const titleEl = document.createElement('h4');
  titleEl.textContent = title;
  titleEl.style.marginTop = '0';
  card.appendChild(titleEl);

  children.forEach((child) => {
    const element = domify(child);
    if (element) {
      card.appendChild(element);
    }
  });

  return card;
};

// You can also use domify directly with Preact components
const createPreactButton = (onClick, ...children) => {
  return domify(PreactButton, { onClick }, ...children);
};

// Preact component
function PreactCard({ title, children, color = '#2196F3' }) {
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

function PreactButton({ children, onClick }) {
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
export function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>DOMWrapper - Preact Version</h2>
      <p style={{ color: '#666' }}>
        Seamlessly mix DOM elements and Preact components with domify()
      </p>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 1: Simple DOM Elements</h3>
        <DOMWrapper>
          {CreateParagraph('This is a pure DOM paragraph')}
          {CreateButton('DOM Button', () => alert('DOM button clicked!'))}
          {createPreactButton(() => alert('domified'), 'Domified Button')}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 2: Preact Components with Props & Children</h3>
        <DOMWrapper>
          {CreateCard(
            'DOM Card with Preact Inside',
            CreateParagraph('DOM paragraph'),
            <PreactCard title="Props Work!" color="#FF9800">
              <p>This PreactCard has props: title and color</p>
              <PreactButton onClick={() => alert('Children work too!')}>
                Click Me - I'm a child!
              </PreactButton>
            </PreactCard>,
            <PreactCard title="Multiple Preact Components">
              <p>You can domify multiple Preact components</p>
              <p>Each with their own props and children</p>
            </PreactCard>
          )}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 3: DOM → Preact</h3>
        <DOMWrapper>
          {CreateCard(
            'DOM Card',
            CreateParagraph('This is DOM content'),
            <PreactCard title="Nested Preact Card">
              <p>This is Preact content inside a DOM element!</p>
              <PreactButton onClick={() => alert('Preact button!')}>
                Preact Button
              </PreactButton>
            </PreactCard>
          )}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 4: Preact → DOM</h3>
        <DOMWrapper>
          <PreactCard title="Preact Card" color="#FF9800">
            <p>Preact component here</p>
            <DOMWrapper>
              {CreateParagraph('DOM content inside Preact!')}
              {CreateButton('DOM Button Inside Preact', () => alert('Works!'))}
            </DOMWrapper>
          </PreactCard>
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 5: Deep Nesting (DOM → Preact → DOM → Preact)</h3>
        <DOMWrapper>
          {CreateCard(
            'Level 1: DOM',
            CreateParagraph('DOM content'),
            <PreactCard title="Level 2: Preact">
              <p>Preact component</p>
              <DOMWrapper>
                {CreateCard(
                  'Level 3: DOM',
                  CreateParagraph('Back to DOM!'),
                  <PreactCard title="Level 4: Preact" color="#FF9800">
                    <p>🎉 Full interleaving works!</p>
                    <PreactButton onClick={() => alert('Deep nested button!')}>
                      Click Me
                    </PreactButton>
                  </PreactCard>
                )}
              </DOMWrapper>
            </PreactCard>
          )}
        </DOMWrapper>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Example 6: Mixed Array</h3>
        <DOMWrapper>
          {[
            CreateParagraph('First DOM element'),
            <PreactCard title="Preact in the middle">
              <DOMWrapper>
                {CreateButton('Nested DOM Button', () => alert('Nested!'))}
              </DOMWrapper>
            </PreactCard>,
            CreateParagraph('Last DOM element'),
          ]}
        </DOMWrapper>
      </div>
    </div>
  );
}
