import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { AiFillCreditCard } from 'react-icons/ai'
import { FaBarcode } from 'react-icons/fa'
import { CgTrashEmpty } from 'react-icons/cg'
import { BsCart3 } from "react-icons/bs"

import { TextField } from '@mui/material'

import {
  MainCartProducts,
  SectionPaymentCartContainer,
  DeliveryCepContainer,
  DeliveryCepContent,
  PaymenteContainer,
  ButtonAdd,
  ProductTitle,
  ProductCartContainer,
  DeliveryInputContent,
  AsidePaymentCartContainer,
  ProductContentCart,
  ProductPrice,
  ButtonReduce,
} from "./styles";

import axios from 'axios'
import Button from '../../components/Button'
import { ProductContainerContext } from '../ProductContainerContext'

interface ProductProps {
  category: string
  description: string
  id: string
  image: string
  price: number
  rating: [
    {
      rate: string
      count: string
    }
  ]
  title: string
}

type cepProps = {
  bairro?: string;
  cep?: string;
  complemento?: string;
  localidade?: string;
  logradouro?: string;
  uf?: string;
};

const HomeProductContainer = (): JSX.Element => {
  const { contextValue, loginAuthentication, teste, setTeste } = useContext(
    ProductContainerContext
  );
  const [renderiza, setRenderiza] = useState(true);
  const [inputCEP, setInputCEP] = useState("");
  const [cepClient, setCepClient] = useState<cepProps[]>([]);
  const [verificarCep, setVerificarCep] = useState(false);
  // const [sumValuesTotal, setSumValuesTotal] = useState(0);

  // const [Product, setProduct] = useState<ProductProps[]>([]);
  const router = useRouter();

  const { state } = contextValue;

  const handleCleanAll = () => {
    router.push("/");
    localStorage.removeItem("state");
    teste.splice(0, 1000);
    setTeste(teste);
    setRenderiza(!renderiza);
  };

  const handleDeleteProductFavoriteCart = (index: number) => {
    const { state } = contextValue;

    if (index > -1) {
      state.splice(index, 1);
    }

    localStorage.setItem("state", JSON.stringify(state));
    setRenderiza(!renderiza);
  };

  const handleIncrement = (count: number, id: number, price: number) => {
    teste.map((pp) => {
      if (pp.id === id) {
        pp.count = count + 1;
        pp.price = price + pp.price;

        localStorage.setItem("state", JSON.stringify(state));
        setRenderiza(!renderiza);
      }
    });
  };

  const handleDecrement = (count: number, id: number, price: number) => {
    if (count > 1) {
      teste.map((pp) => {
        if (pp.id === id) {
          pp.count = count - 1;
          pp.price = price * 0.5;

          localStorage.setItem("state", JSON.stringify(state));
          setRenderiza(!renderiza);
        }
      });
    } else {
      return;
    }
  };

  const handleDeliveryCEP = async (event: FormEvent) => {
    event.preventDefault();
    if (inputCEP.length > 8) {
      const response = await axios.get(
        `http://viacep.com.br/ws/${inputCEP}/json/`
      );
      if (!response.data.erro) {
        setCepClient([response.data]);
        setVerificarCep(true);
      } else {
        setCepClient([]);
        setVerificarCep(false);
        console.log(response.data);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (state.length === 0) {
      router.push("/");
    }
  }, [router, state]);

  const FormatedFavoriteCartValues = (
    ind: string,
    products: ProductProps[]
  ) => {
    if (ind === "soma") {
      return products.reduce((a, b) => a + b.price, 0);
    }
    if (ind === "total") {
      if (verificarCep) {
        return products.reduce((a, b) => a + b.price, 0) + 50;
      }
      return products.reduce((a, b) => a + b.price, 0);
    }
    if (ind === "dividido") {
      if (verificarCep) {
        return products.reduce((a, b) => a + b.price, 50) / 3;
      }
      return products.reduce((a, b) => a + b.price, 0) / 3;
    }
    if (ind === "desconto") {
      if (verificarCep) {
        return products.reduce((a, b) => a + b.price, 50) * 0.9;
      }
      return products.reduce((a, b) => a + b.price, 0) * 0.9;
    }
    if (ind === "frete") {
      if (verificarCep) {
        return 50;
      } else {
        return 0;
      }
    }
  };

  useEffect(() => {
    if (loginAuthentication.loging === false) {
      router.push("/login");
    }
  }, [loginAuthentication, router]);


  return (
    <>
      <MainCartProducts>
        <h1>
          01036-970 CARRINHO <BsCart3 />
        </h1>
        <PaymenteContainer>
          <SectionPaymentCartContainer>
          <ProductCartContainer>
              {state.map((prod, index) => {
                return (
                  <>
                    <ProductContentCart key={prod.id + index}>
                      <img src={prod.image} alt={prod.title} />
                      <ProductTitle>{prod.title}</ProductTitle>
                      <div>
                        <p>Quantidade</p>
                        <div>
                          <ButtonReduce onClick={() => handleDecrement(prod.count, prod.id, prod.price)}>
                            -
                          </ButtonReduce>
                          <p>{prod.count}</p>
                          <ButtonAdd onClick={() => handleIncrement(prod.count, prod.id, prod.price)}>
                            +
                          </ButtonAdd>
                        </div>
                      </div>
                      <ProductPrice>R$ {prod.price.toFixed(2)}</ProductPrice>
                      <Button
                        id="delete-product"
                        onClick={() => handleDeleteProductFavoriteCart(index)}
                      >
                        <CgTrashEmpty />
                      </Button>
                    </ProductContentCart>
                  </>
                );
              })}
            </ProductCartContainer>
            <DeliveryCepContainer>
              <DeliveryInputContent>
                <TextField
                  placeholder="Qual CEP de entrega?"
                  value={inputCEP}
                  label="CEP"
                  variant="outlined"
                  onChange={(event) => setInputCEP(event.target.value)}
                />
                <Button onClick={handleDeliveryCEP}>CALCULAR</Button>
              </DeliveryInputContent>
              {verificarCep &&
                cepClient.map((cep, index) => {
                  return (
                    <>
                      <DeliveryCepContent>
                        <h5 key={index}>CEP da Entrega</h5>
                        <div>
                          <p>Rua: <span>{cep?.logradouro ? cep.logradouro : "-"}</span></p>
                          <p>Nº <span>{cep?.complemento ? cep.complemento : "-"}</span></p>
                        </div>
                        <div>
                          <p>Bairro: <span>{cep?.bairro ? cep.bairro : "-"}</span></p>
                          <span>
                            {cep?.localidade}
                            <span>- {cep?.uf}</span>
                          </span>
                        </div>
                      </DeliveryCepContent>
                    </>
                  );
                })}
            </DeliveryCepContainer>
          </SectionPaymentCartContainer>

          <AsidePaymentCartContainer $hasShipping={verificarCep}>
            <div>
              <h1>Resumo do Pedido</h1>
              <p>
                Subtotal:
                <span>R$ {FormatedFavoriteCartValues('soma', state)?.toFixed(2)}</span>
              </p>
              <p>
                Frete:
                <span>R$ {FormatedFavoriteCartValues('frete', state)?.toFixed(2)}</span>
              </p>
              <h4>
                TOTAL:
                <span>R$ {FormatedFavoriteCartValues('total', state)?.toFixed(2)}</span>
              </h4>
            </div>
            <p>
              <AiFillCreditCard /> 3X R$
              {FormatedFavoriteCartValues("dividido", state)?.toFixed(2)} s/
              juros
            </p>
            <p>
              <FaBarcode />
              R$ {FormatedFavoriteCartValues("desconto", state)?.toFixed(2)} com
              desconto de 10% à vista no boleto.
            </p>

            <div id="resume-buttons">
              <Button onClick={() => {
                router.push(`/Success`)
                handleCleanAll()
              }}>
                Finalizar o Pedido
              </Button>
              <Button id="clear-cart-button" onClick={() => handleCleanAll()}>
                Limpar o Carrinho
              </Button>
            </div>
          </AsidePaymentCartContainer>
        </PaymenteContainer>
      </MainCartProducts>
    </>
  )
}

export default HomeProductContainer
