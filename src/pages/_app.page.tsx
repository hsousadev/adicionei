import type { AppProps } from "next/app";
import { GlobalStyles } from "@/shared/styles/global";

import TopBar from "@/shared/components/TopBar";
import Footer from "@/shared/components/Footer";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface GlobalContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  isDarkTheme: true,
  setIsDarkTheme: () => {},
  search: "",
  setSearch: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        search,
        setSearch,
      }}
    >
      <>
        <TopBar />
        <GlobalStyles isDarkTheme={isDarkTheme} /> <Component {...pageProps} />
        <Footer />
      </>
    </GlobalContext.Provider>
  );
}
