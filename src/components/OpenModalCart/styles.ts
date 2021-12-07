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

const ProductDivContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #3498db;
  margin-top: 20px;
`;

const AmountProductContent = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`;

const FooterModalContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  div {
    margin: 10px;

    p {
      color: #006400;
    }
  }
`;

export {
  ModalContainer,
  HeadModalContent,
  BodyModalContent,
  ProductDivContent,
  AmountProductContent,
  FooterModalContent,
};
