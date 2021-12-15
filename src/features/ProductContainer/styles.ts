import styled from "styled-components";

const MainProductContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.div`
  img {
    box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;

    max-height: 500px;
    max-width: 600px;
  }
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  margin-left: 0px;
  max-width: 500px;
`;

const ProdCategory = styled.span`
  color: #737380;
`;

const ProdDelivery = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #00a000;
`;

const AllRate = styled.p`
  color: #f2c832;
  margin: 10px 0 0 0;

  span {
    color: #737380;
  }
`;

const ProductPriceValue = styled.h1`
  margin-top: 20px;
  color: #ff5510;
`;
const ProductInstallments = styled.p`
  display: flex;
  align-items: center;
  color: #737380;

  svg {
    height: 25px;
    width: 25px;
    margin-right: 8px;
  }
`;

export { MainProductContainer };
