import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ImageBox(props) {
  const data = props.data;
  const linkIndex = props.linkIndex;
  const linkWidth = props.linkWidth;
  const linkHeight = props.linkHeight;
  const linkBottom = props.linkBottom;
  const linkLeft = props.linkLeft;
  const pictures = data.map(picture => (
    <PictureFrame
      key={picture.id}
      src={picture.content}
      width={250}
      height={175}
    />
  ));

  pictures[linkIndex] = (
    <ClickArea>
      {pictures[linkIndex]}
      <ImageLink
        href="/game/level1"
        width={linkWidth}
        height={linkHeight}
        bottom={linkBottom}
        left={linkLeft}
      />
    </ClickArea>
  );

  return <ImageScrollBox>{pictures}</ImageScrollBox>;
}

const PictureFrame = styled(Image)`
  filter: opacity(0.87);
  border-radius: 30px;
  justify-self: center;
  object-fit: cover;
`;

const ImageScrollBox = styled.div`
  display: grid;
  position: absolute;
  bottom: 15vh;
  top: 36vh;
  left: 8vw;
  right: 8vw;
  grid-gap: 2vh;
  grid-template-columns: 1fr;
  align-content: space-between;
  overflow: scroll;
  z-index: -1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageLink = styled(Link)`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  // for placement in other levels
  /* border: 3px solid hotpink; */
`;

const ClickArea = styled.div`
  position: relative;
  justify-self: center;
`;
