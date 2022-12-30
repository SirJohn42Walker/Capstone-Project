import {useState, useEffect} from "react";
import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import {DialogBox} from "../../components/Boxes/Textbox";
import ShellSVG from "../../components/Svgs/ShellSVGs";
import Link from "next/link";
import {Level4Data} from "../../components/LevelData/Level4Data";
// import SkipButton from "../../components/Buttons/SkipButton";

export default function LevelXY({levelState, handleLevelChange}) {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);
  useEffect(() => {
    handleLevelChange(5);
  }, []);

  // ----- necessary for later -----
  //   function furtherButton() {
  //     setButtonTextState(buttonTextState + 1);
  //     buttonTextState >= x && buttonTextState < x
  //       ? setTextState(textState + 1)
  //       : setDialogState(dialogState + 1);
  //   }
  return (
    <StyledLevelBackground levelState={levelState} height="200vh">
      <DialogBox>Go ahead, press the red shell.</DialogBox>
      <Link href="/game/level5">
        <ShellSVG width="150" height="150" fill="var(--color8)"></ShellSVG>
      </Link>
    </StyledLevelBackground>
  );
}
