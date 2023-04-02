import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import useLocalStorage from "../utility/localStorageHook";
import validate from "../utility/validate";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import SendIcon from "@mui/icons-material/Send";
import LoginDialog from "../components/Modals/LoginUserDialog/LoginUserDialog";
import {
  LoginMainWrapper,
  FormBoxWrapper,
  SignUpBoxWrapper,
  SignUpButton,
} from "../styles/pagesStyles/loginStyles";

import {
  LoginTextField,
  PasswordBoxWrapper,
  PasswordIconButton,
  LogInButton,
} from "../components/LoginUser/LoginUserStyles";


interface RegisterValues {
  email: string;
  userName: string;
  password: string;
  isLogged: boolean | string;
}



const Register = () => {
  const [name, setName] = useLocalStorage("user", []);
  const [userName, setUserName] = useLocalStorage("");
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const change = (values: RegisterValues) => {
    setShowModal(true);
    setUserName(values.userName);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      isLogged: "false",
    },

    validate,
    onSubmit: (values: RegisterValues) => {
      change(values), setName(name.concat(values));
    },
  });

  return (
    <LoginMainWrapper fixed>
      <FormBoxWrapper>
        <form onSubmit={formik.handleSubmit}>
          <p>Please Register</p>
          <LoginTextField
            variant="outlined"
            id="email"
            name="email"
            type="text"
            label="E-mail Adress"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}{" "}
          <LoginTextField
            variant="outlined"
            id="userName"
            name="userName"
            type="text"
            label="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            sx={{ marginTop: "20px" }}
          />
          {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}{" "}
          <PasswordBoxWrapper>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <PasswordIconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </PasswordIconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </FormControl>
          </PasswordBoxWrapper>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <LogInButton type="submit" variant="contained">
            Register
          </LogInButton>
          <SignUpBoxWrapper>
            <p>Already have an account?</p>
            <Link href="/login">
              <SignUpButton variant="outlined" endIcon={<SendIcon />}>
                Log in
              </SignUpButton>
            </Link>
          </SignUpBoxWrapper>
        </form>
      </FormBoxWrapper>

      {showModal ? (
        <LoginDialog
          onClose={() => setShowModal(false)}
          show={showModal}
          userLogged={userName}
          dialogTextOne={
            "Your account has been created. You can can log in now."
          }
          pushTo={"login"}
        />
      ) : null}
    </LoginMainWrapper>
  );
};

export default Register;
