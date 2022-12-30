import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import {useState, useEffect} from "react";
import {level1Data} from "../../components/LevelData/Level1Data";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import {RedButtonSVG} from "../../components/Svgs/ButtonSVGs";
import Link from "next/link";
import SkipButton from "../../components/Buttons/SkipButton";

export default function Level1({levelState, handleLevelChange}) {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);
  useEffect(() => {
    handleLevelChange(2);
  }, []);

  function furtherButton() {
    if (textState < 6) {
      setTextState(textState + 1);
      setButtonTextState(buttonTextState + 1);
    } else setDialogState(dialogState + 1);
    setButtonTextState(buttonTextState + 1);
  }

  return (
    <StyledLevelBackground levelState={levelState}>
      {buttonTextState <= 6 ? (
        <TextBox>{level1Data.text[textState]}</TextBox>
      ) : (
        <DialogBox>{level1Data.dialog[dialogState]}</DialogBox>
      )}
      {buttonTextState > 20 ? (
        <>
          <Link href="/game/level2">
            <RedButtonSVG width="100" height="100" />
          </Link>
        </>
      ) : null}
      <ForwardButton onClick={furtherButton}>
        {level1Data.buttonText[buttonTextState]}
      </ForwardButton>
      <SkipButton
        setButtonTextState={setButtonTextState}
        setDialogState={setDialogState}
        buttonTextValue={21}
        dialogValue={15}
      />
    </StyledLevelBackground>
  );
}
