import TextBox from "../components/Boxes/Textbox";
import {StyledLevelBackground} from "../components/Backgrounds/Basic-BG";
import {ForwardButton} from "../components/Buttons/ForwardButton";
import Link from "next/link";
import {useEffect} from "react";

export default function Random({levelState, handleLevelChange}) {
  useEffect(() => {
    handleLevelChange(1);
  }, []);
  return (
    <StyledLevelBackground levelState={levelState}>
      <TextBox>
        Be warned, if you continue here, you will be taken to a random level.
        There will be no context and no explanation given.
      </TextBox>
      <Link href={`/game/level${Math.ceil(Math.random() * 5)}`}>
        <ForwardButton>Pff. As if I care! Go on!</ForwardButton>
      </Link>
    </StyledLevelBackground>
  );
}
