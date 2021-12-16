import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { IoIosUnlock } from 'react-icons/io'

// import { ToastContainer, toast } from "react-toastify";
// import Button from "../../components/Button";
// import { ProductContainerContext } from "../ProductContainerContext";

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
import Button from "../../components/Button";

const HomeProductContainer = (): JSX.Element => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [authentication, setAuthentication] = useState(['']);
  const router = useRouter();

  useEffect(() => {}, []);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    const id = Math.random().toString();

    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(email)) {
      // return failtToast("Informe email válido exemplo@mail.com");
    }
    // setLoginAuthentication({ id: id, name: name, email: email, loging: true});
    // if(!/^.{8,}/.test(name)) {
    //   return failtToast('Sua senha deve conter 8 caracteres ou mais')
    // }
    // successToast("Usuário logado!") && setTimeout(() => router.push("/"), 2000);
  };

  const handleInputValidations = () => {};


  return (
    <>
      <LoginMainContainer>
        <LoginMessageContent>
          <LoginMessage>Login</LoginMessage>
          <span>sou cliente</span>
          <LoginMessageInformation>
            <p>
              Olá! Se você já comprou na <br />
              loja da <span>Ig.Store</span> antes, <br />
              por favor, informe seu e-mail <br />
              e name. <br />
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
        {/* <ToastContainer autoClose={5000} position="bottom-center" /> */}
      </LoginMainContainer>
    </>
  );
};

export default HomeProductContainer