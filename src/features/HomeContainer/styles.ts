import styled, { keyframes } from "styled-components";

const MainContainer = styled.main``;

const Banner = styled.div`
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
  border-top: 2.5px solid #3498db;
  border-bottom: 5px solid #3498db;
`;

const MainContent = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 45px;
  gap: 20px;

`;

const ProductContent = styled.div`
  min-height: 424px;
  width: 250px;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;

  img {
    display: flex;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height: 190px;
    width: 190px;
  }

  h3 {
    color: #3a383e;
    margin-top: 6px;
    font-size: 14px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const ProdPriceValueSpan = styled.span`
  font-size: 14px;
  margin-top: 12px;
  color: #737380;
  text-decoration: line-through;
`;

const ProdPriceValue = styled.h2`
  color: #006400;

  span {
    font-size: 12px;
  }
`;

const InstallmentAmount = styled.p`
  color: #ff5510;
  font-size: 14px;
`;

const ButtonContainerBuy = styled.div`
  display: flex;
  justify-content: space-around;

  button {}
`;

export {
  MainContainer,
  Banner,
  MainContent,
  ProductContent,
  ProdPriceValue,
  ProdPriceValueSpan,
  InstallmentAmount,
  ButtonContainerBuy,
};
