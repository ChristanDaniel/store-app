import styled from "styled-components";

const LoginMainContainer = styled.main`
  display: flex;
  height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
`;

const LoginInputContent = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 8px;
  }
`

const LoginButtonContent = styled.div`
  display: flex;
`

const LoginCartContent = styled.div`
  display: flex;

`


export { LoginMainContainer, LoginButtonContent, LoginInputContent, LoginCartContent };
