import styled from "styled-components";
import {useState} from "react";
import {DialogBox} from "../Textbox";
import {ForwardButton} from "../../Buttons/ForwardButton";

export function AnswerForm({
  rightAnswer,
  // rightAnswerReaction,
  // wrongAnswerReaction,
  nextLevel,
  setDialogState,
}) {
  const [answer, setAnswer] = useState("");
  const [
    answerMessage,
    // setAnswerMessage
  ] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      window.location.href = nextLevel;
    }, 5000);
    answer?.includes(rightAnswer) ? setDialogState(6) : setDialogState(7);
    //   setAnswerMessage(rightAnswerReaction)
    // : setAnswerMessage(wrongAnswerReaction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={answer}
        onChange={event => setAnswer(event.target.value)}
        placeholder="Your answer goes here."
      ></InputField>
      {answerMessage && <DialogBox>{answerMessage}</DialogBox>}
      <ForwardButton type="submit" disabled={submitting}>
        Of course this is the answer.
      </ForwardButton>
    </form>
  );
}

const InputField = styled.input`
  background-color: var(--color13);
  color: var(--color2);
  position: fixed;
  bottom: 28vh;
  left: 50%;
  border-radius: 15px;
  padding: 5px;
  font-size: medium;
  display: flex;
  max-width: 70vw;
  transform: translate(-50%);
`;
