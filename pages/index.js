import TextBox from "../components/Boxes/Textbox";
import {StyledLevelBackground} from "../components/Backgrounds/Basic-BG";
import {useEffect} from "react";

export default function Home({levelState, handleLevelChange}) {
  useEffect(() => {
    handleLevelChange(1);
  }, []);
  return (
    <StyledLevelBackground levelState={levelState}>
      <TextBox>
        Welcome to the games! You think you know what awaits you? Think again!
        As of now you can still turn back. But not for long. And if you stay,
        your mind certainly wont. Still here? Very well. If you think yourself
        ready, click the weird oldtimy gameboy thingy at the bottom. Oh, and do
        not let the 🐙 bite!
      </TextBox>
    </StyledLevelBackground>
  );
}
