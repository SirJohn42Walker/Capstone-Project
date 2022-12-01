import styled from "styled-components";
import Textbox from "../components/Boxes/Textbox";

export default function Home() {
  return (
    <Background>
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
        Oh, and don't let the 🐙 bite!
      </Textbox>
    </Background>
  );
}

const Background = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: auto;
  width: 100vw;
  background: conic-gradient(
    from 180deg at 50% 50%,
    var(--color15) 0deg,
    var(--color17) 50.63deg,
    var(--color16) 166.87deg,
    var(--color18) 241.88deg,
    var(--color15) 360deg
  );
`;
