import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";

export const DialogStyled = styled(Dialog)`
  border: 1px solid blue;
  background-color: green;
`;

export const DialogBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const LogInButton = styled(Button)`
  width: 100px;
  margin-top: 20px;
`;

export const TypographyStyled = styled(Typography)`
  font-size: 30px;
  color: #1976d2;
  margin-left: 15px;
`;

export const DialogTextStyled = styled(DialogContentText)`
  paddint-top: 16px;
  color: black;
`;
