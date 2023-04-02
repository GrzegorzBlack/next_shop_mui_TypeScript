import Link from "next/link";
import { LoginUser } from "../components/LoginUser/LoginUser";
import SendIcon from "@mui/icons-material/Send";
import {
  LoginMainWrapper,
  FormBoxWrapper,
  SignUpBoxWrapper,
  SignUpButton,
} from "../styles/pagesStyles/loginStyles";

const Login = () => {
  return (
    <LoginMainWrapper fixed>
      <FormBoxWrapper>
        <LoginUser />
        <SignUpBoxWrapper>
          <p>You do not have an account?</p>
          <Link href="/register">
            <SignUpButton variant="outlined" endIcon={<SendIcon />}>
              Sing up
            </SignUpButton>
          </Link>
        </SignUpBoxWrapper>
      </FormBoxWrapper>
    </LoginMainWrapper>
  );
};

export default Login;
