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
  width: 96vw;
  top: 2vw;
  left: 2vw;
  right: 2vw;
  height: 80px;
  background-color: var(--color14);
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  color: var(--color3);
`;
