import { Dispatch, SetStateAction, useContext } from "react";
import Image from "next/image";

import { GlobalContext } from "@/pages/_app.page";

import magnifyingGlass from "@/shared/assets/icons/magnifyingGlass.svg";

import { Container } from "./styles";

interface SearchProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

const Search = ({ setSearch }: SearchProps) => {
  const { isDarkTheme } = useContext(GlobalContext);

  return (
    <>
      <Container isDarkTheme={isDarkTheme}>
        <input
          id="search"
          type="search"
          placeholder="Henrique Sousa..."
          onChange={(e) => setSearch(e.target.value)}
          // onKeyDown={handleSearch}
          maxLength={30}
        />
        <button id="doSearch">
          <Image src={magnifyingGlass} alt="" />
        </button>
      </Container>
    </>
  );
};

export default Search;
