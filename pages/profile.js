import Textbox from "../components/Boxes/Textbox";
import BasicBG from "../components/Backgrounds/Basic-BG";

export default function Profile() {
  return (
    <>
      <BasicBG />
      <Textbox>
        Username: <br />
        Max Musterghoti
      </Textbox>
      <Textbox>Level Reached: 6</Textbox>
      <Textbox>Time spent ingame: 66 Minutes</Textbox>
    </>
  );
}
