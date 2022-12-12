import styled from "styled-components";

export default function Header() {
  return (
    <FixedHeader>
      <Headline>Depths of Reason</Headline>
    </FixedHeader>
  );
}

const FixedHeader = styled.div`
  z-index: 1;
  position: fixed;
  width: 98vw;
  top: 1vw;
  left: 1vw;
  right: 1vw;
  height: 80px;
  background-color: var(--color14);
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  color: var(--color3);
`;
