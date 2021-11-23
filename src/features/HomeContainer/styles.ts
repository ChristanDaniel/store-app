import styled from "styled-components";

const MainContainer = styled.main`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  /* margin: 80px; */
  flex-direction: column;

  span {
    color: #737380;
    /* text-decoration: line-through; */
  }
`;

const Banner = styled.img`
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;

  /* height: 208px;
  width: 1200px; */
`

const MainContent = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 45px;
  gap: 30px;
`;

const MainContentDiv = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  padding: 70px 30px;
  border: 1px solid #3498db;
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;


  img {
    height: 232px;
    width: 232px;
  }
`;

export { MainContainer, Banner, MainContent, MainContentDiv };
