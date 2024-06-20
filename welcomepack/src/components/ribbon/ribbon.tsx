import { JSXElement } from "solid-js";
import "./ribbon.css";

interface RibbonProps {
  color: "Warning" | "New";
  text: string;
}

export function Ribbon({ color, text }: RibbonProps): JSXElement {
  return (
    <>
      <span class={`ribbon ${color}`}>{text}</span>
    </>
  );
}
