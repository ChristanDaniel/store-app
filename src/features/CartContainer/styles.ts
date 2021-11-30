import styled from "styled-components";

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

const DeliveryCepContainer = styled.div`
  margin-top: 20px;
  flex-direction: column;
  display: flex;
`
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
  DeliveryCepContainer,
  AsidePaymentCartContainer,
};
