import React, { useEffect, useContext, useState } from "react";
import { SucessMainContainer } from "./styles";
import { ProductContainerContext } from "../ProductContainerContext";

import Image from "next/image";
import profilePic from "../../../public/PedidoFinalizado.png";
import Button from "../../components/Button";
import { useRouter } from "next/dist/client/router";


const SucessContainer = (): JSX.Element => {
  const router = useRouter()
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
        <Button onClick={() => router.push('/')}>Voltar para Home</Button>
      </SucessMainContainer>
    </>
  );
};

export default SucessContainer;
