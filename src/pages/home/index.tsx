import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import Image from "next/image";

import SearchBar from "./components/SearchBar";
import DefaultButton from "@/shared/components/DefaultButton";
import Contact from "./components/Contact";

import plusCircle from "@/shared/assets/icons/plusCircle.svg";
import pushPinFill from "@/shared/assets/icons/pushPinFill.svg";
import user from "@/shared/assets/icons/user.svg";

import { ContactListProps } from "@/shared/types/contacts";

import { Container, Content } from "./styles";

const Home = ({ contacts }: ContactListProps) => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const contactsSearched = useMemo(() => {
    const lowerSerch = search.toLowerCase();
    return contacts.filter((contact) =>
      contact?.first_name?.toLowerCase().includes(lowerSerch)
    );
  }, [search]);

  contacts.sort(function (a, b) {
    if (a.first_name < b.first_name) {
      return -1;
    }
    if (a.first_name > b.first_name) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <Content>
        <div className="search-and-add">
          <SearchBar setSearch={setSearch} />
          <DefaultButton icon={plusCircle} text="Adicionar" />
        </div>

        <div className="head-list">
          <h4 className="name">Nome</h4>
          <h4 className="email">Email</h4>
          <h4 className="phone">Telefone</h4>
        </div>

        {!search && (
          <>
            <div className="fixed">
              <Image src={pushPinFill} alt="" />
              <h4>Fixados</h4>
            </div>
            {contacts.map(
              (contact) =>
                contact.fixed &&
                contact.first_name && (
                  <Contact
                    key={contact.id}
                    first_name={contact.first_name}
                    last_name={contact.last_name}
                    email={contact.first_email}
                    phone={contact.first_phone}
                    onClick={() => router.push(`/contact/${contact.id}`)}
                    img_url={contact.img_url}
                  />
                )
            )}
          </>
        )}

        <div className="contacts">
          <Image src={user} alt="" />
          <h4>Contatos</h4>
        </div>
        {!search ? (
          contacts.map(
            (contact) =>
              contact.first_name && (
                <Contact
                  key={contact.id}
                  first_name={contact.first_name}
                  last_name={contact.last_name}
                  email={contact.first_email}
                  phone={contact.first_phone}
                  onClick={() => router.push(`/contact/${contact.id}`)}
                  img_url={contact.img_url}
                />
              )
          )
        ) : contactsSearched.length ? (
          contactsSearched.map(
            (contact) =>
              contact.first_name && (
                <Contact
                  key={contact.id}
                  first_name={contact.first_name}
                  last_name={contact.last_name}
                  email={contact.first_email}
                  phone={contact.first_phone}
                  onClick={() => router.push(`/contact/${contact.id}`)}
                  img_url={contact.img_url}
                />
              )
          )
        ) : (
          <h4>Nenhum resultado encontrado para pesquisa</h4>
        )}
      </Content>
    </Container>
  );
};

export default Home;
