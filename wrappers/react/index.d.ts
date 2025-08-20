import { ReactNode, RefObject, ReactElement, FunctionComponent, ComponentClass, JSX } from "react";
import { UIElement } from "ziko";

interface WrapperProps {
    children?: ReactNode;
}

export function ZikoWrapper({ children }: WrapperProps): JSX.Element;

export declare const containerRef: RefObject<HTMLDivElement>;

export declare function zikofy(
    Component: ReactElement | FunctionComponent<any> | ComponentClass<any>,
    props?: Record<string, any>
): UIElement;

// export declare function ReactWrapper(
//     Component: ReactElement | FunctionComponent<any> | ComponentClass<any>,
//     props?: Record<string, any>
// ): UIElement;
