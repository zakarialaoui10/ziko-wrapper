import { ReactNode, RefObject, ReactElement, FunctionComponent, ComponentClass, JSX } from "react";
import { ZikoUIElement } from "ziko";

interface WrapperProps {
    children?: ReactNode;
}

export function ZikoWrapper({ children }: WrapperProps): JSX.Element;

export declare const containerRef: RefObject<HTMLDivElement>;

export declare function ReactWrapper(
    Component: ReactElement | FunctionComponent<any> | ComponentClass<any>,
    props?: Record<string, any>
): ZikoUIElement;
