import Textbox from "../components/Boxes/Textbox";
import StyledMain from "../components/Backgrounds/Basic-BG";

export default function Profile() {
  return (
    <StyledMain>
      <Textbox>
        Username: <br />
        Max Musterghoti
      </Textbox>
      <Textbox>Level Reached: 6</Textbox>
      <Textbox>Time spent ingame: 66 Minutes</Textbox>
    </StyledMain>
  );
}
