import React, { useEffect, useContext, useState } from "react";
import { SucessMainContainer } from "./styles";
import { ProductContainerContext } from "../ProductContainerContext";

import Image from "next/image";
import profilePic from "../../../public/PedidoConcluído.svg";


const SucessContainer = (): JSX.Element => {
  const { teste, setTeste} = useContext( ProductContainerContext );
  const [renderiza, setRenderiza] = useState(true);

  const handleCleanCartFavorite  = () => {
    localStorage.removeItem("state");
    teste.splice(0, 1000);
    setTeste(teste);
    setRenderiza(!renderiza);
  };

  useEffect(() => {
    handleCleanCartFavorite()
  }, []);

  return (
    <>
      <SucessMainContainer>
        <Image src={profilePic} alt='SucessImage' height={360} width={360}/>
        <h1>Pedido realizado com sucesso!</h1>
      </SucessMainContainer>
    </>
  );
};

export default SucessContainer;
