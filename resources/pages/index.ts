import { Widget } from "viewkit-ui";
import { app } from "../../index.ts";
import SideBar from "../components/sidebar.ts";
import Letter from "../components/letter.ts";
import { TonalButton } from "../components/buttons.ts";

export default function HomePage() {
    const page = Widget.LinearLayout(app.root);
    page.ParentFill = "FILLXY";
    page.LayoutDirection = "LEFT_TO_RIGHT";
    page.style.backgroundColor = "#1A1A1E";

    SideBar(page);

    const content = Widget.LinearLayout(page);
    content.ElementAlignment = "VCENTER";
    content.ParentFill = "FILLXY";
    content.LayoutDirection = "TOP_TO_BOTTOM";

    const heading = Widget.Heading1(content);
    heading.textContent = "Oarabile's Tech Abode";
    heading.classList.add("heading");
    heading.style.color = "#ffffff";

    const divider = Widget.HorizontalRule(content);
    divider.style.width = "3rem";
    divider.style.backgroundColor = "#ffffff";

    TonalButton({ label: "Click Me" }, content);
}
