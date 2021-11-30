import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { AiFillCreditCard } from "react-icons/ai";
import { FaBarcode } from "react-icons/fa";

import {
  MainCartProducts,
  MainContentCartProducts,
  SectionPaymentCartContainer,
  DeliveryCepContainer,
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


  // useEffect(() => {
  // }, []);

  return (
    <>

    </>
  );
};
export default HomeProductContainer;
