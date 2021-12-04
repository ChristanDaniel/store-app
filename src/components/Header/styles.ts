import styled from "styled-components";

const Headers = styled.header`
  /* position: fixed;
  top: 0%;
  width: 100%; */
  background-color: #2d2d2d;
  height: 5rem;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  border-bottom: 3px solid #3498db;

  h1 {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid #3498db;
  }

  span {
    color: #3498db;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    color: #fff;
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
  }
`;

const ButtonArrowUser = styled.button``;

const UserContent = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 19px;
  /* padding-left: 18px; */
  border-right: 1px solid #3498db;
  cursor: pointer;

  svg {
    color: #3498db;
    height: 18px;
    width: 18px;
  }
`;

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

const BorderLeft = styled.div`
  height: 35px;
  border-right: 1px solid #3498db;
`;

const ButtonCartFavorite = styled.div`
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
  border-radius: 15px;

  margin-left: 5px;

  cursor: pointer;
  border: 0;

  transition: 0.2s;
  /*
  :hover {
    filter: brightness(0.9);
  }
  border-right: 3px solid #3498db; */

  > svg {
    color: #3498db;
    height: 20px;
    width: 20px;
  }
`;


const SvgHeader = styled.div`
  display: flex;
  align-items: center;

  h1 {
    cursor: pointer;
  }

  svg {
    height: 50px;
    width: 50px;
  }
`;

export {
  Headers,
  UserContainer,
  UserContent,
  UserContentFromHeader,
  ButtonCartFavorite,
  UserMouverOver,
  BorderLeft,
  ButtonArrowUser,
  NumberCartFavorite,
  SvgHeader,
};
