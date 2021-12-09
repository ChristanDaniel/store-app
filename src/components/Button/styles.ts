import styled from "styled-components";

export interface StyledButtonProps {
  $disabled?: boolean;
}

const Buttons = styled.button<StyledButtonProps>`
  margin-top: 16px;
  height: 38px;
  border-radius: 8px;
  font-weight: 500;
  background: ${(props) => (props.$disabled ? "#64a5f050" : "#64a5f0")};
  color: #fff;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${(props) => (props.$disabled ? "unset" : "pointer")};
  border: 0;

  transition: 0.2s;

  :hover {
    ${(props) => {
      if (!props.$disabled) {
        return `filter: brightness(0.9);`;
      }
    }}
  }

  svg {
    margin-right: 3px;
    margin-left: 3px;
    height: 18px;
    width: 18px;
  }
`;

export { Buttons };
