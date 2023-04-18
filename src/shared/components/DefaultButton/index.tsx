import { HTMLAttributes } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface DefaultProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
  onClick?: () => void;
}

const DefaultButton = ({ icon, text, onClick }: DefaultProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={icon} alt="" />
      <h4>{text}</h4>
    </Container>
  );
};

export default DefaultButton;
