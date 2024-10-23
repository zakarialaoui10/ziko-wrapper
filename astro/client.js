export default function (element) {
    return (Component, props, { default: children, ...slotted }, { client }) => {
        if (!element.hasAttribute("ssr"))
            return;
        element.setAttribute("data-engine","ziko.js")
        const properties = props ?? {};
        if (client !== "only") {
            console.log("! Only ")
        }
        else {
            console.log("Add")
            Component(properties).render(element)
        }
    };
}