import styled from "styled-components";

export default function Header() {
  return (
    <FixedHeader>
      <Headline>The Game of Mind</Headline>
    </FixedHeader>
  );
}

const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 80px;
  background-color: #0b2545;
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  color: #fae3c6;
`;
