import styled from "styled-components";
import {useState} from "react";
import {DialogBox} from "../Textbox";
import {ForwardButton} from "../../Buttons/ForwardButton";

export function AnswerForm({
  rightAnswer,
  rightAnswerReaction,
  wrongAnswerReaction,
}) {
  const [answer, setAnswer] = useState("");
  const [answerMessage, setAnswerMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    answer?.includes(rightAnswer)
      ? setAnswerMessage(rightAnswerReaction)
      : setAnswerMessage(wrongAnswerReaction);
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
      <ForwardButton type="submit">I am sure that is right.</ForwardButton>
    </form>
  );
}

const InputField = styled.input`
  background-color: var(--color13);
  color: var(--color2);
  position: fixed;
  bottom: 25vh;
  left: 50%;
  border-radius: 15px;
  padding: 5px;
  font-size: medium;
  display: flex;
  max-width: 70vw;
  transform: translate(-50%);
`;
