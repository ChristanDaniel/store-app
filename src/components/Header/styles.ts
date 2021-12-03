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


export { Headers }
