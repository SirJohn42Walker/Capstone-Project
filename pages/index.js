import Textbox from "../components/Boxes/Textbox";
import BasicBG from "../components/Backgrounds/Basic-BG";

export default function Home() {
  return (
    <>
      <BasicBG />
      <Textbox>
        Welcome to the games! You think you know what awaits you? Think again!
        As of now you can still turn back. But not for long. And if you stay,
        your mind certainly wont.
        <br />
        Still here?
        <br />
        Very well. If you think yourself ready, click the weird oldtimy gameboy
        thingy at the bottom.
        <br />
        Oh, and do not let the 🐙 bite!
      </Textbox>
    </>
  );
}
