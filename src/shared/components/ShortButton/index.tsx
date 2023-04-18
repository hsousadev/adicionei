import { HTMLAttributes, useContext } from "react";
import Image from "next/image";

import { Container } from "./styles";
import { GlobalContext } from "@/pages/_app.page";

interface ShortButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  selected?: boolean;
  onClick?: () => void;
  borderColor?: string;
}

const ShortButton = ({
  icon,
  selected,
  onClick,
  borderColor,
}: ShortButtonProps) => {
  const { isDarkTheme } = useContext(GlobalContext);

  return (
    <Container
      isDarkTheme={isDarkTheme}
      borderColor={borderColor}
      isSelected={selected}
      onClick={onClick}
    >
      <Image src={icon} width={20} height={20} alt="" />
    </Container>
  );
};

export default ShortButton;
