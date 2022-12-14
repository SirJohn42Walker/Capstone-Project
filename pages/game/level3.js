import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import {useState, useEffect} from "react";
import {level3Data} from "../../components/LevelData/Level3Data";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import {AnswerForm} from "../../components/Boxes/Interactive Boxes/AnswerForm";
import SkipButton from "../../components/Buttons/SkipButton";

export default function Level3({levelState, handleLevelChange}) {
  const [textState, setTextState] = useState(0);
  const [dialogState, setDialogState] = useState(0);
  const [buttonTextState, setButtonTextState] = useState(0);
  useEffect(() => {
    handleLevelChange(5);
  }, []);

  function furtherButton() {
    setButtonTextState(buttonTextState + 1);
    buttonTextState >= 4 && buttonTextState < 7
      ? setTextState(textState + 1)
      : setDialogState(dialogState + 1);
  }

  // const Dialog;
  // if (buttonTextState>=4 && buttonTextState <7) {
  //   Dialog = (<TextBox>{level3Data.text[textState]}</TextBox>)
  // } else {Dialog = (<DialogBox>{level3Data.dialog[dialogState]}</DialogBox>);}

  return (
    <StyledLevelBackground levelState={levelState}>
      {buttonTextState >= 4 && buttonTextState < 7 ? (
        <TextBox>{level3Data.text[textState]}</TextBox>
      ) : (
        <DialogBox>{level3Data.dialog[dialogState]}</DialogBox>
      )}
      {buttonTextState <= 7 ? (
        <ForwardButton onClick={furtherButton}>
          {level3Data.buttonText[buttonTextState]}
        </ForwardButton>
      ) : (
        <AnswerForm
          setDialogState={setDialogState}
          rightAnswer={level3Data.answer}
          rightAnswerReaction={level3Data.dialog[6]}
          wrongAnswerReaction={level3Data.dialog[7]}
          nextLevel={"/game/level4"}
        />
      )}

      {buttonTextState <= 7 ? (
        <SkipButton
          setButtonTextState={setButtonTextState}
          setDialogState={setDialogState}
          buttonTextValue={8}
          dialogValue={5}
        />
      ) : null}
    </StyledLevelBackground>
  );
}
