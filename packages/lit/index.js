import { LitElement, html, property } from 'lit';

export class ZikoUI extends LitElement {
  //@property({ type: Object }) ui;

  render() {
    return html`
      <div id="containerRef" data-engine="ziko"></div>
    `;
  }

  updated() {
    const containerRef = this.shadowRoot.getElementById('containerRef');
    if (containerRef && this.ui instanceof ZikoUIElement) {
      containerRef.innerHTML = "";
      containerRef.appendChild(this.ui.element);
    }
  }
}
customElements.define('ziko-ui', ZikoUI);
