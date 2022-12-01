import styled from "styled-components";

export default function Home() {
  return (
    <Background>
      <h2>Willkommen zum 🐙-Capstone-Template!</h2>
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
