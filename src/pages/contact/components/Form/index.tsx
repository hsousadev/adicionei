import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Image from "next/image";

import DefaultButton from "@/shared/components/DefaultButton";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import floppyDisk from "@/shared/assets/icons/floppyDisk.svg";
import plusCircleButton from "@/shared/assets/icons/plusCircleButton.svg";
import minusCircleButton from "@/shared/assets/icons/minusCircleButton.svg";

import { ContactProps } from "@/shared/types/contacts";

import { Container, Content } from "./styles";

interface FormProps {
  contact: ContactProps;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const Form = ({ contact, setEditMode }: FormProps) => {
  const { register, handleSubmit, setValue, setFocus } =
    useForm<ContactProps>();
  const router = useRouter();

  const { contact_slug } = router.query;

  const [showSecundaryEmail, setShowSecundaryEmail] = useState(false);
  const [showThirdPhone, setShowThirdPhone] = useState(false);
  const [showSecondAddress, setShowSecondAddress] = useState(false);
  const [shortForm, setShortForm] = useState(true);

  const [firstPhoneValue, setFirstPhoneValue] = useState(contact.first_phone);
  const [secondPhoneValue, setSecondPhoneValue] = useState(
    contact.second_phone
  );
  const [thirdPhoneValue, setThirdPhoneValue] = useState(contact.third_phone);

  function handlvalueCheckCep(e: any) {
    const cep = e.target.value.replace(/\D/g, "");

    if (!e.target.value) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (e.target.name === "first_cep") {
          setValue("first_address", data?.logradouro);
          setValue("first_neighbourhood", data?.bairro);
          setValue("first_city", data?.localidade);
          setValue("first_uf", data?.uf);
          setFocus("first_number");
        } else {
          setValue("second_address", data?.logradouro);
          setValue("second_neighbourhood", data?.bairro);
          setValue("second_city", data?.localidade);
          setValue("second_uf", data?.uf);
          setFocus("second_number");
        }
      });
  }

  async function onSubmit(data: ContactProps) {
    const response = await fetch(
      `http://localhost:3004/contacts/${contact_slug}`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...contact,
          first_name: data?.first_name || contact.first_name,
          last_name: data?.last_name || contact.last_name,
          first_email: data?.first_email || contact.first_email,
          second_email: data?.second_email || contact.second_email,
          first_phone: firstPhoneValue,
          second_phone: secondPhoneValue,
          third_phone: thirdPhoneValue,
          first_cep: data?.first_cep || contact.first_cep,
          first_address: data?.first_address || contact.first_address,
          first_neighbourhood:
            data?.first_neighbourhood || contact.first_neighbourhood,
          first_city: data?.first_city || contact.first_city,
          first_uf: data?.first_uf || contact.first_uf,
          first_number: data?.first_number || contact.first_number,
          second_cep: data?.second_cep || contact.second_cep,
          second_address: data?.second_address || contact.second_address,
          second_neighbourhood:
            data?.second_neighbourhood || contact.second_neighbourhood,
          second_city: data?.second_city || contact.second_city,
          second_uf: data?.second_uf || contact.second_uf,
          second_number: data?.second_number || contact.second_number,
          notes: data?.notes || contact.notes,
          img_url: data?.img_url || contact.img_url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Data posted successfully!");
      setEditMode(false);
      window.location.reload();
    } else {
      console.log("Error posting data.");
    }
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="first_name">Nome:</label>
          <input
            required
            className="large"
            {...register("first_name")}
            defaultValue={contact.first_name}
            maxLength={20}
          />

          <label htmlFor="last_name">Sobrenome:</label>
          <input
            className="large"
            {...register("last_name")}
            defaultValue={contact.last_name}
            maxLength={20}
          />

          <div className="type">
            <h4>E-mails</h4>{" "}
            {!showSecundaryEmail ? (
              <Image
                src={plusCircleButton}
                width={32}
                height={32}
                alt=""
                onClick={() => setShowSecundaryEmail(true)}
              />
            ) : (
              <Image
                src={minusCircleButton}
                width={32}
                height={32}
                alt=""
                onClick={() => setShowSecundaryEmail(false)}
              />
            )}
          </div>

          <label htmlFor="first_email">Primário:</label>
          <input
            className="large"
            type="email"
            {...register("first_email")}
            defaultValue={contact.first_email}
            maxLength={60}
          />

          {showSecundaryEmail && (
            <>
              <label htmlFor="second_email">Secundário:</label>
              <input
                className="large"
                type="email"
                {...register("second_email")}
                defaultValue={contact.second_email}
                maxLength={60}
              />
            </>
          )}

          <div className="type">
            <h4>Telefones</h4>{" "}
            {!showThirdPhone ? (
              <Image
                src={plusCircleButton}
                width={32}
                height={32}
                alt=""
                onClick={() => setShowThirdPhone(true)}
              />
            ) : (
              <Image
                src={minusCircleButton}
                width={32}
                height={32}
                alt=""
                onClick={() => setShowThirdPhone(false)}
              />
            )}
          </div>

          <label htmlFor="first_phone">Primário</label>
          <PhoneInput
            defaultCountry="BR"
            placeholder="Número de telefone"
            value={firstPhoneValue}
            onChange={(value: string) => setFirstPhoneValue(value)}
            required
          />

          <>
            <label htmlFor="second_phone">Secundário</label>
            <PhoneInput
              defaultCountry="BR"
              placeholder="Número de telefone"
              value={secondPhoneValue}
              onChange={(value: string) => setSecondPhoneValue(value)}
            />
          </>

          {showThirdPhone && (
            <>
              <label htmlFor="third_phone">Emergência</label>
              <PhoneInput
                defaultCountry="BR"
                placeholder="Número de telefone"
                value={thirdPhoneValue}
                onChange={(value: string) => setThirdPhoneValue(value)}
              />
            </>
          )}

          <h4 onClick={() => setShortForm(!shortForm)}>
            {shortForm ? "Mostrar mais..." : "Mostrar menos"}
          </h4>

          {!shortForm && (
            <>
              <div className="type">
                <h4>Endereços</h4>{" "}
                {!showSecondAddress ? (
                  <Image
                    src={plusCircleButton}
                    width={32}
                    height={32}
                    alt=""
                    onClick={() => setShowSecondAddress(true)}
                  />
                ) : (
                  <Image
                    src={minusCircleButton}
                    width={32}
                    height={32}
                    alt=""
                    onClick={() => setShowSecondAddress(false)}
                  />
                )}
              </div>
              <p>Primário</p>
              <label htmlFor="first_cep">CEP</label>
              <input
                className="short"
                {...register("first_cep")}
                defaultValue={contact.first_cep}
                maxLength={8}
                onBlur={handlvalueCheckCep}
              />
              <label htmlFor="first_address">Endereço</label>
              <input
                className="large"
                {...register("first_address")}
                defaultValue={contact.first_address}
                maxLength={60}
              />
              <label htmlFor="first_number">Número</label>
              <input
                className="short"
                type="number"
                {...register("first_number")}
                defaultValue={contact.first_number}
              />
              <label htmlFor="first_neighbourhood">Bairro</label>
              <input
                className="large"
                {...register("first_neighbourhood")}
                defaultValue={contact.first_neighbourhood}
                maxLength={60}
              />
              <label htmlFor="first_city">Cidade</label>
              <input
                className="large"
                {...register("first_city")}
                defaultValue={contact.first_city}
                maxLength={60}
              />
              <label htmlFor="first_uf">Estado (UF)</label>
              <input
                className="short"
                type="text"
                {...register("first_uf")}
                defaultValue={contact.first_uf}
                maxLength={2}
              />
              {showSecondAddress && (
                <>
                  <p>Secundário</p>
                  <label htmlFor="second_cep">CEP</label>
                  <input
                    className="short"
                    {...register("second_cep")}
                    defaultValue={contact.second_cep}
                    onBlur={handlvalueCheckCep}
                  />

                  <label htmlFor="second_address">Endereço</label>
                  <input
                    className="large"
                    {...register("second_address")}
                    defaultValue={contact.second_cep}
                  />

                  <label htmlFor="second_number">Número</label>
                  <input
                    className="short"
                    {...register("second_number")}
                    defaultValue={contact.second_number}
                  />

                  <label htmlFor="second_neighbourhood">Bairro</label>
                  <input
                    className="large"
                    {...register("second_neighbourhood")}
                    defaultValue={contact.second_neighbourhood}
                  />

                  <label htmlFor="second_city">Cidade</label>
                  <input
                    className="large"
                    {...register("second_city")}
                    defaultValue={contact.second_city}
                  />

                  <label htmlFor="second_uf">Estado (UF)</label>
                  <input
                    className="short"
                    {...register("second_uf")}
                    defaultValue={contact.second_uf}
                  />
                </>
              )}
              <div className="type">
                <h4>Anotações</h4>
              </div>
              <label htmlFor="notes"></label>
              <textarea
                maxLength={220}
                {...register("notes")}
                defaultValue={contact.notes}
              />
            </>
          )}

          <div className="submit">
            <DefaultButton type="submit" icon={floppyDisk} text="Salvar" />
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => setEditMode(false)}
            >
              Voltar
            </h4>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default Form;
