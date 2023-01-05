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
  color: ${props => (props.dialog ? "var(--color9)" : "var(--color2)")};
  background-color: ${props =>
    props.dialog ? "var(--color17)" : "var(--color13)"};
  border: 7px double var(--color12);
  margin: 15vh 8vw 0 8vw;
  border-radius: 25px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.42));
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Text = styled.h2`
  margin: 1.5rem;
  font-size: larger;
  text-align: justify;
`;
