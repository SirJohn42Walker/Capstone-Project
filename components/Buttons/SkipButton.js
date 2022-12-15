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

  return <button onClick={skipButton}>Skip to riddle</button>;
}
