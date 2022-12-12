import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import TextBox from "../../components/Boxes/Textbox";
import {DialogBox} from "../../components/Boxes/Textbox";
import {useEffect} from "react";

export default function Level3({levelState, handleLevelChange}) {
  useEffect(() => {
    handleLevelChange(4);
  }, []);
  return (
    <StyledLevelBackground levelState={levelState}>
      <TextBox>Platzhalter</TextBox>
      <DialogBox>Noch mehr Platzhalter</DialogBox>
    </StyledLevelBackground>
  );
}
