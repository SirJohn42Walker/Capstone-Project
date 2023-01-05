import TextBox from "../components/Boxes/Textbox";
import StyledMain from "../components/Backgrounds/Basic-BG";
import {ForwardButton} from "../components/Buttons/ForwardButton";
import Link from "next/link";

export default function Random() {
  return (
    <StyledMain>
      <TextBox>TestText</TextBox>
      <Link href={`/game/level${Math.ceil(Math.random() * 5)}`}>
        <ForwardButton>Go!</ForwardButton>
      </Link>
    </StyledMain>
  );
}
