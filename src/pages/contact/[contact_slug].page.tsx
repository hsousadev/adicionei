import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import { useEffect, useState } from "react";

import { ContactProps } from "@/shared/types/contacts";

import Header from "./components/Header";
import Details from "./components/Details";

import { Container, Content } from "./styles";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  const res = await fetch(
    `http://localhost:3004/contacts/${query.contact_slug}`
  );
  const contact = await res.json();

  return {
    props: {
      contact: contact,
    },
  };
}

interface InitialContactProps {
  contact: ContactProps;
}

const Contact = ({ contact }: InitialContactProps) => {
  const router = useRouter();
  const { contact_slug } = router.query;

  const contactInital = contact;

  console.log("contactInital", contactInital);

  const [contactRequested, setContactRequested] = useState(contactInital);

  const [contactFixed, setContactFixed] = useState(contactRequested?.fixed);
  const [showUpdateMessage, setShowUpdateMessage] = useState(false);

  async function getContact() {
    if (contact_slug) {
      const res = await fetch(`http://localhost:3004/contacts/${contact_slug}`);
      const contact = await res.json();
      setContactRequested(contact);
    }
  }

  async function updateContact() {
    const response = await fetch(
      `http://localhost:3004/contacts/${contact_slug}`,
      {
        method: "PUT",
        body: JSON.stringify(contactRequested),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Data posted successfully!");
      getContact();
    } else {
      console.log("Error posting data.");
    }
  }

  function handleFixingContact() {
    setContactRequested((prevContactData) => ({
      ...prevContactData,
      fixed: !contactRequested?.fixed,
    }));

    updateContact();
  }

  useEffect(() => {
    console.log("xx", contactRequested);
  }, [contactRequested]);

  return (
    <Container>
      <Content>
        {contactRequested && (
          <>
            <Header
              firstName={contactRequested.first_name}
              lastName={contactRequested.last_name}
              contactFixed={contactFixed}
              showUpdateMessage={showUpdateMessage}
              handleFixingContact={handleFixingContact}
            />
            <Details
              first_name={contactRequested.first_name}
              last_name={contactRequested.last_name}
              first_address={contactRequested.first_address}
              first_cep={contactRequested.first_cep}
              first_city={contactRequested.first_city}
              first_email={contactRequested.first_email}
              first_neighbourhood={contactRequested.first_neighbourhood}
              first_number={contactRequested.first_number}
              first_phone={contactRequested.first_phone}
              first_uf={contactRequested.first_uf}
              fixed={contactRequested.fixed}
              id={contactRequested.id}
              notes={contactRequested.notes}
              second_address={contactRequested.second_address}
              second_cep={contactRequested.second_cep}
              second_city={contactRequested.second_city}
              second_email={contactRequested.second_email}
              second_neighbourhood={contactRequested.second_neighbourhood}
              second_number={contactRequested.second_number}
              second_phone={contactRequested.second_phone}
              second_uf={contactRequested.second_uf}
              third_phone={contactRequested.third_phone}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Contact;
