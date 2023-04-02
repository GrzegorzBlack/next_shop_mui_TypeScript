import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import PersonIcon from "@mui/icons-material/Person";
import { ButtonStyled, BoxDropdown } from "./Button/ButtonStyles";
import IconButton from "@mui/material/IconButton";
import { Route } from "./CartIconButton";



const UserButton = ({ to }: Route) => {
  return (
    <BoxDropdown>
      <Link href={to}>
        <IconButton>
          <PersonIcon sx={{ fontSize: 48 }} />
        </IconButton>
        {/* </ButtonStyled> */}
      </Link>
    </BoxDropdown>
  );
};
export default UserButton;
