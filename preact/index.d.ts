import { ComponentChildren } from "preact";

interface WrapperProps {
    children?: ComponentChildren; // Allows passing multiple children or a single child
}

// Wrapper component definition
export default function Wrapper({ children }: WrapperProps): JSX.Element;
