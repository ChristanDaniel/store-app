import axios from "axios";

import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";

import {
  AppReducer,
  initialState,
  ProductAction,
  ProductState,
  Reducer,
} from "./CartReducer";

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
  count: number
}


interface LoginAuthenticationProps {
  id?: string
  name?: string
  email?: string
  loging: boolean
}

interface IProductContainerProps {
  getAllProducts: (credentials?: ProductProps[]) => Promise<void>;

  contextValue: {
    state: ProductState[];
    dispatch: React.Dispatch<ProductAction>;
  };

  products: ProductProps[];
  setProducs: React.Dispatch<React.SetStateAction<ProductProps[]>>;

  productItens: ProductProps[];
  setProductItens: React.Dispatch<React.SetStateAction<ProductProps[]>>;

  favoriteCart: ProductProps[];
  setFavoriteCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;

  loginAuthentication: LoginAuthenticationProps
  setLoginAuthentication: React.Dispatch<React.SetStateAction<LoginAuthenticationProps>>
}

let questionsFromStorage: ProductProps[]

if (process.browser) {
  const hasStorage = localStorage.getItem('state')
  questionsFromStorage = hasStorage ? JSON.parse(hasStorage) : []
}

let LoginFromStorage: LoginAuthenticationProps

if (process.browser) {
  const loginHasStorage = localStorage.getItem('authentication')
  LoginFromStorage = loginHasStorage ? JSON.parse(loginHasStorage) : []
}


const ProductContainerContext = createContext({} as IProductContainerProps);

const ProductContainerProvider: React.FC = ({ children }) => {
  const [products, setProducs] = useState<ProductProps[]>([]);
  const [favoriteCart, setFavoriteCart] = useState<ProductProps[]>([]);
  const [productItens, setProductItens] = useState<ProductProps[]>([]);
  const [loginAuthentication, setLoginAuthentication] = useState<LoginAuthenticationProps>(LoginFromStorage);

  const [state, dispatch] = useReducer(AppReducer, questionsFromStorage || initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    } else {
      localStorage.setItem("state", JSON.stringify(['']));
    }
  }, [state, productItens]);

  const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/category/electronics");
    setProducs(response.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContainerContext.Provider
      value={{
        getAllProducts,
        products,
        setProducs,
        favoriteCart,
        setFavoriteCart,
        productItens,
        setProductItens,
        loginAuthentication,
        setLoginAuthentication,
        contextValue,
      }}
    >
      {children}
    </ProductContainerContext.Provider>
  );
};

export { ProductContainerProvider, ProductContainerContext };
