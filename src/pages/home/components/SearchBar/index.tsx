import { useContext } from "react";
import Image from "next/image";

import { GlobalContext } from "@/pages/_app.page";

import magnifyingGlass from "@/shared/assets/icons/magnifyingGlass.svg";

import { Container } from "./styles";

const Search = () => {
  const { search, setSearch, isDarkTheme } = useContext(GlobalContext);

  return (
    <>
      <Container isDarkTheme={isDarkTheme}>
        <input
          id="search"
          type="search"
          placeholder="Cristiano Ronaldo"
          onChange={(e) => setSearch(e.target.value)}
          maxLength={30}
          defaultValue={search}
        />
        <button id="doSearch">
          <Image src={magnifyingGlass} alt="" />
        </button>
      </Container>
    </>
  );
};

export default Search;
