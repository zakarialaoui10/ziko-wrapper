import { ComponentChildren } from "preact";
import { RefObject } from "preact/hooks";

interface WrapperProps {
    children?: ComponentChildren;
}

export default function Wrapper({ children }: WrapperProps): JSX.Element;

export declare const containerRef: RefObject<HTMLDivElement>;
