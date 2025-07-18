export default function (wrapper) {
    return (Component, props, { default: children, ...slotted }, {client}) => {
        console.log({client})
        // if (!wrapper.hasAttribute("ssr")){
        //     console.log("ssr")
        //     return
        // }
        wrapper.setAttribute("data-engine","ziko.js")
        const properties = props ?? {};
        switch(client){
            case "only" : Component(properties).render(wrapper); break;
            default : {
                console.log(`Client Hydration : ${Component}`)
                 Component(properties).render(wrapper); break;
            }
        }
    };
}