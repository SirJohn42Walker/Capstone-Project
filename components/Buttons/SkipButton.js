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

  return (
    <SkipText onClick={skipButton}>
      I am a very boring person and do not want to read all this text.
    </SkipText>
  );
}

const SkipText = styled.button`
  background-color: var(--color8);
  color: var(--color6);
  position: fixed;
  bottom: 11vh;
  left: 50vw;
  width: 80vw;
  border-radius: 15px;
  padding: 5px;
  font-size: smaller;
  display: flex;
  max-width: 70vw;
  transform: translate(-50%);
  z-index: 1000;
`;
