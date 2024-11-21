import { ReactNode, RefObject, ReactElement, FunctionComponent, ComponentClass } from "react";
import { ZikoUIElement } from "ziko";

interface WrapperProps {
    children?: ReactNode;
}

export default function ZikoWrapper({ children }: WrapperProps): JSX.Element;

export declare const containerRef: RefObject<HTMLDivElement>;

/**
 * A wrapper for React components to render them into a ZikoUIElement container.
 * Supports both JSX and function invocation with props.
 *
 * @param Component - A React component, either as JSX or a component function/class.
 * @param props - Props to pass if the component is a function or class (not JSX).
 * @returns A ZikoUIElement wrapping the rendered React component.
 */
export declare function ReactWrapper(
    Component: ReactElement | FunctionComponent<any> | ComponentClass<any>,
    props?: Record<string, any>
): ZikoUIElement;
