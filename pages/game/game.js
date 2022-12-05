import Textbox from "../../components/Boxes/Textbox";
import StyledMain from "../../components/Backgrounds/Basic-BG";
import {useState} from "react";
import {level1Data} from "../../components/LevelData/Level1Data";

export default function Game() {
  const [textState, setTextState] = useState(0);
  function furtherButton() {
    setTextState(textState + 1);
  }

  return (
    <StyledMain>
      <Textbox>{level1Data.text[textState]}</Textbox>
      <button onClick={furtherButton}>Go on...</button>
    </StyledMain>
  );
}
