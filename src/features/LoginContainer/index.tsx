import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

// import { ToastContainer, toast } from "react-toastify";
// import Button from "../../components/Button";
// import { ProductContainerContext } from "../ProductContainerContext";

import {
  LoginMainContainer,
  LoginButtonContent,
  LoginInputContent,
  LoginCartContent,
} from "./styles";

const HomeProductContainer = (): JSX.Element => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [authentication, setAuthentication] = useState(['']);
  const router = useRouter();

  useEffect(() => {}, []);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    const id = Math.random().toString();


  const handleInputValidations = () => {};


  return (
    <>
      <LoginMainContainer>
        <h1>page product</h1>
      </LoginMainContainer>
    </>
  );
};
export default HomeProductContainer;
