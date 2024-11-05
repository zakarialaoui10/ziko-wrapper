import { ComponentChildren } from "preact";

interface WrapperProps {
    children?: ComponentChildren; 
}

export function ZikoWrapper({ children }: WrapperProps): JSX.Element;
