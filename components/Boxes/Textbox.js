import styled from "styled-components";

export default function Textbox({children}) {
  return (
    <Frame>
      <Text>{children}</Text>
    </Frame>
  );
}

const Frame = styled.div`
  color: var(--color1);
  background-color: var(--color13);
  border: 2px solid var(--color12);
  margin: 15vh 8vw 0 8vw;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Text = styled.h2`
  margin: 1.5rem;
  font-size: medium;
  text-align: justify;
`;
