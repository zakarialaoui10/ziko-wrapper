import { ZikoUIElement } from 'ziko';
import { render, h } from 'preact';

function PreactWrapper(Component, props) {
    let ui = new ZikoUIElement('div').setAttr({
        dataWrapper: 'preact',
    }).style({
        display: 'contents',
    });

    render(h(Component, props), ui.element);

    Object.defineProperty(ui, 'element', {
        get() {
            return this.__ele__.firstChild;
        },
        configurable: false,
    });

    return ui;
}

export { PreactWrapper };
