import Link from "next/link";
import { ButtonStyled } from "./ButtonStyles";

interface ButtonTypes {
  to: string;
  name: string;
}



const Button = ({ to, name }: ButtonTypes) => {
  return (
    <Link href={to}>
      <ButtonStyled>{name}</ButtonStyled>
    </Link>
  );
};
export default Button;
