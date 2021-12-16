import styled from "styled-components";

const LoginMainContainer = styled.main`
  display: flex;
  height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LoginMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 25px;
  z-index: 1;
  border-radius: 8px;


  span {
    color: #303030;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: -15px;
  }

  div {
    margin-top: 50px
  }
`;


const LoginMessage = styled.p`
  font-size: 60px;
  margin-right: 60px;
  font-weight: 900;
  color: #3498db;
`;

const LoginMessageInformation = styled.div`
  span {
    color: #3498db;
  }

  p {
    color: #303030;
    font-weight: 700;
    font-size: 12px;
    line-height: normal;
  }
`

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


export { LoginMainContainer, LoginButtonContent, LoginMessageInformation, LoginMessage, LoginInputContent, LoginCartContent, LoginMessageContent };
