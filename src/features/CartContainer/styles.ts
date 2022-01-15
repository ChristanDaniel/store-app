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

const MainContentCartProducts = styled.div``;

const PaymenteContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionPaymentCartContainer = styled.section`
  position: relative;
`;

const ProductCartContainer = styled.div`
  width: 800px;
  max-height: 360px;
  overflow: auto;
  padding: 0 12px 0 0;
  position: relative;
  top: 20px;

  #clear-cart-button {
    background-color: transparent;
    color: #778899;
    font-size: 11px;
    opacity: 0.9;
    margin-left: auto;
    margin-top: -15px;
    margin-right: -12px
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
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
    font-size: 14px;
  }

  img {
    height: 70px;
    width: 80px;
  }
  /*
  h4 {
    min-width: 400px;
  } */

  #delete-product {
    padding: 0;
    margin: 0;
    height: 0;
    background: transparent;

    svg {
      color: #000;
    }
  }
`;

const ProductTitle = styled.p`
  min-width: 323px;
`;

const ButtonReduce = styled.button`
  font-size: 24px;
  padding: 2px;
  margin: 4px;
  align-items: center;
  border-radius: 4px;
  color: #00070;
  background: transparent;

  cursor: pointer;
  border: 0;

  transition: 0.3s;

  :hover {
    filter: brightness(0.7);
    /* background: #ff000040; */
  }
`;

const ButtonAdd = styled.button`
  font-size: 19px;
  padding: 2px;
  margin: 4px;
  align-items: center;
  border-radius: 4px;
  color: #00640090;
  background: transparent;

  cursor: pointer;
  border: 0;

  transition: 0.3s;

  :hover {
    filter: brightness(0.9);
    /* background: #00640040; */
  }
`;

const ProductPrice = styled.span`
  display: flex;
  color: #006400;
  min-width: 92px;
`;

const OrderSummaryContent = styled.div`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 2px;
  box-shadow: -1px 1px 15px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    padding: 6px;
  }
  p {
    font-size: 13px;
  }
  span {
    font-size: 13px;
    /* margin: 0px 0px 0px 0px; */
    min-width: 100px;
  }
`;

const TotalOrderSummary = styled.div`
  align-items: center;
  background: #00640020;
  border-radius: 0px 0px 10px 10px;

  h5 {
    padding: 8px;
  }
`;

const FormOfPaymentContent = styled.div`
  background-color: white;
  padding: 12px;
  /* border-radius: 10px 10px 0px 0px; */

  svg {
    height: 34px;
    width: 37px;
    margin-right: 10px;
    color: #000;
  }

  /* span {
    font-size: 15px;
    color: rgba(0,160,0,.1);
  } */

  div {
    margin: 4px 0px 14px 10px;
    display: flex;
  }
`;

const PaymentCartContent = styled.p`
  display: flex;
  align-items: center;
  color: #808080;
  font-size: 13px;
`;

const PaymentTicketContainer = styled.div`
  svg {
    margin-top: 8px;
  }
`

const PaymentTicketContent = styled.p`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  color: #808080;
  font-size: 13px;

  svg {
    margin-top: 14px;
  }
`;

const PaymenteTicketTotal = styled.span`
  font-size: 16px;
  font-weight: 550;
  color: #00a000;
`

const DeliveryCepContainer = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: white;
  padding: 12px;
  top: 380px;
  width: 100%;
  position: absolute;
  border-radius: 8px;
  min-height: 98px;

  label {
    top: -5px;
  }

  input {
    height: 8px
  }

  ${Buttons} {
    margin-top: unset;
    margin-left: 12px;
  }
`;

const DeliveryInputContent = styled.div`
  display: flex;
  min-width: 350px;
`

const DeliveryCepContent = styled.div`
  padding: 8px;
  align-items: center;
  width: 100%;

  h5 {
    margin-left: 150px;
    margin-bottom: 4px;
  }

  div {
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-between;
  }

  span {
    color: #808080;
  }
`

const ErrorCepContent = styled.p`
  position: absolute;
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #f00;
`

interface AsidePaymentCartContainerProps {
  $hasShipping: boolean;
}

const AsidePaymentCartContainer = styled.aside<AsidePaymentCartContainerProps>`
  margin: 20px;
  border-radius: 8px;
  height: ${(props) => (!props.$hasShipping ? "275px" : "unset")};

  #resume-buttons {
    display: flex;
    ${Buttons} {
      width: 100%;
    }
  }
`;

export {
  MainCartProducts,
  MainContentCartProducts,
  PaymenteContainer,
  SectionPaymentCartContainer,
  ProductCartContainer,
  DeliveryCepContent,
  DeliveryInputContent,
  ButtonAdd,
  OrderSummaryContent,
  FormOfPaymentContent,
  PaymentTicketContent,
  PaymenteTicketTotal,
  ProductTitle,
  PaymentCartContent,
  ButtonReduce,
  ProductPrice,
  TotalOrderSummary,
  PaymentTicketContainer,
  ProductContentCart,
  DeliveryCepContainer,
  ErrorCepContent,
  AsidePaymentCartContainer,
};
