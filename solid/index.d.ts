import { JSX } from 'solid-js';

export interface ZikoWrapperProps {
  children: () => { element: HTMLElement };
}

export function ZikoWrapper(props: ZikoWrapperProps): JSX.Element;
