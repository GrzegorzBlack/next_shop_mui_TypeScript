import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const FormPageWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1200px;
  height: 600px;
`;

export const LoginTextField = styled(TextField)`
  margin-top: 20px;
  width: 100%;
`;

export const MainPageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1200px;
  height: 600px;
`;

export const PasswordBoxWrapper = styled(Box)`
  margin-top: 30px;
`;

export const PasswordIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
`;

export const LogInButton = styled(Button)`
  width: 100px;
  margin-top: 20px;
`;

export const HeaderTypography = styled(Typography)({
  padding: "0 50px 0 20px",
});

export const HeaderIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #ffffff;
  border-radius: 0;
  background-color: #030303;
  :active {
    background-color: #0000ff;
  }
`;
