import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import StyledMain from "../../components/Backgrounds/Basic-BG";
import {useState} from "react";
import {level1Data} from "../../components/LevelData/Level1Data";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import {RedButtonSVG} from "../../components/Svgs/ButtonSVGs";
import Link from "next/link";

export default function Level1() {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);

  function furtherButton() {
    if (textState < 6) {
      setTextState(textState + 1);
      setButtonTextState(buttonTextState + 1);
    } else setDialogState(dialogState + 1);
    setButtonTextState(buttonTextState + 1);
  }

  function TextFill() {
    if (textState < 6) {
      return <TextBox>{level1Data.text[textState]}</TextBox>;
    }
    if (dialogState < 15) {
      return <DialogBox>{level1Data.dialog[dialogState]}</DialogBox>;
    } else {
      return (
        <>
          <DialogBox>{level1Data.dialog[dialogState]}</DialogBox>
          <Link href="/game/level2">
            <RedButtonSVG width="100" height="100" />
          </Link>
        </>
      );
    }
  }

  return (
    <StyledMain>
      <TextFill />
      <ForwardButton onClick={furtherButton}>
        {level1Data.buttonText[buttonTextState]}
      </ForwardButton>
    </StyledMain>
  );
}