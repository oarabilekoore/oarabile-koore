import { Widget, Parent } from "viewkit-ui";
import { TonalButton } from "./buttons";
import { profile_icon } from "../../resources/constants";

export default function SideBar(parent: Parent) {
    const sidebar = Widget.LinearLayout(parent);
    sidebar.LayoutDirection = "TOP_TO_BOTTOM";
    sidebar.ElementAlignment = "CENTER";
    sidebar.style.width = "250px";
    sidebar.style.height = "100%";
    sidebar.style.backgroundColor = "#121214";

    const logo = Widget.Image(sidebar);
    logo.style.borderRadius = "50%";
    logo.style.width = "100px";
    logo.style.height = "100px";
    logo.style.margin = "1rem";
    //@ts-ignore
    logo.src = profile_icon;

    const divider = Widget.HorizontalRule(sidebar);
    divider.style.width = "3rem";
    divider.style.backgroundColor = "#ffffff";

    TonalButton({ label: "GitHub" }, sidebar);
    TonalButton({ label: "DEV.TO" }, sidebar);
    TonalButton({ label: "Proffesional CV" }, sidebar);
    
    return sidebar;
}
