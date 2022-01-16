import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
`

const HeadModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 20px;
    color: #fff;
    background: #64a5f0;
    padding: 8px;
    border-radius: 6px;
  }

  button {
    display: flex;
    align-items: center;

    border-radius: 8px;
    background: #64a5f0;
    color: #fff;
    padding: 10px;

    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }

  svg {
    height: 18px;
    width: 18px;
  }
`

const BodyModalContent = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  overflow: auto;
  margin-top: 8px;
  background: #dcdcdc;

  h4 {
    font-size: 13px;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }
`

const ProductDivContent = styled.div`
  max-height: 70px;
  background: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 16px;

  img {
    margin-right: 10px;
    height: 45px;
    width: 60px;
  }

  h4 {
    color: #3a383e;
    font-size: 14px;
    max-width: 270px;
  }

  button {
    border-radius: 8px;
    color: #8b0000;

    cursor: pointer;
    border: 0;

    transition: 0.3s;

    :hover {
      filter: brightness(0.9);
    }
  }
`

const AmountProductContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 510px;
  justify-content: flex-end;

  p {
    display: flex;
    margin-right: 14px;
    color: #006400;
    text-align: bold;
  }

  button {
    display: flex;
    align-items: center;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`

const NoValueCart = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  svg {
    margin: 10px;
    height: 100px;
    width: 100px;
  }
`

const FooterModalContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    h2 {
      color: #006400;
    }
  }
`

export { ModalContainer, HeadModalContent, BodyModalContent, NoValueCart, ProductDivContent, AmountProductContent, FooterModalContent }
