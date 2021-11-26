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
  }

  const handleInputValidations = () => {};


  return (
    <>
      <LoginMainContainer>
        <LoginCartContent>
          <div>LOGIN</div>
          <form onSubmit={handleSubmitForm}>
            <LoginInputContent>
              <input
                placeholder="NAME"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <input
                placeholder="E-Mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <p>christian-daniel04@hotmail.com</p>
            </LoginInputContent>
            <LoginButtonContent>
              {/* <Button>ENTRAR</Button> */}
              <Button type="submit">CRIAR CONTA</Button>
              {/* <Button onClick={() => handleSubmitForm()}>CRIAR CONTA</Button> */}
            </LoginButtonContent>
          </form>
        </LoginCartContent>
        {/* <ToastContainer autoClose={5000} position="bottom-center" /> */}
      </LoginMainContainer>
    </>
  );
};

export default HomeProductContainer