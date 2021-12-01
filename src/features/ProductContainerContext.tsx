import axios from "axios";
import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";

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

interface IProductContainerProps {}

const ProductContainerContext = createContext({} as IProductContainerProps);

const ProductContainerProvider: React.FC = ({ children }) => {


  return (
    <ProductContainerContext.Provider
      value={{}}>
      {children}
    </ProductContainerContext.Provider>
  );
};

export { ProductContainerProvider, ProductContainerContext };
