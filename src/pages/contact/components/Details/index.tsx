import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { ContactProps } from "@/shared/types/contacts";

import ShortButton from "@/shared/components/ShortButton";

import pencilSimpleLine from "@/shared/assets/icons/pencilSimpleLine.svg";
import phone from "@/shared/assets/icons/phone.svg";
import envelopeOpen from "@/shared/assets/icons/envelopeOpen.svg";
import mapPinLine from "@/shared/assets/icons/mapPinLine.svg";
import notepad from "@/shared/assets/icons/notepad.svg";

import { Container } from "./styles";

interface DetailsProps {
  contact: ContactProps;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const Details = ({ contact, setEditMode }: DetailsProps) => {
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
            <h4>{contact.first_phone}</h4>
            {contact.second_phone && <h4>{contact.second_phone}</h4>}
            {contact.third_phone && <h4>{contact.third_phone}</h4>}
          </div>
        </div>
        <div className="detail">
          <Image src={envelopeOpen} width={24} height={24} alt="" />
          <div className="info">
            <h4>{contact.first_email}</h4>
            {contact.second_email && <h4>{contact.second_email}</h4>}
          </div>
        </div>
        <div className="detail">
          <Image src={mapPinLine} width={24} height={24} alt="" />
          <div className="info">
            {contact.first_address && (
              <h4>
                {contact.first_address}, {contact.first_number}{" "}
                {contact.first_neighbourhood} | {contact.first_city}{" "}
                {contact.first_uf} {contact.first_cep}
              </h4>
            )}
            {contact.second_address && (
              <h4>
                {contact.second_address}, {contact.second_number}{" "}
                {contact.second_neighbourhood} | {contact.second_city}{" "}
                {contact.second_uf} {contact.second_cep}
              </h4>
            )}
          </div>
        </div>
        <div className="detail">
          <Image src={notepad} width={24} height={24} alt="" />
          <div className="info">
            {contact.notes && <h4>{contact.notes}</h4>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
