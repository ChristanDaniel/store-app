import React, { useContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import {
  AllRate,
  GeneralInfo,
  MainProductContainer,
  ProdCategory,
  ProdDelivery,
  ProductCode,
  ProductCodeValue,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductInstallments,
  ProductPriceValue,
  ProgressContainer,
} from "./styles";
import { ProductContainerContext } from "../ProductContainerContext";
import axios from "axios";
import { Footers } from "../../components/Footers";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import {
  BsFillLightningChargeFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { FaBarcode } from "react-icons/fa";
import Button from "../../components/Button";

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

    router.push("/Cart");
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

        {Product ? (
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
              <ProductCodeValue>
                R$ {FormatedValues("desconto", Product?.price)}
              </ProductCodeValue>
              <ProductCode>
                <FaBarcode /> à vista com 10% de desconto no boleto ou pix
              </ProductCode>
              <Button
                $disabled={handleCheckIfHasOnCart(Product.id)}
                onClick={() => handleAddCart(Product)}
              >
                {handleCheckIfHasOnCart(Product.id)
                  ? "Produto adicionado ao carrinho"
                  : "Comprar Agora"}
              </Button>
            </ProductDescription>
            <ProductImage>
              <img src={`${Product?.image}`} alt={`${Product?.description}`} />
            </ProductImage>
          </ProductInfo>
        ) : (
          <>
            <ProgressContainer>
              <div>
                <CircularProgress />
              </div>
            </ProgressContainer>
          </>
        )}

        <Footers />
      </MainProductContainer>
    </>
  );
};
export default HomeProductContainer;
