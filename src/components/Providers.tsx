import React, { FC, ReactElement } from 'react';
import CartProvider from "../contexts/CartProvider";
import ProductsProvider from "../contexts/ProductsProvider";
import AdminProvider from "../contexts/AdminProvider";
import UserProvider from "../contexts/UserProvider";

type Props = {
  children: ReactElement
}


const Providers: FC<Props> = (props) => {
  return (
    <AdminProvider>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>{props.children}</CartProvider>
        </ProductsProvider>
      </UserProvider>
    </AdminProvider>
  );
};

export default Providers;
