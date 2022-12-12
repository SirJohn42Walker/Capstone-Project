import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import {StyledLevel2} from "../../components/Backgrounds/Basic-BG";
import {useState} from "react";
import {level2Data} from "../../components/LevelData/Level2Data";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import {
  RedButtonSVG,
  BlueButtonSVG,
  GreenButtonSVG,
} from "../../components/Svgs/ButtonSVGs";
import Link from "next/link";

export default function Level2() {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);

  function furtherButton() {
    setButtonTextState(buttonTextState + 1);
    buttonTextState >= 6 && buttonTextState < 8
      ? setTextState(textState + 1)
      : setDialogState(dialogState + 1);
  }

  return (
    <StyledLevel2>
      {buttonTextState >= 6 && buttonTextState < 8 ? (
        <TextBox>{level2Data.text[textState]}</TextBox>
      ) : (
        <DialogBox>{level2Data.dialog[dialogState]}</DialogBox>
      )}
      {buttonTextState > 9 ? (
        <>
          <BlueButtonSVG width="100" height="100" top="60%" left="30%" />
          <Link href="/game/level3">
            <RedButtonSVG width="100" height="100" top="60%" left="70%" />
          </Link>
          <GreenButtonSVG width="100" height="100" top="42%" />
        </>
      ) : (
        <></>
      )}
      <ForwardButton onClick={furtherButton}>
        {level2Data.buttonText[buttonTextState]}
      </ForwardButton>
    </StyledLevel2>
  );
}
