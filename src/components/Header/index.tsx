import React, { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiFillQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { GiShop } from "react-icons/gi";

import Image from "next/image";
import AvatarMale from "../../../public/male.svg";

import {
  Headers,
  UserContainer,
  UserContent,
  UserContentFromHeader,
  ButtonArrowUser,
  UserMouverOver,
  BorderLeft,
  ButtonCartFavorite,
  NumberCartFavorite,
  SvgHeader,
} from "./styles";

import router from "next/dist/client/router";
import { ProductContainerContext } from "../../features/ProductContainerContext";

interface HeaderProps {
  onOpenModalCart: () => void;
}

const Header = ({ onOpenModalCart }: HeaderProps): JSX.Element => {
  const { teste, loginAuthentication, setLoginAuthentication } = useContext(
    ProductContainerContext
  );
  const [renderiza, setRenderiza] = useState(true);
  const [mouseOver, setMouseOver] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authentication");
    setLoginAuthentication({ id: "", email: "", name: "", loging: false });

    setRenderiza(!renderiza);
  };

  return (
    <>
      <Headers>
        <SvgHeader>
          <GiShop />
          <h1 onClick={() => router.push("/")}>
            Ig<span>.</span>Store
          </h1>
        </SvgHeader>
        <UserContainer>
          {loginAuthentication.loging ? (
            <>
              {/* <Image src={AvatarMale} alt="Fechar Modal" /> */}
              <UserContentFromHeader>
                <FaUserCircle />
                <div>
                  <p>{loginAuthentication.name}</p>
                  <span>{loginAuthentication.email}</span>
                </div>
              </UserContentFromHeader>
              <ButtonCartFavorite
                onClick={() => {
                  setMouseOver(!mouseOver);
                }}
              >
                {mouseOver === true ? (
                  <UserMouverOver>
                    <button>
                      <AiOutlineUser /> Minha Conta
                    </button>
                    <button>
                      <AiFillQuestionCircle /> Central de Atendimento{" "}
                    </button>
                    <button onClick={() => handleLogout()}>
                      <RiLogoutBoxRLine /> SAIR{" "}
                    </button>
                  </UserMouverOver>
                ) : (
                  <></>
                )}
                <IoIosArrowDown />
              </ButtonCartFavorite>
            </>
          ) : (
            <UserContent onClick={() => router.push("/login")}>
              <FiUser /> Conta{" "}
            </UserContent>
          )}

          <BorderLeft />
          <ButtonCartFavorite onClick={() => onOpenModalCart()}>
            <BsCart3 />
            {teste.length === 0 ? (
              <></>
            ) : (
              <NumberCartFavorite>{teste.length}</NumberCartFavorite>
            )}
          </ButtonCartFavorite>
        </UserContainer>
      </Headers>
    </>
  );
};
export default Header;
