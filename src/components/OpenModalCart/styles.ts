import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  /* margin: 20px; */


`;

const HeadModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 20px; */

  button {
    display: flex;
    align-items: center;
  }

  svg {
    height: 18px;
    width: 18px;
  }
`;

const BodyModalContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 15px;
  background: #DCDCDC;

  h4 {
    font-size: 13px;
  }

  div {
    width: 530px;
    /* margin: 10px; */
    display: flex;
    justify-content: space-between;

    span {
      color: #737380;
      text-decoration: line-through;
    }
  }
`;

const ProductDivContent = styled.div``;

const AmountProductContent = styled.div``;

const FooterModalContent = styled.div``;

export {
  ModalContainer,
  HeadModalContent,
  BodyModalContent,
  ProductDivContent,
  AmountProductContent,
  FooterModalContent,
};
