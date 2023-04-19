import { HTMLAttributes } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface DefaultProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
  onClick?: () => void;
  type?: "submit";
}

const DefaultButton = ({ icon, text, onClick, type }: DefaultProps) => {
  return (
    <Container type={type} onClick={onClick}>
      <Image src={icon} alt="" />
      <h4>{text}</h4>
    </Container>
  );
};

export default DefaultButton;
