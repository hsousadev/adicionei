import Head from "next/head";

import Home from "./home";

import { ContactListProps } from "@/shared/types/contacts";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3004/contacts");
  const contacts = await res.json();

  if (!contacts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts,
    },
  };
}

export default function Index({ contacts }: ContactListProps) {
  return (
    <>
      <Head>
        <title>Adicionei</title>
        <meta name="description" content="App de contatos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Home contacts={contacts} />
      </main>
    </>
  );
}
