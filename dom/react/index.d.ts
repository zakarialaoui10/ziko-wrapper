import { ReactNode } from 'react';

export interface DomWrapperProps {
  children?: ReactNode | ReactNode[];
}

export function DomWrapper(props: DomWrapperProps): JSX.Element;
