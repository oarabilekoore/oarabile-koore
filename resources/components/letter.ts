import { Widget, Parent } from "viewkit-ui";

export default function Letter(parent: Parent) {
    const letter = Widget.LinearLayout(parent);
    letter.ElementAlignment = "VCENTER";
    letter.ParentFill = "FILLXY";

    const intro = Widget.Paragraph(letter);
    intro.textContent = `Hi there welcome to my very small internet space, where you can find all sorts of things
    such as pictures, videos, games and my tech takes !
    Here you can explore my world, learn about my interests, and maybe even play a game or two!`;
    return letter;
}
