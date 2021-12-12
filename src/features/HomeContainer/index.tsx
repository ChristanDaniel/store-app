/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect, useState } from 'react'
import { Footers } from '../../components/Footers'
import { ProductContainerContext } from '../ProductContainerContext'

import { MainContainer, Banner, MainContent, MainContentDiv } from './styles'

interface ProductProps {
  category?: string
  description?: string
  id: number
  image: string
  price: number
  rating?: [
    {
      rate: string
      count: string
    }
  ]
  title: string
  count: number
}

const HomeContainer = (): JSX.Element => {
  const router = useRouter();
  const { products, contextValue, loginAuthentication } = useContext(
    ProductContainerContext
  );

  const handleCheckIfHasOnCart = (productId: number) => {
    const hasProduct = Boolean(
      contextValue.state.find((prod) => prod.id === productId)
    );

    console.log("hasProduct", hasProduct);
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
    if (ind === "desconto") {
      const num = value * 0.9;
      return num.toFixed(2);
    }

    if (ind === "dividido") {
      const num = value / 3;
      return num.toFixed(2);
    }
  };

  return (
    <>
      <MainContainer>
        <Banner
          src="https://img.terabyteshop.com.br/banner/1200.jpg"
          alt="teste"
        />
        <MainContent>
          {products.map((product, index) => {
            return (
              <MainContentDiv key={product.id + index}>
                <img src={`${product.image}`} alt={`${product.title}`} />

                <h3>{product.title}</h3>
                <ProdPriceValueSpan>
                  de R$ {product.price.toFixed(2)} por
                </ProdPriceValueSpan>
                <ProdPriceValue>
                  R$ {FormatedValues("desconto", product.price)}{" "}
                  <span>à vista no boleto</span>
                </ProdPriceValue>
                <InstallmentAmount>
                  ou até 3x de R$ {FormatedValues("dividido", product.price)}
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
            );
          })}
        </MainContent>
        <Footers />
      </MainContainer>
    </>
  )
}
export default HomeContainer
