import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Button from "../../components/Button";
import { ProductContainerContext } from "../ProductContainerContext";

import { IoIosUnlock } from 'react-icons/io'

import {
  LoginMainContainer,
  LoginMessageContent,
  LoginMessage,
  LoginMessageInformation,
  LoginCartContent,
  ButtonUnlock,
  LoginButtonContent,
  LoginInputContent,
} from "./styles";
import { TextField } from "@mui/material";

const HomeProductContainer = (): JSX.Element => {
  const { loginAuthentication, setLoginAuthentication } = useContext(
    ProductContainerContext
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (loginAuthentication.loging) {
      router.push("/");
    }
  }, [loginAuthentication, router]);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    const id = Math.random().toString();

    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(email)) {
      return toast.error('Informe email válido exemplo@email.com', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    if(!/^.{6,}/.test(name)) {
      return toast.error('Seu Nome deve conter 6 caracteres ou mais', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoginAuthentication({ id: id, name: name, email: email, loging: true });
    toast.success('Usuário logado!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }) && setTimeout(() => router.push("/"), 3000);
  };

  useEffect(() => {
    localStorage.setItem("authentication", JSON.stringify(loginAuthentication));
  }, [loginAuthentication]);

  return (
    <>
      <LoginMainContainer>
        <LoginMessageContent>
          <LoginMessage>Login</LoginMessage>
          <span>do cliente</span>
          <LoginMessageInformation>
            <p>
              Olá! Se você ainda não comprou <br />
              na loja da <span>Ig.Store</span> antes, <br />
              por favor, informe seu Name <br />
              e E-mail. <br />
            </p>
          </LoginMessageInformation>
        </LoginMessageContent>
        <LoginCartContent>
          <form onSubmit={handleSubmitForm}>
            <LoginInputContent>
              <div>
                <TextField
                  id="text-field"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <TextField
                  id="text-field"
                  label="E-mail"
                  variant="outlined"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </LoginInputContent>
            <LoginButtonContent>
              <Button type="submit">CRIAR CONTA</Button>
              <ButtonUnlock> <IoIosUnlock/> Esqueceu sua senha</ButtonUnlock>
            </LoginButtonContent>
          </form>
        </LoginCartContent>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </LoginMainContainer>
    </>
  );
};
export default HomeProductContainer;
