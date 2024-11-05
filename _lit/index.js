import { html, LitElement } from 'lit';
// import { text } from 'ziko';

function defineComponent(tagName, ui, properties) {
  class zikoLitComponent extends LitElement {
    static properties = {
      ...properties, // Spread the properties object
    };

    constructor() {
      super();
      Object.keys(properties).forEach((key) => {
        this[key] = properties[key].default; // Assign default values
      });
    }

    render() {
      return html`<div data-engine="zikojs"></div>`;
    }

    updated() {
      const propertyValues = Object.keys(properties).reduce((acc, key) => {
        acc[key] = this[key];
        return acc;
      }, {});
      this.element = ui(propertyValues).unrender();
      const divElement = this.shadowRoot.querySelector(
        '[data-engine="zikojs"]'
      );
      if (divElement) this.element.render(divElement);
    }
  }

  customElements.define(tagName, zikoLitComponent);
}

// // Example of defining properties
// defineComponent(
//   'my-element',
//   ({ color, background }) => text('zikkkko').style({ color, background }),
//   {
//     background: { type: String, default: 'blue' },
//     color: { type: String, default: 'green' },
    
//   }
// );
