import styled from "styled-components";
import { Buttons } from "../../components/Button/styles";

const MainCartProducts = styled.main`
  height: calc(100vh - 80px);
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #eee;
`;

const PaymenteContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionPaymentCartContainer = styled.section``;

const ProductCartContainer = styled.div`
  width: 800px;
  max-height: 360px;
  overflow: auto;
  padding: 0 12px 0 0;
  position: relative;
  top: 20px;
`;

const ProductContentCart = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  padding: 10px;
  background: #fff;
  gap: 40px;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: row;
    }
  }

  p {
    font-size: 12px;
    padding: 5px;
  }

  img {
    height: 70px;
    width: 80px;
  }

  h4 {
    max-width: 400px;
  }
`;

const ButtonReduce = styled.button`
  font-size: 20px;
  padding: 2px;
  margin: 4px;
  align-items: center;
  border-radius: 4px;
  color: #ff000090;

  cursor: pointer;
  border: 0;

  transition: 0.3s;

  :hover {
    filter: brightness(0.9);
    background: #ff000040;
  }
`;

const ButtonAdd = styled.button`
  font-size: 20px;
  padding: 2px;
  margin: 4px;
  align-items: center;
  border-radius: 4px;
  color: #00640090;

  cursor: pointer;
  border: 0;

  transition: 0.3s;

  :hover {
    filter: brightness(0.9);
    background: #00640040;
  }
`;

const ProductPrice = styled.span`
  display: flex;
  color: #006400;
`;

const DeliveryCepContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: white;
  padding: 12px;
  position: relative;
  top: 20px;
  border-radius: 8px;
  ${Buttons} {
    margin-top: unset;
    margin-left: 12px;
  }
`;

interface AsidePaymentCartContainerProps {
  $hasShipping: boolean;
}

const AsidePaymentCartContainer = styled.aside<AsidePaymentCartContainerProps>`
  margin: 20px;
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  height: ${(props) => (!props.$hasShipping ? "275px" : "unset")};

  p,
  h1,
  h4 {
    margin-bottom: 12px;
  }
  span {
    margin-left: 4px;
  }

  /* svg {
     height: 50px;
     width: 50px;
   } */

  #resume-buttons {
    display: flex;
    ${Buttons} {
      margin-left: 12px;
    }
    #clear-cart-button {
      background-color: red;
      opacity: 0.9;
    }
  }
`;

export {
  MainCartProducts,
  PaymenteContainer,
  SectionPaymentCartContainer,
  ProductCartContainer,
  ButtonAdd,
  ButtonReduce,
  ProductPrice,
  ProductContentCart,
  DeliveryCepContainer,
  AsidePaymentCartContainer,
};
