/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useContext, useEffect, useState } from 'react'
import { Footers } from '../../components/Footers';

import { MainContainer, Banner, MainContent, MainContentDiv } from "./styles";

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
  count: number
}

const HomeContainer = (): JSX.Element => {
  const [teste, setTeste] = useState('')
  const [products, setProducs] = useState<ProductProps[]>([]);

  const router = useRouter()

  const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response)
    setProducs(response.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {}, [])

  return (
    <>
     
    </>
  )
}
export default HomeContainer
