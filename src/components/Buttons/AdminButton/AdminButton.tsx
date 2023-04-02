import Link from "next/link";
import { useAdmin } from "../../../contexts/AdminProvider";
import { useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { BoxDropdown, BoxDropdownContent } from "./AdminButtonStyles";

interface ToAdmin {
  to: string;
  toAdmin: string;
}


const AdminButton = ({ to, toAdmin }: ToAdmin) => {
  const dispatchIsLogged = useAdmin().dispatch;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatchIsLogged({ type: "UNLOGGED" });
  };
  return (
    <BoxDropdown>
      <Link href={toAdmin}>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AdminPanelSettingsIcon sx={{ fontSize: 48 }} />
        </IconButton>
      </Link>
      <BoxDropdownContent>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Admin</MenuItem>
          <Link href={to}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Link>
        </Menu>
      </BoxDropdownContent>
    </BoxDropdown>
  );
};
export default AdminButton;
