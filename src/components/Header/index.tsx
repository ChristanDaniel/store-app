import React, { useContext, useState } from "react";

import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GiShop } from "react-icons/gi";



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
  ImgHeader,
} from "./styles";

import router from "next/dist/client/router";
import { ProductContainerContext } from "../../features/ProductContainerContext";

interface HeaderProps {
  onOpenModalCart: () => void;
}

const Header = ({ onOpenModalCart }: HeaderProps): JSX.Element => {
  const { productItens, loginAuthentication, setLoginAuthentication } = useContext(
    ProductContainerContext
  );
  const [renderiza, setRenderiza] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("authentication");
    setLoginAuthentication({ id: "", email: "", name: "", loging: false });

    setRenderiza(!renderiza);
  };

  return (
    <>
      <Headers>
        <ImgHeader>

          <h1 onClick={() => router.push("/")}>
            Ig<span>.</span>Store
          </h1>
        </ImgHeader>
        <UserContainer>
          {loginAuthentication.loging ? (
            <>
              <UserContentFromHeader>
                <FaUserCircle />
                <div>
                  <p>{loginAuthentication.name}</p>
                  <span>{loginAuthentication.email}</span>
                </div>
              </UserContentFromHeader>
              <ButtonCartFavorite
                onClick={() => handleLogout()}
              >
                <RiLogoutBoxRLine /> Sair
              </ButtonCartFavorite>
            </>
          ) : (
              <UserContent onClick={() => router.push("/login")}>
                <FiUser /> Conta
              </UserContent>
          )}

          <BorderLeft />
          <ButtonCartFavorite onClick={() => onOpenModalCart()}>
            <BsCart3 />
            {productItens.length === 0 ? (
              <></>
            ) : (
              <NumberCartFavorite>{productItens.length}</NumberCartFavorite>
            )}
          </ButtonCartFavorite>
        </UserContainer>
      </Headers>
    </>
  );
};
export default Header;
