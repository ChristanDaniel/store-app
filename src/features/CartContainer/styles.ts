import styled from "styled-components";
import { Buttons } from "../../components/Button/styles";

const MainCartProducts = styled.main`
  display: flex;
  justify-content: center;
`;

const MainContentCartProducts = styled.main``;

const PaymenteContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionPaymentCartContainer = styled.section``;

const ProductCartContainer = styled.div`
  div {
    display: flex;
  }
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

const AsidePaymentCartContainer = styled.aside`
   margin: 20px;

   /* svg {
     height: 50px;
     width: 50px;
   } */
`;

export {
  MainCartProducts,
  MainContentCartProducts,
  PaymenteContainer,
  SectionPaymentCartContainer,
  ProductCartContainer,
  ButtonReduce,
  ProductPrice,
  ButtonAdd,
  ProductContentCart,
  DeliveryCepContainer,
  AsidePaymentCartContainer,
};
