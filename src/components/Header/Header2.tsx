import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import {
  HeaderButton,
  ImageBoxWrapper,
  MenuBoxWrapper,
  HeaderButtonsWrapper,
  HeaderIconsWrapper,
  PriceBox,
} from "./Header2Styles";
import MenuItem from "@mui/material/MenuItem";
import CartButton from "../Buttons/CartIconButton";
import UserButton from "../Buttons/LoginButton";
import AdminButton from "../Buttons/AdminButton/AdminButton";
import UserLoggedButton from "../Buttons/UserIconButon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAdmin } from "../../contexts/AdminProvider";
import { useUser } from "../../contexts/UserProvider";
import { useCart, CartProduct } from "../../contexts/CartProvider";
import Image from "next/image";

const pages = ["snacks", "drinks", "spirits"];


type Product = {
  id: number;
  category: string;
  name: string;
  price: number;
  quantity: number;
}



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { pathname } = useRouter();

  const stateOfAdmin = useAdmin().state;

  const stateOfUser = useUser().state;

  const cartState = useCart();

  const { isLogged } = stateOfUser;

  const whatIcon = () => {
    if (stateOfAdmin) {
      return <AdminButton to={"/login"} toAdmin={"/admin"} />;
    } else if (isLogged) {
      return <UserLoggedButton to={"/login"} />;
    } else {
      return <UserButton to={"/login"} />;
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const allProducts: [string, CartProduct][] = Object.entries(cartState.state);

  const totalCartValue = allProducts.reduce(
    (prev, next) => prev + next[1].price * next[1].quantity,
    0
  );

  return (
    <AppBar position="static">
      <ImageBoxWrapper>
        <Toolbar disableGutters>
          <div>
            <Link href={isLogged ? "/snacks" : "/"}>
              <Image src="/Frame1.png" alt="me" width="220" height="100" />
            </Link>
          </div>

          <MenuBoxWrapper>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: "flex",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/${page.toUpperCase()}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </MenuBoxWrapper>
          <HeaderButtonsWrapper>
            {pages.map((page) => (
              <HeaderButton
                key={page}
                variant="contained"
                onClick={handleCloseNavMenu}
                disabled={
                  pathname === "/" ||
                    pathname === "/login" ||
                    pathname === "/register"
                    ? true
                    : false
                }
              >
                <Link href={`/${page}`}>{page}</Link>
              </HeaderButton>
            ))}
          </HeaderButtonsWrapper>
          <Box
            sx={{
              width: "400px",
            }}
          ></Box>
          <HeaderIconsWrapper>
            {totalCartValue > 0 ? (
              <PriceBox>
                <Typography sx={{ borderColor: "black" }}>
                  {`${totalCartValue} PLN`}
                </Typography>
              </PriceBox>
            ) : (
              <PriceBox sx={{ visibility: "hidden" }}>
                <Typography sx={{ borderColor: "black" }}>
                  {`${totalCartValue} PLN`}
                </Typography>
              </PriceBox>
            )}

            <CartButton to={"/cart"} />
            {whatIcon()}
          </HeaderIconsWrapper>
        </Toolbar>
      </ImageBoxWrapper>
    </AppBar>
  );
}
export default ResponsiveAppBar;
