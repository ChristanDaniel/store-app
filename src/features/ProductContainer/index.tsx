import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { MainProductContainer } from "./styles";
// import { ProductContainerContext } from "../ProductContainerContext";
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
  // const { products } = useContext(ProductContainerContext);

  const [Product, setProduct] = useState<ProductProps>();
  const router = useRouter();

  const getProduct = async () => {
    if (!router.query.id) {
      router.push('/')
    }

    const response = await axios.get(
      `https://fakestoreapi.com/products/${router.query.id}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <MainProductContainer>
        <GeneralInfo>
          <hr />
          <h1> Características Gerais </h1>
          <hr />
        </GeneralInfo>

          <ProductInfo>
            <ProductDescription>
              <h3>{Product?.title}</h3>
              <ProdCategory>Categoria: {Product?.category}</ProdCategory>
              <ProdDelivery>
                <BsFillLightningChargeFill /> Pronta Entrega
              </ProdDelivery>
              <p>{Product?.description}</p>
              <AllRate>
                ★★★★★ <span>{Product?.rating.count} avaliações</span>
              </AllRate>
              <ProductPriceValue>
                R$ {Product?.price.toFixed(2)}
              </ProductPriceValue>
              <ProductInstallments>
                <BsFillCreditCardFill /> 3x de{" "}
                {FormatedValues("dividido", Product?.price)} sem juros no
                cartão.
              </ProductInstallments>

            </ProductDescription>
            <ProductImage>
              <img src={`${Product?.image}`} alt={`${Product?.description}`} />
            </ProductImage>
          </ProductInfo>

      </MainProductContainer>
    </>
  );
};
export default HomeProductContainer;
