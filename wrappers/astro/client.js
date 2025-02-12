export default function (wrapper) {
    return (Component, props, { default: children, ...slotted }, {client}) => {
        if (!wrapper.hasAttribute("ssr"))
            return;
        wrapper.setAttribute("data-engine","ziko.js")
        const properties = props ?? {};
        console.log({client})
        if (client !== "only") {
            console.log("! Only ")
            Component(properties).render(wrapper)
        }
        else {
            console.log("Only ")
            Component(properties).render(wrapper)
        }
    };
}