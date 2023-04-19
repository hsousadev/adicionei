import { useContext, useState } from "react";
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
import { ContactContext } from "../../[contact_slug].page";
import { GlobalContext } from "@/pages/_app.page";

const Form = () => {
  const { register, handleSubmit, setValue, setFocus } =
    useForm<ContactProps>();
  const router = useRouter();

  const { setSearch } = useContext(GlobalContext);

  const { contactRequested, setContactRequested, setEditMode } =
    useContext(ContactContext);

  const { contact_slug } = router.query;

  const actualSlug = contact_slug || "";
  const actualMethod = contact_slug ? "PUT" : "POST";

  const [showSecundaryEmail, setShowSecundaryEmail] = useState(false);
  const [showThirdPhone, setShowThirdPhone] = useState(false);
  const [showSecondAddress, setShowSecondAddress] = useState(false);
  const [shortForm, setShortForm] = useState(true);

  const [firstPhoneValue, setFirstPhoneValue] = useState(
    contactRequested.first_phone
  );
  const [secondPhoneValue, setSecondPhoneValue] = useState(
    contactRequested.second_phone
  );
  const [thirdPhoneValue, setThirdPhoneValue] = useState(
    contactRequested.third_phone
  );

  function handleGoBack() {
    if (contact_slug) setEditMode(false);
    else router.push("/");
  }

  function handlvalueCheckCep(e: React.ChangeEvent<HTMLInputElement>) {
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
    const updatedContact = {
      first_name: data?.first_name || contactRequested.first_name,
      last_name: data?.last_name || contactRequested.last_name,
      full_name: `${data.first_name} ${data.last_name}`,
      first_email: data?.first_email || contactRequested.first_email,
      second_email: data?.second_email || contactRequested.second_email,
      first_phone: firstPhoneValue,
      second_phone: secondPhoneValue,
      third_phone: thirdPhoneValue,
      first_cep: data?.first_cep || contactRequested.first_cep,
      first_address: data?.first_address || contactRequested.first_address,
      first_neighbourhood:
        data?.first_neighbourhood || contactRequested.first_neighbourhood,
      first_city: data?.first_city || contactRequested.first_city,
      first_uf: data?.first_uf || contactRequested.first_uf,
      first_number: data?.first_number || contactRequested.first_number,
      second_cep: data?.second_cep || contactRequested.second_cep,
      second_address: data?.second_address || contactRequested.second_address,
      second_neighbourhood:
        data?.second_neighbourhood || contactRequested.second_neighbourhood,
      second_city: data?.second_city || contactRequested.second_city,
      second_uf: data?.second_uf || contactRequested.second_uf,
      second_number: data?.second_number || contactRequested.second_number,
      notes: data?.notes || contactRequested.notes,
      img_url: data?.img_url || contactRequested.img_url,
      id: contactRequested.id,
      fixed: contactRequested.fixed,
    };

    const response = await fetch(
      `http://localhost:3004/contacts/${actualSlug}`,
      {
        method: actualMethod,
        body: JSON.stringify({
          ...contactRequested,
          first_name: data?.first_name || contactRequested.first_name,
          last_name: data?.last_name || contactRequested.last_name,
          full_name: `${data.first_name} ${data.last_name}`,
          first_email: data?.first_email || contactRequested.first_email,
          second_email: data?.second_email || contactRequested.second_email,
          first_phone: firstPhoneValue,
          second_phone: secondPhoneValue,
          third_phone: thirdPhoneValue,
          first_cep: data?.first_cep || contactRequested.first_cep,
          first_address: data?.first_address || contactRequested.first_address,
          first_neighbourhood:
            data?.first_neighbourhood || contactRequested.first_neighbourhood,
          first_city: data?.first_city || contactRequested.first_city,
          first_uf: data?.first_uf || contactRequested.first_uf,
          first_number: data?.first_number || contactRequested.first_number,
          second_cep: data?.second_cep || contactRequested.second_cep,
          second_address:
            data?.second_address || contactRequested.second_address,
          second_neighbourhood:
            data?.second_neighbourhood || contactRequested.second_neighbourhood,
          second_city: data?.second_city || contactRequested.second_city,
          second_uf: data?.second_uf || contactRequested.second_uf,
          second_number: data?.second_number || contactRequested.second_number,
          notes: data?.notes || contactRequested.notes,
          img_url: data?.img_url,
          id: contactRequested.id,
          fixed: contactRequested.fixed,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Data posted successfully!");

      if (contact_slug) {
        setContactRequested(updatedContact);
        setEditMode(false);
      } else {
        setSearch(`${data.first_name} ${data.last_name}`);
        router.push("/");
      }
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
            defaultValue={contactRequested.first_name}
            maxLength={20}
          />

          <label htmlFor="last_name">Sobrenome:</label>
          <input
            className="large"
            {...register("last_name")}
            defaultValue={contactRequested.last_name}
            maxLength={20}
          />

          <label htmlFor="img_url">Imagem (Link):</label>
          <input
            type="url"
            className="large"
            {...register("img_url")}
            defaultValue={contactRequested.img_url}
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
            defaultValue={contactRequested.first_email}
            maxLength={60}
          />

          {showSecundaryEmail && (
            <>
              <label htmlFor="second_email">Secundário:</label>
              <input
                className="large"
                type="email"
                {...register("second_email")}
                defaultValue={contactRequested.second_email}
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
                className="medium"
                {...register("first_cep")}
                defaultValue={contactRequested.first_cep}
                maxLength={8}
                onBlur={handlvalueCheckCep}
              />
              <label htmlFor="first_address">Endereço</label>
              <input
                className="large"
                {...register("first_address")}
                defaultValue={contactRequested.first_address}
                maxLength={60}
              />
              <label htmlFor="first_number">Número</label>
              <input
                className="short"
                type="number"
                {...register("first_number")}
                defaultValue={contactRequested.first_number}
              />
              <label htmlFor="first_neighbourhood">Bairro</label>
              <input
                className="large"
                {...register("first_neighbourhood")}
                defaultValue={contactRequested.first_neighbourhood}
                maxLength={60}
              />
              <label htmlFor="first_city">Cidade</label>
              <input
                className="large"
                {...register("first_city")}
                defaultValue={contactRequested.first_city}
                maxLength={60}
              />
              <label htmlFor="first_uf">Estado (UF)</label>
              <input
                className="short"
                type="text"
                {...register("first_uf")}
                defaultValue={contactRequested.first_uf}
                maxLength={2}
              />
              {showSecondAddress && (
                <>
                  <p>Secundário</p>
                  <label htmlFor="second_cep">CEP</label>
                  <input
                    className="medium"
                    {...register("second_cep")}
                    defaultValue={contactRequested.second_cep}
                    onBlur={handlvalueCheckCep}
                  />

                  <label htmlFor="second_address">Endereço</label>
                  <input
                    className="large"
                    {...register("second_address")}
                    defaultValue={contactRequested.second_cep}
                  />

                  <label htmlFor="second_number">Número</label>
                  <input
                    className="short"
                    {...register("second_number")}
                    defaultValue={contactRequested.second_number}
                  />

                  <label htmlFor="second_neighbourhood">Bairro</label>
                  <input
                    className="large"
                    {...register("second_neighbourhood")}
                    defaultValue={contactRequested.second_neighbourhood}
                  />

                  <label htmlFor="second_city">Cidade</label>
                  <input
                    className="large"
                    {...register("second_city")}
                    defaultValue={contactRequested.second_city}
                  />

                  <label htmlFor="second_uf">Estado (UF)</label>
                  <input
                    className="short"
                    {...register("second_uf")}
                    defaultValue={contactRequested.second_uf}
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
                defaultValue={contactRequested.notes}
              />
            </>
          )}

          <div className="submit">
            <DefaultButton type="submit" icon={floppyDisk} text="Salvar" />
            <h4 style={{ cursor: "pointer" }} onClick={() => handleGoBack()}>
              Voltar
            </h4>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default Form;
