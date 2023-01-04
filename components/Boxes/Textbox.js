import styled from "styled-components";

export default function TextBox({children}) {
  return (
    <Frame>
      <Text>{children}</Text>
    </Frame>
  );
}

export function DialogBox({children}) {
  return (
    <Frame dialog={true}>
      <Text>{children}</Text>
    </Frame>
  );
}

export const Frame = styled.div`
  font-family: ${props => (props.dialog ? "Caveat" : "")};
  color: ${props => (props.dialog ? "var(--color9)" : "var(--color1)")};
  background-color: ${props =>
    props.dialog ? "var(--color17)" : "var(--color13)"};
  border: 2px solid var(--color13);
  margin: 15vh 8vw 0 8vw;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Text = styled.h2`
  margin: 1.5rem;
  font-size: larger;
  text-align: justify;
`;
