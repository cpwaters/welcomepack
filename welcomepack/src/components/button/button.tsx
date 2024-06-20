import { JSXElement } from "solid-js";
import "./button.css";

interface ButtonProps {
  children: any;
  color?: string;
}

export function Button({ children, color }: ButtonProps): JSXElement {
  return (
    <button
      onClick={() => console.log("click")}
      style={{ background: color }}
      class="button"
    >
      {children}
    </button>
  );
}
