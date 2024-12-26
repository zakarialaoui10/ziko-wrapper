import { ComponentChildren } from "preact";

interface WrapperProps {
    children?: ComponentChildren;
}

export function DomWrapper({ children }: WrapperProps): JSX.Element;
