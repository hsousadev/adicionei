import InitialPicture from "@/shared/components/InitialPicture";

import ShortButton from "@/shared/components/ShortButton";

import purplePushPinOutline from "@/shared/assets/icons/purplePushPinOutline.svg";
import pushPinFillWhite from "@/shared/assets/icons/pushPinFillWhite.svg";
import trashSimple from "@/shared/assets/icons/trashSimple.svg";

import { Container } from "./styles";

interface HeaderProps {
  firstName: string;
  lastName: string;
  contactFixed: boolean | undefined;
  showUpdateMessage: boolean | undefined;
  handleFixingContact: () => void;
}

const Header = ({
  firstName,
  lastName,
  contactFixed,
  showUpdateMessage,
  handleFixingContact,
}: HeaderProps) => {
  return (
    <Container>
      <InitialPicture name={firstName} width={162} height={162} />
      <h2>
        {firstName} {lastName}
      </h2>

      <div className="buttons">
        <div className="fixation-and-delete">
          {contactFixed ? (
            <ShortButton
              icon={pushPinFillWhite}
              selected
              onClick={() => handleFixingContact()}
            />
          ) : (
            <ShortButton
              icon={purplePushPinOutline}
              onClick={() => handleFixingContact()}
            />
          )}

          <ShortButton borderColor={`var(--Bittersweet)`} icon={trashSimple} />
        </div>

        {showUpdateMessage && <h4>Contato atualizado com sucesso!</h4>}
      </div>

      <div className="line" />
    </Container>
  );
};

export default Header;
