import { useContext } from "react";
import Image from "next/image";

import ShortButton from "@/shared/components/ShortButton";

import pencilSimpleLine from "@/shared/assets/icons/pencilSimpleLine.svg";
import phone from "@/shared/assets/icons/phone.svg";
import envelopeOpen from "@/shared/assets/icons/envelopeOpen.svg";
import mapPinLine from "@/shared/assets/icons/mapPinLine.svg";
import notepad from "@/shared/assets/icons/notepad.svg";

import { Container } from "./styles";
import { ContactContext } from "../../[contact_slug].page";

const Details = () => {
  const { contactRequested, setEditMode } = useContext(ContactContext);

  return (
    <Container>
      <div className="header">
        <h3>Detalhes</h3>
        <ShortButton
          icon={pencilSimpleLine}
          onClick={() => setEditMode(true)}
        />
      </div>

      <div className="informations">
        <div className="detail">
          <Image src={phone} width={24} height={24} alt="" />
          <div className="info">
            <h4>{contactRequested.first_phone}</h4>
            {contactRequested.second_phone && (
              <h4>{contactRequested.second_phone}</h4>
            )}
            {contactRequested.third_phone && (
              <h4>{contactRequested.third_phone}</h4>
            )}
          </div>
        </div>
        <div className="detail">
          <Image src={envelopeOpen} width={24} height={24} alt="" />
          <div className="info">
            <h4>{contactRequested.first_email}</h4>
            {contactRequested.second_email && (
              <h4>{contactRequested.second_email}</h4>
            )}
          </div>
        </div>
        <div className="detail">
          <Image src={mapPinLine} width={24} height={24} alt="" />
          <div className="info">
            {contactRequested.first_address && (
              <h4>
                {contactRequested.first_address},{" "}
                {contactRequested.first_number}{" "}
                {contactRequested.first_neighbourhood} |{" "}
                {contactRequested.first_city} {contactRequested.first_uf}{" "}
                {contactRequested.first_cep}
              </h4>
            )}
            {contactRequested.second_address && (
              <h4>
                {contactRequested.second_address},{" "}
                {contactRequested.second_number}{" "}
                {contactRequested.second_neighbourhood} |{" "}
                {contactRequested.second_city} {contactRequested.second_uf}{" "}
                {contactRequested.second_cep}
              </h4>
            )}
          </div>
        </div>
        <div className="detail">
          <Image src={notepad} width={24} height={24} alt="" />
          <div className="info">
            {contactRequested.notes && <h4>{contactRequested.notes}</h4>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
