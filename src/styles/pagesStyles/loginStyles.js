import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const LoginMainWrapper = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const FormBoxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 400px;
  margin-top: 100px;
  padding: 20px;
  border: 2px solid orange;
`;

export const SignUpBoxWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
`;

export const SignUpButton = styled(Button)`
  height: 30px;
  align-self: center;
`;
