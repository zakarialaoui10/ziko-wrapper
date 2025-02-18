function check(Component, attributes) {
    if (typeof Component !== "function") return false;
	return true
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
    const properties = props ?? {};
    const html = "<p>To Be Removed</p>"
    return { html };
}

export default {
    name : "astro-zikojs",
    check,
    renderToStaticMarkup
}