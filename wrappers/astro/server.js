async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
    const properties = props ?? {};
    const html = ""
    return { html };
}

export default {
    name : "astro-zikojs",
    renderToStaticMarkup
}