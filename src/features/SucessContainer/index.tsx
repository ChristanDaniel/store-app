import React, { useEffect } from "react";
import { SucessMainContainer } from "./styles";

import Image from "next/image";
import profilePic from "../../../public/PedidoConcluído.svg";


const SucessContainer = (): JSX.Element => {

  useEffect(() => {}, []);

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
