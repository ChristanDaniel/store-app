/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { useRouter } from 'next/dist/client/router'

import Button from '../../components/Button'
import { Footers } from '../../components/Footers'
import Slider from '../../components/Slider'

import { ProductContainerContext } from '../ProductContainerContext'

import { BsCartCheckFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

import {
  MainContainer,
  Banner,
  MainContent,
  MainContentDiv,
  InstallmentAmount,
  ButtonContainerBuy,
  ProdPriceValue,
  ProdPriceValueSpan,
} from "./styles";

interface ProductProps {
  category?: string;
  description?: string;
  id: number;
  image: string;
  price: number;
  rating?: [
    {
      rate?: string;
      count?: string;
    }
  ];
  title: string;
}

const HomeContainer = (): JSX.Element => {
  const router = useRouter();
  const { products, contextValue } = useContext(
    ProductContainerContext
  );

  const handleCheckIfHasOnCart = (productId: number) => {
    const hasProduct = Boolean(
      contextValue.state.find((prod) => prod.id === productId)
    );

    return hasProduct;
  };

  const handleAddCart = (product: ProductProps) => {
    const hasProduct = handleCheckIfHasOnCart(product.id);

    !hasProduct &&
      contextValue.dispatch({
        type: "add_product",

        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        count: 1,
      });
  };

  const FormatedValues = (ind: string, value: number) => {
    if (ind === "discount") {
      const num = value * 0.9;
      return num.toFixed(2);
    }

    if (ind === "divided") {
      const num = value / 3;
      return num.toFixed(2);
    }
  };

  return (
    <>
      <MainContainer>
        <Banner>
          <Slider />
        </Banner>
        <MainContent>
          {products.map((product, index) => {
            return (
              <div key={index + product.id.toString()}>
                <MainContentDiv>
                  <img src={`${product.image}`} alt={`${product.title}`} />

                  <h3>{product.title}</h3>
                  <ProdPriceValueSpan>
                    de R$ {product.price.toFixed(2)} por
                  </ProdPriceValueSpan>
                  <ProdPriceValue>
                    R$ {FormatedValues("discount", product.price)}{" "}
                    <span>à vista no boleto</span>
                  </ProdPriceValue>
                  <InstallmentAmount>
                    ou até 3x de R$ {FormatedValues("divided", product.price)}
                  </InstallmentAmount>
                  <ButtonContainerBuy>
                    <Button onClick={() => router.push(`/Product/${product.id}`)}>
                      <CgDetailsMore /> Ver detalhes
                    </Button>

                    <Button
                      onClick={() => handleAddCart(product)}
                      $disabled={handleCheckIfHasOnCart(product.id)}
                    >
                      {handleCheckIfHasOnCart(product.id) ? (
                        <BsCartCheckFill />
                      ) : (
                        <BsCart3 />
                      )}
                    </Button>
                  </ButtonContainerBuy>
                </MainContentDiv>
              </div>
            );
          })}
        </MainContent>
        <Footers />
      </MainContainer>
    </>
  )
}
export default HomeContainer
