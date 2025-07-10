import van from "vanjs-core";
import { Flex } from "ziko";
import "ziko-wrapper/van";

const { p } = van.tags;

const pp = p(
    Flex(
        p("Hello From Van")
    )
    .style({ color: "red" })
);

document.body.append(pp)