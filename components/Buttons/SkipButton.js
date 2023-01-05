import styled from "styled-components";

export default function SkipButton({
  setButtonTextState,
  setDialogState,
  buttonTextValue,
  dialogValue,
}) {
  function skipButton() {
    setButtonTextState(buttonTextValue);
    setDialogState(dialogValue);
  }

  return <SkipText onClick={skipButton}>Skip to riddle.</SkipText>;
}

const SkipText = styled.button`
  filter: opacity(0.89);
  background-color: var(--color12);
  color: var(--color14);
  position: fixed;
  bottom: 16vh;
  left: 4vw;
  width: auto;
  border-radius: 35%;
  padding: 5px;
  font-size: x-small;
  display: flex;
  max-width: 15vw;
  z-index: 1000;
`;
