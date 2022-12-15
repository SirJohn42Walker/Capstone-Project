import styled from "styled-components";
import {useState} from "react";
import {DialogBox} from "../Textbox";

export function AnswerForm() {
  const [answer, setAnswer] = useState("");
  const [answerMessage, setAnswerMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setAnswer(event.target.value);
    if (answer.includes("the answer")) {
      setAnswerMessage("Test123");
    } else {
      setAnswerMessage("Dizz 123");
    }
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
      <button type="submit">Submit</button>
    </form>
  );
}

const InputField = styled.input`
  background-color: var(--color14);
  color: var(--color2);
  position: fixed;
  bottom: 20vh;
  left: 50%;
  border-radius: 15px;
  padding: 5px;
  font-size: medium;
  display: flex;
  max-width: 70vw;
  transform: translate(-50%);
`;
