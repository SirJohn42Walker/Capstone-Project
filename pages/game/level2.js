import TextBox from "../../components/Boxes/Textbox";
import StyledMain from "../../components/Backgrounds/Basic-BG";
import {useState} from "react";
import {Level2Data} from "../../components/LevelData/Level2Data";
import {
  RedButtonSVG,
  BlueButtonSVG,
  GreenButtonSVG,
} from "../../components/Svgs/ButtonSVGs";

export default function Level2() {
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

  return (
    <StyledMain>
      <TextBox>Level2: Even more weird dialog! - Coming soon</TextBox>
    </StyledMain>
  );
}
