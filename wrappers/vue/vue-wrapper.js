import { UIElementrom 'ziko';
import { createApp, h } from 'vue';

function VueWrapper(Component, props) {
    let ui = new UIElementv').setAttr({
        dataWrapper: 'vue',
    }).style({
        display: 'contents',
    });

    const app = createApp({
        render: () => h(Component, props),
    });

    app.mount(ui.element);

    Object.defineProperty(ui, 'element', {
        get() {
            return this.__ele__.firstChild;
        },
        configurable: false,
    });

    return ui;
}

export { VueWrapper };
