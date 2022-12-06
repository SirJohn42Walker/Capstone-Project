import TextBox from "../components/Boxes/Textbox";
import StyledMain from "../components/Backgrounds/Basic-BG";

export default function Profile() {
  return (
    <StyledMain>
      <TextBox>
        Username: <br />
        Max Musterghoti
      </TextBox>
      <TextBox>Level Reached: 6</TextBox>
      <TextBox>Time spent ingame: 66 Minutes</TextBox>
    </StyledMain>
  );
}
