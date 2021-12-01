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

  const [state, dispatch] = useReducer(AppReducer, questionsFromStorage || initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);


  // useEffect(() => {
  //   setLoginAuthentication(LoginFromStorage)
  // }, [loginAuthentication]);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    }

  }, [state, teste]);

  return (
    <ProductContainerContext.Provider
      value={{}}>
      {children}
    </ProductContainerContext.Provider>
  );
};

export { ProductContainerProvider, ProductContainerContext };
