import Image from "next/image";

import { useContext, useState } from "react";

import InitialPicture from "@/shared/components/InitialPicture";

import ShortButton from "@/shared/components/ShortButton";

import purplePushPinOutline from "@/shared/assets/icons/purplePushPinOutline.svg";
import pushPinFillWhite from "@/shared/assets/icons/pushPinFillWhite.svg";
import trashSimple from "@/shared/assets/icons/trashSimple.svg";
import loading from "@/shared/assets/icons/loading.svg";

import { Container } from "./styles";
import { useRouter } from "next/router";
import { ContactContext } from "../../[contact_slug].page";

const Header = () => {
  const router = useRouter();
  const { contact_slug } = router.query;

  const { contactRequested, setContactRequested, editMode } =
    useContext(ContactContext);

  const [contactFixed, setContactFixed] = useState(contactRequested?.fixed);

  const [showUpdateMessage, setShowUpdateMessage] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showWarningMessage, setShowWarningMessage] = useState(false);

  function handleUpdateMessage() {
    setShowUpdateMessage(true);

    setTimeout(() => {
      setShowUpdateMessage(false);
    }, 3000);
  }

  function handleDeleteMessage() {
    setShowDeleteMessage(true);

    setTimeout(() => {
      router.push("/");
    }, 3000);
  }

  function handleFixingContact() {
    setContactRequested((prevContactData) => ({
      ...prevContactData,
      fixed: !contactRequested?.fixed,
    }));

    setContactFixed(!contactRequested?.fixed);
    handleSetContactFixed();
  }

  async function handleSetContactFixed() {
    const response = await fetch(
      `http://localhost:3004/contacts/${contact_slug}`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...contactRequested,
          fixed: !contactRequested?.fixed,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Data posted successfully!");
      handleUpdateMessage();
    } else {
      console.log("Error posting data.");
    }
  }

  async function handleDeleteContact() {
    const response = await fetch(
      `http://localhost:3004/contacts/${contact_slug}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Contact delete successfully!");
      setShowWarningMessage(false);
      handleDeleteMessage();
    } else {
      console.log("Error deleting contact.");
    }
  }

  return (
    <Container>
      {contactRequested.img_url ? (
        <img
          src={contactRequested.img_url}
          alt=""
          width={162}
          height={162}
          style={{
            borderRadius: "100%",
            objectFit: "cover",
            border: `2px solid var(--TropicalIndigo)`,
          }}
        />
      ) : (
        <InitialPicture
          name={contactRequested.first_name}
          width={162}
          height={162}
        />
      )}
      <h2>
        {contactRequested.first_name} {contactRequested.last_name}
      </h2>

      {!editMode && contact_slug && (
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

            <ShortButton
              borderColor={`var(--Bittersweet)`}
              icon={trashSimple}
              onClick={() => setShowWarningMessage(true)}
            />
          </div>

          {showUpdateMessage && <h4>Contato atualizado com sucesso!</h4>}
          {showDeleteMessage && (
            <h4>
              Contato deletado com sucesso. Redirecionando...{" "}
              <Image src={loading} width={16} height={16} alt="" />{" "}
            </h4>
          )}

          {showWarningMessage && (
            <h4>
              Essa ação não poderá ser desfeita, tem certeza? <br />
              <strong
                style={{ color: `var(--Bittersweet)` }}
                onClick={() => handleDeleteContact()}
              >
                Sim, quero deletar
              </strong>{" "}
              <strong
                style={{ color: `var(--TropicalIndigo)` }}
                onClick={() => setShowWarningMessage(false)}
              >
                Voltar
              </strong>{" "}
            </h4>
          )}
        </div>
      )}

      <div className="line" />
    </Container>
  );
};

export default Header;
