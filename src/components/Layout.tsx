import { FC, ReactElement } from 'react';
import Header2 from "./Header/Header2";


type Props = {
  children: ReactElement
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header2 />
      {children}
    </>
  );
};

export default Layout;
