import styled from "styled-components";

export const ForwardButton = styled.button`
  color: var(--color8);
  position: fixed;
  bottom: 16vh;
  left: 20vw;
  right: 20vw;
  border: 7px double var(--color8);
  border-radius: 15px;
  padding: 5px;
  font-size: medium;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60vw;
  min-width: 30vw;
  filter: drop-shadow(3px -3px 4px rgba(0, 0, 0, 0.3));
  z-index: 12;
`;
