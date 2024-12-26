import { JSX } from 'solid-js';

export interface DomWrapperProps {
  children?: () => { element: HTMLElement | null };
}
export function DomWrapper({children}: DomWrapperProps): JSX.Element;
// export function DomWrapper(props: DomWrapperProps): JSX.Element;
