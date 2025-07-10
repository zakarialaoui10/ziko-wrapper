import van from "vanjs-core";
import { Flex } from "ziko";
import { Activity } from "vanjs-lucide";
import "ziko-wrapper/van";


const { p } = van.tags;

const pp = p(
    Flex(
        p("Hello From Van"),
        Activity({ class:"icon", style:"color: turquoise" })
    )
    .style({ color: "red" })
    .vertical(0, 0)
);

document.body.append(pp)