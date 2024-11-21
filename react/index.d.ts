import { ReactNode, RefObject } from "react";
import { ZikoUIElement } from "ziko";

interface WrapperProps {
    children?: ReactNode;
}

export default function ZikoWrapper({ children }: WrapperProps): JSX.Element;

export declare const containerRef: RefObject<HTMLDivElement>;

export declare function ReactWrapper(Component: ReactNode): ZikoUIElement;

