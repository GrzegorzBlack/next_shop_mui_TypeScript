import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export const ImageBoxWrapper = styled(Box)`
  margin-left: 32px;
  margin-right: 32px;
`;

export const MenuBoxWrapper = styled(Box)`
  margin-left: 32px;
  margin-right: 32px;
  display: { xs: "flex", md: "none" };
`;

export const HeaderButtonsWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderIconsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const HeaderButton = styled(Button)`
  display: block;
  margin: 16px 0px;
  background-color: #ffc93c;
  border-color: #ffc93c;
`;

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #f4f4f4;
  margin-right: 60px;
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

export const PriceBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
`;
