import React from "react";

import { Container, Content } from "./styles";

import Header from "./components/Header";
import Form from "./components/Form";

const NewContact = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Form />
      </Content>
    </Container>
  );
};

export default NewContact;
