import { useContext } from "react";
import Image from "next/image";

import { GlobalContext } from "@/pages/_app.page";

import mainLogo from "@/shared/assets/logos/logo-main.svg";
import secundaryLogo from "@/shared/assets/logos/logo-secundary.svg";

import ShortButton from "@/shared/components/ShortButton";

import sunOutline from "@/shared/assets/icons/sunOutline.svg";
import sunFill from "@/shared/assets/icons/sunFill.svg";
import moonOutline from "@/shared/assets/icons/moonOutline.svg";
import moonFill from "@/shared/assets/icons/moonFill.svg";
import houseSimple from "@/shared/assets/icons/houseSimple.svg";

import { Container, Content } from "./styles";
import { useRouter } from "next/router";

const TopBar = () => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  const { isDarkTheme, setIsDarkTheme } = useContext(GlobalContext);

  function handleDarkTheme() {
    setIsDarkTheme(true);
  }

  function handleWhiteTheme() {
    setIsDarkTheme(false);
  }

  return (
    <Container id="top">
      <Content>
        <Image
          src={isDarkTheme ? mainLogo : secundaryLogo}
          height={32}
          alt=""
        />
        <div className="theme-buttons">
          {!isHome && (
            <ShortButton onClick={() => router.push("/")} icon={houseSimple} />
          )}
          {isDarkTheme ? (
            <>
              <ShortButton
                onClick={() => handleWhiteTheme()}
                icon={sunOutline}
              />
              <ShortButton icon={moonFill} selected />
            </>
          ) : (
            <>
              <ShortButton icon={sunFill} selected />
              <ShortButton
                onClick={() => handleDarkTheme()}
                icon={moonOutline}
              />
            </>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default TopBar;
