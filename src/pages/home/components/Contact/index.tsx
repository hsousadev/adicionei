import { useContext, useEffect } from "react";
import { Container } from "./styles";

import InitialPicture from "@/shared/components/InitialPicture";
import { GlobalContext } from "@/pages/_app.page";

interface ContactProps {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  onClick: () => void;
}

const Contact = ({
  first_name,
  last_name,
  email,
  phone,
  onClick,
}: ContactProps) => {
  const { isDarkTheme } = useContext(GlobalContext);

  return (
    <Container onClick={onClick} isDarkTheme={isDarkTheme}>
      <div className="name">
        <InitialPicture name={first_name} width={48} height={48} />
        <h4>
          {first_name} {last_name}
        </h4>
      </div>

      <h4 className="email">{email}</h4>
      <h4 className="phone">{phone}</h4>
    </Container>
  );
};

export default Contact;
