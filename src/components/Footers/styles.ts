import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3 {
    color: #fff
  }
  div {
    /* margin: 0 0 8px 80px; */
  }

  p {
    color: #fff;
    /* margin-bottom: 12px; */
    font-size: smaller;
  }
  a {
    display: flex;
    background: #fff;
    color: inherit;
    text-decoration: underline;
  }

`;

const ContainerRedeSociais = styled.div`
  display: flex;
  flex-direction: column;
`
const ContentRedeSociais = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  div {
    padding: 8px;
    display: flex;
    flex-direction: row;
  }
`

export { Footer, ContainerRedeSociais, ContentRedeSociais };
