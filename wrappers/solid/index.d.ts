import { JSX } from 'solid-js';
import { UIElement } from 'ziko';

export interface ZikoWrapperProps {
  children: () => { element: HTMLElement };
}

export function ZikoWrapper(props: ZikoWrapperProps): JSX.Element;

export function SolidWrapper(
  Component : JSX.Element, 
  props?: Record<string, any>
) : UIElement
