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
  border-top: 2.5px solid #3498db;
  border-bottom: 5px solid #3498db;

  height: 208px;
  width: 100%;
`;

const MainContent = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 45px;
  gap: 20px;
`;

const MainContentDiv = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  padding: 24px 18px;
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
  justify-content: space-between;

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

export { MainContainer, Banner, MainContent, MainContentDiv };
