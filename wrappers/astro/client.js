export default function (wrapper) {
    return (Component, props, { default: children, ...slotted }, {client}) => {
        // console.log({client})
        if (!wrapper.hasAttribute("ssr"))
            return;
        wrapper.setAttribute("data-engine","ziko.js")
        const properties = props ?? {};
        switch(client){
            case "only" : Component(properties).render(wrapper); break;
            default : {
                
            }
        }
        // if (client !== "only") {
        //     // console.log("! Only ")
        //     // console.log({wrapper})
        //     // wrapper.innerHTML = ""
        //     Component(properties).render(wrapper)
        // }
        // else {
        //     // console.log("Only ")
        //     Component(properties).render(wrapper)
        // }
    };
}