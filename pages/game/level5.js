import {useState, useEffect} from "react";
import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import SkipButton from "../../components/Buttons/SkipButton";
import {Level5Data} from "../../components/LevelData/Level5Data";
import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import ImageBox from "../../components/Boxes/ImageBox";
import {LevelPictures} from "../../components/LevelPicturesArray";

export default function Level5({levelState, handleLevelChange}) {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);
  useEffect(() => {
    handleLevelChange(6);
  }, []);

  function furtherButton() {
    setButtonTextState(buttonTextState + 1);
    buttonTextState === 3
      ? setTextState(textState + 1)
      : setDialogState(dialogState + 1);
  }
  return (
    <StyledLevelBackground levelState={levelState}>
      {buttonTextState === 3 ? (
        <TextBox>{Level5Data.text[textState]}</TextBox>
      ) : (
        <DialogBox>{Level5Data.dialog[dialogState]}</DialogBox>
      )}
      {buttonTextState <= 12 ? (
        <ForwardButton onClick={furtherButton}>
          {Level5Data.buttonText[buttonTextState]}
        </ForwardButton>
      ) : null}
      {buttonTextState >= 13 ? <ImageBox data={LevelPictures} /> : null}

      {buttonTextState <= 12 ? (
        <SkipButton
          setButtonTextState={setButtonTextState}
          setDialogState={setDialogState}
          buttonTextValue={10}
          dialogValue={9}
        />
      ) : null}
    </StyledLevelBackground>
  );
}
