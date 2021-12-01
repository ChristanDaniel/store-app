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

interface LoginAuthenticationProps {
  id?: string
  name?: string
  email?: string
  loging: boolean
}


interface IProductContainerProps {
  loginAuthentication: LoginAuthenticationProps
  setLoginAuthentication: React.Dispatch<React.SetStateAction<LoginAuthenticationProps>>
}

let LoginFromStorage: LoginAuthenticationProps

if (process.browser) {
  const loginHasStorage = localStorage.getItem('authentication')
  LoginFromStorage = loginHasStorage ? JSON.parse(loginHasStorage) : []
}


const ProductContainerContext = createContext({} as IProductContainerProps);

const ProductContainerProvider: React.FC = ({ children }) => {
  const [loginAuthentication, setLoginAuthentication] = useState<LoginAuthenticationProps>(LoginFromStorage);

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
      value={{
        loginAuthentication,
        setLoginAuthentication,
      }}>
      {children}
    </ProductContainerContext.Provider>
  );
};

export { ProductContainerProvider, ProductContainerContext };
