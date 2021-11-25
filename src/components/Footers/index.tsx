import React from "react";
import { Footer, ContainerRedeSociais, ContentRedeSociais } from "./styles";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footers(): JSX.Element {
  return (
    <>
      <Footer>
        <div>
          <h3>Páginas</h3>
          <div>
            <a>Home</a>
            <a>Cart</a>
            <a>Login</a>
          </div>
        </div>
        <ContainerRedeSociais>
          <h3>Redes Sociais</h3>
          <ContentRedeSociais>
            <div>
              <a
                href="https://github.com/ChristanDaniel"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub /> Github
              </a>
              <p> | </p>
              <a
                href="https://www.linkedin.com/in/christian-daniel-841921210/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin /> Linkedin
              </a>
            </div>
            <div>
              <p>
                <span>© {new Date().getFullYear()} Ig-Store</span>
                {" · "}
                <span>Construido por Christian Daniel .</span>
              </p>
            </div>
            <div>
              <h3>Pagamentos</h3>
              <p>VISA</p>
            </div>
          </ContentRedeSociais>
        </ContainerRedeSociais>
        <div>
          <h3>Entre em contato</h3>
          <p>Nome: Ig.Store</p>
          <p>CNPJ: 12.456.789/0001-02</p>
          <p>E-mail: contato@igStore.com</p>
          <p>Telefone: (34) 3812380</p>
          <p>Rua: Bela Vista, 123 - Centro</p>
          <p>Uberlândia / São Paulo - 38740-082</p>
        </div>
      </Footer>
    </>
  );
}
