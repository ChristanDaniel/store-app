import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background: #000;
  display: flex;
  color: white;
  flex-direction: column;
  align-items:center;
  padding-top: 18px;
  -webkit-box-shadow: -1px -3px 11px 2px rgba(0,0,0,0.24);
  box-shadow: -1px -3px 11px 2px rgba(0,0,0,0.24);
  border-top: 2px solid #3498db;
`;

const SecurityAndPayment= styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1100px;
  h1 {
    margin-left: 8px;
  }
`

const PaymentMethod = styled.div`
  display:flex;
  flex-direction: row;
  gap: 8px


  h1 {
    margin-left: 8px;
  }
`

const Security = styled.div`
  display:flex;
  flex-direction: row;

  gap: 20px
`

const SocialsRede = styled.div`
  margin-left: 30px;

  svg {
    height: 48px;
    width: 48px;
  }

 #social-icon{
   margin: 10px;
   cursor: pointer;

   :hover {
     opacity: 0.8;
   }
 }
`

export { Footer, PaymentMethod, SecurityAndPayment, Security, SocialsRede};
