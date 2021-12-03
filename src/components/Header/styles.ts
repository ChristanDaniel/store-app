import styled from 'styled-components'

const Headers = styled.header`
  background-color: #121214;
  height: 5rem;
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  border-bottom: 1px solid #3498db;

  h1 {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid #3498db;
  }

  span {
    color: #3498db;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      padding-right: 28px;
      /* padding-left: 18px; */
      border-right: 1px solid #3498db;
    }

    button {
      svg {
        margin-left: 28px;
        color: #3498db;
        height: 20px;
        width: 20px;
      }

    }
  }

`

const UserContentFromHeader = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  svg {
    color: #fff;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  p {
    font-size: 14px;
  }
  span {
    color: #909090;
    font-size: 12px;
  }
`;

const ButtonCartFavorite = styled.button`
  position: relative;
  display: flex;
  text-transform: capitalize;
  /* text-decoration: none; */
  align-self: center;
  font-size: 14px;
  height: 30px;

  background: transparent;
  /* color: #737380; */
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;

  margin-left: 5px;

  cursor: pointer;
  border: 0;

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }

  svg {
    color: #3498db;
    height: 20px;
    width: 20px;
  }
`;
export { Headers, ButtonCartFavorite }
