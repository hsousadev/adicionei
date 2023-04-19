import Image from "next/image";

import { Container } from "./styles";

import userNewContact from "@/shared/assets/icons/userNewContact.svg";

interface InitialPictureProps {
  name: string;
  width: number;
  height: number;
}

const InitialPicture = ({ name, width, height }: InitialPictureProps) => {
  return (
    <Container height={height} width={width}>
      {name ? (
        <h3>{Array.from(name)[0]}</h3>
      ) : (
        <Image src={userNewContact} width={64} height={64} alt="" />
      )}
    </Container>
  );
};

export default InitialPicture;
