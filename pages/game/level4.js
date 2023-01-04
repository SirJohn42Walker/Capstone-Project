import {useState, useEffect} from "react";
import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import {DialogBox} from "../../components/Boxes/Textbox";
import ShellSVG from "../../components/Svgs/ShellSVGs";
import Link from "next/link";
import {Level4Data} from "../../components/LevelData/Level4Data";
import SkipButton from "../../components/Buttons/SkipButton";
import {ForwardButton} from "../../components/Buttons/ForwardButton";

export default function LevelXY({levelState, handleLevelChange}) {
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);
  useEffect(() => {
    handleLevelChange(5);
  }, []);

  function furtherButton() {
    setButtonTextState(buttonTextState + 1);
    setDialogState(dialogState + 1);
  }
  return (
    <StyledLevelBackground levelState={levelState} height="200vh">
      <DialogBox>{Level4Data.dialog[dialogState]}</DialogBox>
      {buttonTextState <= 6 ? (
        <ForwardButton onClick={furtherButton}>
          {Level4Data.buttonText[buttonTextState]}
        </ForwardButton>
      ) : null}
      {buttonTextState <= 4 ? (
        <SkipButton
          setButtonTextState={setButtonTextState}
          setDialogState={setDialogState}
          buttonTextValue={5}
          dialogValue={5}
        />
      ) : null}
      {buttonTextState > 4 ? (
        <Link href="/game/level5">
          <ShellSVG width="150" height="150" fill="var(--color8)"></ShellSVG>
        </Link>
      ) : null}
    </StyledLevelBackground>
  );
}
