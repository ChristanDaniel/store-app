import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { BsCart3 } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { FaBarcode } from "react-icons/fa";
import { CgTrashEmpty } from "react-icons/cg";
import { BiXCircle } from 'react-icons/bi'

import {
  MainCartProducts,
  MainContentCartProducts,
  SectionPaymentCartContainer,
  DeliveryCepContainer,
  DeliveryCepContent,
  ErrorCepContent,
  PaymenteContainer,
  ButtonAdd,
  ProductTitle,
  ProductCartContainer,
  PaymentTicketContainer,
  PaymentCartContent,
  DeliveryInputContent,
  AsidePaymentCartContainer,
  TotalOrderSummary,
  FormOfPaymentContent,
  PaymenteTicketTotal,
  ProductContentCart,
  PaymentTicketContent,
  OrderSummaryContent,
  ProductPrice,
  ButtonReduce,
} from "./styles";
import { ProductContainerContext } from "../ProductContainerContext";
import axios from "axios";
import Button from "../../components/Button";
import { TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ProductProps {
  category?: string;
  description?: string;
  id: number;
  image: string;
  price: number;
  rating?: [
    {
      rate: string;
      count: string;
    }
  ];
  title: string;
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
  const { contextValue, loginAuthentication, productItens, setProductItens } = useContext(
    ProductContainerContext
  );
  const [renderiza, setRenderiza] = useState(true);
  const [inputCEP, setInputCEP] = useState("");
  const [cepClient, setCepClient] = useState<cepProps[]>([]);
  const [verificarCep, setVerificarCep] = useState(false);
  const [verificarCepErro, setVerificarCepErro] = useState(false);
  // const [sumValuesTotal, setSumValuesTotal] = useState(0);

  const [Product, setProduct] = useState<ProductProps[]>([]);
  const router = useRouter();

  const { state } = contextValue;

  const handleCleanAll = () => {
    router.push("/");
    localStorage.removeItem("state");
    productItens.splice(0, 1000);
    setProductItens(productItens);
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

  const incrementar = (count: number, id: number, price: number) => {
    if (count < 6) {
      productItens.map((prod) => {
        if (prod.id === id) {
          const originalCountValue = price / prod.count;
          const sumPrice = originalCountValue + prod.price;
          prod.price = sumPrice

          prod.count = count + 1;
          localStorage.setItem("state", JSON.stringify(state));
          setRenderiza(!renderiza);
        }
      });
    } else {
      return
    }
  };

  const decrementar = (count: number, id: number, price: number) => {
    if (count > 1) {
      productItens.map((prod) => {
        if (prod.id === id) {
          const originalCountValue = price / prod.count;
          const sumPrice = prod.price - originalCountValue;
          prod.price = sumPrice

          prod.count = count - 1;
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
    if (inputCEP.length >= 8) {
      try {
        const response = await axios.get(
          `http://viacep.com.br/ws/${inputCEP}/json/`
        );
        setCepClient([response.data]);
        setVerificarCep(true);
        setVerificarCepErro(false)
      } catch (error) {
        setCepClient([]);
        setVerificarCep(false);
        setVerificarCepErro(true)
      }

    } else {
      setCepClient([]);
      setVerificarCep(false);
      setVerificarCepErro(true)
    }
  };

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

  const handleCheckCEP = () => {
    if (verificarCep) {
      router.push(`/Success`);
    } else {
      toast.error('Por favor informe um CEP', {
        position: "bottom-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleClickEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == 'Enter') {
      return handleDeliveryCEP(event)
    } else {
      return
    }
  }

  useEffect(() => {
    if (loginAuthentication.loging === false) {
      router.push("/login");
    }
  }, [loginAuthentication, router]);

  useEffect(() => {
    if (state.length === 0) {
      router.push("/");
    }
  }, [router, state, renderiza]);


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
                          <ButtonReduce onClick={() => decrementar(prod.count, prod.id, prod.price)}>
                            -
                          </ButtonReduce>
                          <p>{prod.count}</p>
                          <ButtonAdd onClick={() => incrementar(prod.count, prod.id, prod.price)}>
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
              <Button id="clear-cart-button" onClick={() => handleCleanAll()}>
              <BiXCircle /> Limpar o Carrinho
              </Button>
            </ProductCartContainer>
            <DeliveryCepContainer>
              <DeliveryInputContent>
                <div>
                  <TextField
                    placeholder="Qual CEP de entrega?"
                    value={inputCEP}
                    label="CEP"
                    variant="outlined"
                    onChange={(event) => setInputCEP(event.target.value)}
                    onKeyPress={(event) => handleClickEnter(event)}
                  />
                    {verificarCepErro === false ? (<></>) : (<ErrorCepContent><BiXCircle />Não foi possível encontrar nenhum CEP correspondente.</ErrorCepContent>)}
                </div>
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
            <OrderSummaryContent>
              <div>
                <p>Subtotal:</p>
                <span>
                  R$ {FormatedFavoriteCartValues("soma", state)?.toFixed(2)}
                </span>
              </div>
              <div>
                <p>Frete:</p>
                <span>
                  R$ {FormatedFavoriteCartValues("frete", state)?.toFixed(2)}
                </span>
              </div>
              <hr />
              <TotalOrderSummary>
                <h5>TOTAL:</h5>
                <span>
                  R$ {FormatedFavoriteCartValues("total", state)?.toFixed(2)}
                </span>
              </TotalOrderSummary>
            </OrderSummaryContent>
            <FormOfPaymentContent>
              <div>
                <PaymentCartContent>
                  <AiFillCreditCard /> 3X R$ {FormatedFavoriteCartValues("dividido", state)?.toFixed(2)} <br />
                  s/ juros
                </PaymentCartContent>
              </div>
              <hr />
              <PaymentTicketContainer>
                  <FaBarcode />
                <PaymentTicketContent>
                  <PaymenteTicketTotal>R$ {FormatedFavoriteCartValues("desconto", state)?.toFixed(
                    2
                  )}</PaymenteTicketTotal>
                  com desconto de 10% à vista no boleto.
                </PaymentTicketContent>
              </PaymentTicketContainer>
            </FormOfPaymentContent>
              <div id="resume-buttons">
                <Button
                  onClick={() => {
                    handleCheckCEP()
                  }}
                >
                  Finalizar o Pedido
                </Button>
              </div>
          </AsidePaymentCartContainer>
        </PaymenteContainer>
      </MainCartProducts>
      <ToastContainer
          position="bottom-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  );
};
export default HomeProductContainer;
