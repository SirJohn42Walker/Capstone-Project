import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import {useState, useEffect} from "react";
import {level2Data} from "../../components/LevelData/Level2Data";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import {
  RedButtonSVG,
  BlueButtonSVG,
  GreenButtonSVG,
} from "../../components/Svgs/ButtonSVGs";
import Link from "next/link";
import SkipButton from "../../components/Buttons/SkipButton";

export default function Level2({levelState, handleLevelChange}) {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);
  useEffect(() => {
    handleLevelChange(3);
  }, []);

  function furtherButton() {
    setButtonTextState(buttonTextState + 1);
    buttonTextState >= 6 && buttonTextState < 8
      ? setTextState(textState + 1)
      : setDialogState(dialogState + 1);
  }

  return (
    <StyledLevelBackground levelState={levelState}>
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
      <SkipButton
        setButtonTextState={setButtonTextState}
        setDialogState={setDialogState}
        buttonTextValue={10}
        dialogValue={8}
      />
    </StyledLevelBackground>
  );
}
