import { genericElement, Parent } from "innerscope";
import { tonal_color_object } from "./styling";

export type ButtonSizes = "small" | "medium" | "large";
export type ButtonPropertties = {
  label: string;
  icon?: string;
  disabled?: boolean;
  size?: ButtonSizes;
};

export function TonalButton(props: ButtonPropertties, parent: Parent) {
  const { label, icon, disabled, size } = props;
  const element = genericElement("button");
  const button = element(parent);

  button.textContent = label;
  button.style.backgroundColor = tonal_color_object.background;
  button.style.color = "black";
  button.style.borderRadius = "4px";
  button.style.padding = "8px 16px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.transition = "background-color 0.3s ease";
  button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  button.style.outline = "none";
  button.style.border = "none";
  button.style.margin = "4px";
  button.style.width = "200px";
  button.style.height = "50px";
  button.style.textDecoration = "bold";
}
