import type { AppProps } from "next/app";
import { GlobalStyles } from "@/shared/styles/global";

import TopBar from "@/shared/components/TopBar";
import Footer from "@/shared/components/Footer";

import { createContext, useState } from "react";

interface GlobalContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  isDarkTheme: true,
  setIsDarkTheme: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
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
