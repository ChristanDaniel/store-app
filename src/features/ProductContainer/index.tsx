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
      <div>
          <div>
            <img src={`${Product?.image}`} alt={`${Product?.description}`} />
            <h1>{Product?.title}</h1>
          </div>
        </div>
      </MainProductContainer>
    </>
  );
};
export default HomeProductContainer;
