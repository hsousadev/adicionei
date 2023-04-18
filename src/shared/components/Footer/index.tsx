import Image from "next/image";

import mainLogo from "@/shared/assets/logos/logo-main.svg";
import secundaryLogo from "@/shared/assets/logos/logo-secundary.svg";
import arrowCircleUp from "@/shared/assets/icons/arrowCircleUp.svg";
import code from "@/shared/assets/icons/code.svg";

import smoothScroll from "@/shared/utils/smoothScroll";

import { Container, Content } from "./styles";
import { useContext } from "react";
import { GlobalContext } from "@/pages/_app.page";

const Footer = () => {
  const { isDarkTheme } = useContext(GlobalContext);

  return (
    <Container>
      <Content>
        <div className="logo-and-return-top">
          <Image
            src={isDarkTheme ? mainLogo : secundaryLogo}
            alt=""
            height={32}
          />

          <div className="return-top">
            <button onClick={() => smoothScroll("top")}>
              <h4>Voltar ao topo</h4>
              <Image alt="" width={40} height={40} src={arrowCircleUp} />
            </button>
          </div>
        </div>
        <div className="copyrights">
          <h4>Copyright © 2023 </h4>
          <h4>
            <Image alt="" width={24} height={24} src={code} />
            Desenvolvido por{" "}
            <strong>
              <a
                href="https://henriquesousadev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Henrique Sousa
              </a>
            </strong>
          </h4>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
