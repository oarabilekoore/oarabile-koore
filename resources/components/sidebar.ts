import { LinearLayout, Div, Image, Parent } from "innerscope";
export default function SideBar(parent: Parent) {
  const sidebar = LinearLayout(parent);
  sidebar.LayoutDirection = "TOP_TO_BOTTOM";
  sidebar.ElementAlignment = "CENTER";
  sidebar.style.width = "250px";
  sidebar.style.height = "100%";
  sidebar.style.backgroundColor = "#121214";

  const logo = Image(sidebar);
  logo.style.borderRadius = "50%";
  logo.style.width = "100px";
  logo.style.height = "100px";
  logo.style.margin = "1rem";
  logo.src = "https://avatars.githubusercontent.com/u/153186345?v=4";

  return sidebar;
}
