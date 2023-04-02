import { KeyboardEvent, ReactElement } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogBox } from "./LoginUserDialog/LoginUserDialogStyles";

import { Typography } from "@mui/material";


interface DialogType {
  show?: boolean;
  onClose?: () => void;
  productName?: string;
}


const ProductDialog = ({ show, onClose, productName }: DialogType) => {

  const handleCloseClick = (): void => {
    onClose();
  };

  const keyPress = (e?: KeyboardEvent<HTMLDivElement>) => {
    if (e.key == 'Enter') {
      onClose();
    }
  };
  return (
    <Dialog open={show} onKeyPress={keyPress}>
      <DialogContent sx={{ fontSize: "20px" }}>
        <DialogBox>
          {"You added  "}
          <Typography
            display="inline"
            sx={{ fontSize: "20px", margin: "0 6px" }}
          >
            {`"${productName}"`}
          </Typography>
          {"  to your cart."}
        </DialogBox>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="outlined" onClick={handleCloseClick}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
