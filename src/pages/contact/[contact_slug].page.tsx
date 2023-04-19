import { GetServerSidePropsContext } from "next";

import { useState } from "react";

import { ContactProps } from "@/shared/types/contacts";

import Header from "./components/Header";
import Details from "./components/Details";
import Form from "./components/Form";

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
  const contactInital = contact;

  const [contactRequested, setContactRequested] = useState(contactInital);
  const [editMode, setEditMode] = useState(false);

  // const [contactUpdated, setContactUpdated] = useState(false);

  return (
    <Container>
      <Content>
        {contactRequested && (
          <>
            <Header
              contact={contactRequested}
              setContactRequested={setContactRequested}
              editMode={editMode}
            />
            {!editMode ? (
              <Details contact={contactRequested} setEditMode={setEditMode} />
            ) : (
              <Form contact={contactRequested} setEditMode={setEditMode} />
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Contact;
