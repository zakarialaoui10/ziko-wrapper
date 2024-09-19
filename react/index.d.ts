import { ReactNode, RefObject } from "react";

interface WrapperProps {
    children?: ReactNode;
}

export default function Wrapper({ children }: WrapperProps): JSX.Element;

export declare const containerRef: RefObject<HTMLDivElement>;
