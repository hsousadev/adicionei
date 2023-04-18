import Image from "next/image";

import { ContactProps } from "@/shared/types/contacts";

import ShortButton from "@/shared/components/ShortButton";

import pencilSimpleLine from "@/shared/assets/icons/pencilSimpleLine.svg";
import phone from "@/shared/assets/icons/phone.svg";
import envelopeOpen from "@/shared/assets/icons/envelopeOpen.svg";
import mapPinLine from "@/shared/assets/icons/mapPinLine.svg";
import notepad from "@/shared/assets/icons/notepad.svg";

import { Container } from "./styles";

const Details = ({
  first_address,
  first_cep,
  first_city,
  first_email,
  first_neighbourhood,
  first_number,
  first_phone,
  first_uf,
  notes,
  second_address,
  second_cep,
  second_city,
  second_email,
  second_neighbourhood,
  second_number,
  second_phone,
  second_uf,
  third_phone,
}: ContactProps) => {
  return (
    <Container>
      <div className="header">
        <h3>Detalhes</h3>
        <ShortButton icon={pencilSimpleLine} />
      </div>

      <div className="informations">
        <div className="detail">
          <Image src={phone} width={24} height={24} alt="" />
          <div className="info">
            <h4>{first_phone}</h4>
            {second_phone && <h4>{second_phone}</h4>}
            {third_phone && <h4>{third_phone}</h4>}
          </div>
        </div>
        <div className="detail">
          <Image src={envelopeOpen} width={24} height={24} alt="" />
          <div className="info">
            <h4>{first_email}</h4>
            {second_email && <h4>{second_email}</h4>}
          </div>
        </div>
        <div className="detail">
          <Image src={mapPinLine} width={24} height={24} alt="" />
          <div className="info">
            {first_address && (
              <h4>
                {first_address}, {first_number} {first_neighbourhood} |{" "}
                {first_city} {first_uf} {first_cep}
              </h4>
            )}
            {second_address && (
              <h4>
                {second_address}, {second_number} {second_neighbourhood} |{" "}
                {second_city} {second_uf} {second_cep}
              </h4>
            )}
          </div>
        </div>
        <div className="detail">
          <Image src={notepad} width={24} height={24} alt="" />
          <div className="info">{notes && <h4>{notes}</h4>}</div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
