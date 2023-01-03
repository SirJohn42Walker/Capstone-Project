import styled from "styled-components";
import Image from "next/image";

export default function ImageBox(props) {
  const data = props.data;
  const pictures = data.map(picture => (
    <PictureFrame
      key={picture.id}
      src={picture.content}
      width={200}
      height={200}
    />
  ));
  return <ImageScrollBox>{pictures}</ImageScrollBox>;
}

const PictureFrame = styled(Image)`
  filter: opacity(0.92);
  border-radius: 30px;
  justify-self: center;
  object-fit: cover;
`;

const ImageScrollBox = styled.div`
  display: grid;
  position: absolute;
  bottom: 18vh;
  top: 30vh;
  left: 25vw;
  grid-gap: 3vh;
  grid-template-columns: 1fr;
  align-content: space-between;
  overflow: scroll;
  z-index: -1;

  &::-webkit-scrollbar {
    display: none;
  }
`;
