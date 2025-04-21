import { LinearLayout, Paragraph, Parent } from "innerscope";

export default function Letter(parent: Parent) {
  const letter = LinearLayout(parent);
  letter.ElementAlignment = "VCENTER";
  letter.ParentFill = "FILLXY";

  const intro = Paragraph(letter);
  intro.textContent = `Hi there welcome to my very small internet space, where you can find all sorts of things
    such as pictures, videos, games and my tech takes !
    Here you can explore my world, learn about my interests, and maybe even play a game or two!`;
  return letter;
}
