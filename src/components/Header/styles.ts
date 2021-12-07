import styled from "styled-components";

const Headers = styled.header`
  position: fixed;
  z-index: 1;
  top: 0%;
  width: 100%;
  margin-bottom: 80px;
  background-color: #2d2d2d;
  height: 5rem;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  border-bottom: 3px solid #3498db;
  -webkit-box-shadow: -1px -3px 11px 2px rgba(0,0,0,0.24);
  box-shadow: -1px -3px 11px 2px rgba(0,0,0,0.24);

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

  > svg {
    color: #3498db;
    height: 20px;
    width: 20px;
  }
`;
const NumberCartFavorite = styled.p`
  position: absolute;
  font-size: 12px;
  top: 16px;
  left: 24px;
  color: #fff;
  background: tomato;
  border-radius: 20px;
  padding: 1px 3.5px 1px 3.5px;
`;
const UserMouverOver = styled.div`
  position: absolute;
  display: flex;
  padding-left: 14px;
  flex-direction: column;
  top: 45px;
  height: 120px;
  width: 200px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;

  button {
    transition: 0.2s;

    :hover {
      filter: brightness(0.5);
    }
    color: #3498db;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4px;
    padding-top: 13px;

    svg {
      margin-right: 4px;
      height: 18px;
      width: 18px;
    }
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
