import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export const MainPageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1200px;
  height: 600px;
`;

export const WelcomeWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  height: 200px;
`;

export const WelcomeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ORBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 160px;
`;

export const OptionsBoxWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 600px;
  width: auto;
`;

export const OptionsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 300px;
  border: 2px solid orange;
`;

export const OptionsButton = styled(Button)`
  height: 40px;
  width: 90px;
`;

export const HeaderTypography = styled(Typography)({
  padding: "0 50px 0 20px",
});

export const HeaderDiv = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;

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
