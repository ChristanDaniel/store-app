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

  input {
    width: 100%;
  }


`;

const LoginButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginCartContent = styled.div`
  margin-left: -20px;
  display: flex;
  padding: 50px;
  width: 420px;
  box-shadow: 0 0 40px 16px rgb(0 0 0 / 22%);
  z-index: 2;
  border-radius: 8px;
  animation: move 800ms;
  background: #fff;

  input {
    width: 290px;
  }

  @keyframes move {
    from {
      opacity: 0;
      transform: translateX(-35%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

const ButtonUnlock = styled.button`
  margin-top: 16px;
  height: 38px;
  border-radius: 8px;
  font-weight: 500;
  background: transparent;
  color: #303030;

  display: flex;
  align-items: center;

  cursor: pointer;
  border: 0;

  svg {
    margin-right: 5px ;
  }
`

export {
  LoginMainContainer,
  LoginMessageContent,
  LoginMessage,
  LoginMessageInformation,
  LoginButtonContent,
  LoginInputContent,
  ButtonUnlock,
  LoginCartContent,
};
