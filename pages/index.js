import TextBox from "../components/Boxes/Textbox";
import {StyledLevelBackground} from "../components/Backgrounds/Basic-BG";
import {useEffect} from "react";

export default function Home({levelState, handleLevelChange}) {
  useEffect(() => {
    handleLevelChange(2);
  }, []);
  return (
    <StyledLevelBackground levelState={levelState}>
      <TextBox>
        Your ship has reached its destination. Now you could still turn back.
        But if you are willing to dive into the unknow, don your Diving-Helmet
        and step overbaord. Oh, and do not let the 🐙 bite!
      </TextBox>
    </StyledLevelBackground>
  );
}
