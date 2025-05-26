import { genericElement, Parent } from "viewkit-ui";
import { tonal_color_object } from "./styling";
import { css } from "@stitches/core";

export type ButtonSizes = "small" | "medium" | "large";
export type ButtonPropertties = {
    label: string;
    icon?: string;
    size?: ButtonSizes;
    disabled?: boolean;
};

const tonal_style = css({
    backgroundColor: tonal_color_object.background,
    color: "black",
    borderRadius: "4px",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    outline: "none",
    margin: "4px",
    width: "200px",
    height: "50px",
    fontWeight: "400",
    fontSize: "1rem",
    fontFamily: "Unica One, sans-serif",
    "&:hover": {
        backgroundColor: "#ffffff",
    },
});

export function TonalButton(props: ButtonPropertties, parent: Parent) {
    const { label, icon, disabled, size } = props;
    icon ? add_icon_button() : null;
    size ? resize_button() : null;
    disabled ? disable_button() : null;

    const element = genericElement("button");
    const button = element(parent);
    button.textContent = label;
    button.classList.add(tonal_style());

    function add_icon_button(){

    }

    function resize_button(){

    }

    function disable_button(){
        
    }
}
