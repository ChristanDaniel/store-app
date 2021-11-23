import styled from 'styled-components'

const MenuButtons = styled.nav`
  display: flex;
  margin: 20px;
  justify-content: space-around;


  button {
    text-transform: capitalize;
    /* text-decoration: none; */
    align-self: center;
    font-size: 14px;
    height: 30px;

    background: #FFFF;
    /* color: #737380; */
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    /* border-radius: 10px; */

    margin-left: 5px;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`

export { MenuButtons }
