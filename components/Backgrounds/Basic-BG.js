import styled from "styled-components";
import {BackgroundImages} from "./BackgroundImages";

const StyledMain = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: auto;
  width: 100vw;
  background: conic-gradient(
    from 180deg at 50% 50%,
    var(--color17) 50.63deg,
    var(--color16) 166.87deg,
    var(--color18) 241.88deg,
    var(--color15) 360deg
  );
  z-index: -1;
`;

export const StyledLevelBackground = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: auto;
  ${props => (props.height ? `height: ${props.height};` : "")};
  width: auto;
  max-width: 100%;
  ${props =>
    props.levelState
      ? `background-image: url(${BackgroundImages[props.levelState]});`
      : ""}
  background-size: cover;
  z-index: -1;
`;

export default StyledMain;
