import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ButtonStyled = styled("a")`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: none;
  font-size: 20px;
  background-color: inherit;
  :hover {
    cursor: pointer;
    border: 2px solid black;
  }
`;

export const BoxDropdown = styled(Box)`
  position: relative;
  display: inline-block;
`;
