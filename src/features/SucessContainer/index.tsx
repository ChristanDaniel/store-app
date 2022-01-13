import React, { useEffect, useContext, useState } from "react";
import { SucessMainContainer } from "./styles";
import { ProductContainerContext } from "../ProductContainerContext";

import Image from "next/image";
import profilePic from "../../../public/PedidoConcluído.svg";


const SucessContainer = (): JSX.Element => {
  const { productItens, setProductItens} = useContext( ProductContainerContext );
  const [renderiza, setRenderiza] = useState(true);

  const handleCleanCartFavorite  = () => {
    localStorage.removeItem("state");
    productItens.splice(0, 1000);
    setProductItens(productItens);
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
