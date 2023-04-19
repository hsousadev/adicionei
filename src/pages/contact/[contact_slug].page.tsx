import { useState, createContext, Dispatch, SetStateAction } from "react";
import { GetServerSidePropsContext } from "next";

import { ContactProps } from "@/shared/types/contacts";

import Header from "./components/Header";
import Details from "./components/Details";
import Form from "./components/Form";

import { Container, Content } from "./styles";
import { ContactInitialState } from "./initialState";

interface ContactContextProps {
  contactRequested: ContactProps;
  setContactRequested: Dispatch<SetStateAction<ContactProps>>;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

interface InitialContactProps {
  contact: ContactProps;
}

export const ContactContext = createContext<ContactContextProps>({
  contactRequested: ContactInitialState,
  setContactRequested: () => {},
  editMode: false,
  setEditMode: () => {},
});

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

const Contact = ({ contact }: InitialContactProps) => {
  const contactInital = contact;

  const [contactRequested, setContactRequested] = useState(contactInital);
  const [editMode, setEditMode] = useState(false);

  return (
    <ContactContext.Provider
      value={{ contactRequested, setContactRequested, editMode, setEditMode }}
    >
      <Container>
        <Content>
          {contactRequested && (
            <>
              <Header />
              {!editMode ? <Details /> : <Form />}
            </>
          )}
        </Content>
      </Container>
    </ContactContext.Provider>
  );
};

export default Contact;
