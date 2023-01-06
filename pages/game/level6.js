import {useEffect} from "react";
import {StyledLevelBackground} from "../../components/Backgrounds/Basic-BG";
import {ForwardButton} from "../../components/Buttons/ForwardButton";
import {DialogBox} from "../../components/Boxes/Textbox";

export default function Level6({levelState, handleLevelChange}) {
  useEffect(() => {
    handleLevelChange(4);
  }, []);

  return (
    <StyledLevelBackground levelState={levelState}>
      <DialogBox>
        Very good, you found it! Now on to more challenging things!
      </DialogBox>
      <ForwardButton>Oh come on, this has got to end! seriously!</ForwardButton>
    </StyledLevelBackground>
  );
}
