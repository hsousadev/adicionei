import { Container } from "./styles";

interface InitialPictureProps {
  name: string;
  width: number;
  height: number;
}

const InitialPicture = ({ name, width, height }: InitialPictureProps) => {
  return (
    <Container height={height} width={width}>
      {name && <h3>{Array.from(name)[0]}</h3>}
    </Container>
  );
};

export default InitialPicture;
