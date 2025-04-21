import {
  LinearLayout,
  Button,
  Heading1,
  HorizontalRule,
  Image,
} from "innerscope";
import { app } from "../../index.ts";
import SideBar from "../components/sidebar.ts";
import Letter from "../components/letter.ts";

export default function HomePage() {
  const page = LinearLayout(app.root);
  page.ParentFill = "FILLXY";
  page.LayoutDirection = "LEFT_TO_RIGHT";
  page.style.backgroundColor = "#1A1A1E";

  SideBar(page);

  const content = LinearLayout(page);
  content.ElementAlignment = "VCENTER";
  content.ParentFill = "FILLXY";
  content.LayoutDirection = "TOP_TO_BOTTOM";

  const heading = Heading1(content);
  heading.textContent = "Oarabile's Tech Abode";
  heading.classList.add("heading");
  heading.style.color = "#ffffff";

  const divider = HorizontalRule(content);
  divider.style.width = "3rem";
  divider.style.backgroundColor = "#ffffff";
}
