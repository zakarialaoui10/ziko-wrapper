// import { isAsync } from "ziko-server/utils"
export default function (wrapper) {
    return (Component, props, { default: children, ...slotted }, {client}) => {
        // if (!wrapper.hasAttribute("ssr")){
        //     console.log("ssr")
        //     return
        // }
        wrapper.setAttribute("data-engine","zikojs")
        const properties = props ?? {};
        switch(client){
            case "only" : Component(properties).mount(wrapper); break;
            default : {
                wrapper.innerHTML = ""
                console.log(`Client Hydration : ${Component}`)
                 Component(properties).mount(wrapper); break;
            }
        }
    };
}