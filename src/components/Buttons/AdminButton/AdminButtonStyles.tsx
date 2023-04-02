import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const BoxDropdown = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
  "&:hover .css-1x07gue": {
    display: "block",
  },
}));

export const BoxDropdownContent = styled(Box)`
  width: auto;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
