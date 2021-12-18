import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { AiFillCreditCard } from "react-icons/ai";
import { FaBarcode } from "react-icons/fa";

import {
  MainCartProducts,
  MainContentCartProducts,
  SectionPaymentCartContainer,
  DeliveryCepContainer,
  ProductContentCart,
  PaymenteContainer,
  ProductCartContainer,
  AsidePaymentCartContainer,
} from "./styles";
import axios from "axios";

interface ProductProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: [
    {
      rate: string;
      count: string;
    }
  ];
  title: string;
  // inventory: number;
  // promotion_amount: string;
}

const HomeProductContainer = (): JSX.Element => {

  const { contextValue, loginAuthentication, teste, setTeste } = useContext(
    ProductContainerContext
  );
  const { state } = contextValue;


  // useEffect(() => {
  // }, []);

  return (
    <>
    <MainCartProducts>
        <h1>
        01036-970
          CARRINHO <BsCart3 />
        </h1>
        <PaymenteContainer>
          <SectionPaymentCartContainer>
            <ProductCartContainer>
              {state.map((prod, index) => {
                return (
                  <>
                    <ProductContentCart key={prod.id + index}>
                      <img src={prod.image} alt={prod.title} />
                      <h4>{prod.title}</h4>
                      <div>
                        <p>Quantidade</p>
                        <div>
                          <ButtonReduce onClick={() => decrementar(prod.count, prod.id, prod.price)}>-</ButtonReduce>
                          <p>{prod.count}</p>
                          <ButtonAdd onClick={() => incrementar(prod.count, prod.id, prod.price)}>+</ButtonAdd>
                        </div>
                      </div>
                      <ProductPrice>R${prod.price.toFixed(2)}</ProductPrice>
                      <button onClick={() => handleDeleteProductFavoriteCart(index)}><CgTrashEmpty /></button>
                    </ProductContentCart>
                  </>
                );
              })}
            </ProductCartContainer>
          </SectionPaymentCartContainer>

        </PaymenteContainer>
      </MainCartProducts>
    </>
  );
};

export default HomeProductContainer;
