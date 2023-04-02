import Link from "next/link";
import Button from "@mui/material/Button";
import {
  MainPageWrapper,
  WelcomeWrapper,
  WelcomeBox,
  OptionsBoxWrapper,
  ORBox,
  OptionsBox,
  OptionsButton,
} from "../styles/pagesStyles/indexStyles";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container fixed>
      <MainPageWrapper>
        <WelcomeWrapper>
          <WelcomeBox>
            <h1>Welcome to React Shop!</h1>
            <h2>Choose your buying options:</h2>
          </WelcomeBox>
        </WelcomeWrapper>
        <ORBox>
          <div>
            <h1>OR</h1>
          </div>
        </ORBox>
        <OptionsBoxWrapper>
          <OptionsBox>
            <p>Log in if you already have an account</p>
            <Link href="/login">
              <OptionsButton variant="outlined">Log In</OptionsButton>
            </Link>
            <p>If not click to Register</p>
            <Link href="/register">
              <Button variant="outlined">Register</Button>
            </Link>
          </OptionsBox>
          <OptionsBox>
            <p>Buy without logging </p>
            <Link href="/snacks">
              <Button variant="outlined">Click</Button>
            </Link>
          </OptionsBox>
        </OptionsBoxWrapper>
      </MainPageWrapper>
    </Container>
  );
}
