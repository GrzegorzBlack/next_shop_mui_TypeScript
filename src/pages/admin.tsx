import List from "@mui/material/List";

import { AdminProduct2 } from "../components/AdminProduct/AdminProduct2";
import { ProductsWrapper } from "../components/AdminProduct/ProductsWrapper";
import { useProducts } from "../contexts/ProductsProvider";
import { Form } from "../components/Form/Form";
import { useState, Dispatch } from "react";
import {
  AdminPageWrapper,
  ListBoxWrapper,
  StyledBoxWrapper,
  AdminFormWrapper,
  ListBox,
} from "../styles/pagesStyles/adminStyle";
import LoginDialog from "../components/Modals/LoginUserDialog/LoginUserDialog";

const Admin = () => {
  const [open, setOpen] = useState(true);

  const snacksState = useProducts().snacks;
  const dispatchSnacks = useProducts().dispatch;

  const drinksState = useProducts().drinks;
  const dispatchDrinks = useProducts().dispatch;

  const spiritsState = useProducts().spirits;
  const dispatchSpirits = useProducts().dispatch;

  // const ProductsWrapper = ({ items, dispatchProduct }: { items: Product[], dispatchProduct: Dispatch<ProductActions> }) => {

  //   const renderedProducts = items.map((product) => (
  //     <AdminProduct2
  //       key={product.id + product.category}
  //       dispatch={dispatchProduct}
  //       {...product}
  //     />
  //   ));

  //   return (
  //     <ListBox>
  //       <ListBoxWrapper>
  //         <List>{renderedProducts}</List>
  //       </ListBoxWrapper>
  //     </ListBox>
  //   );
  // };

  return (
    <>
      <AdminPageWrapper>
        <ProductsWrapper items={snacksState} dispatchProduct={dispatchSnacks} />
        <ProductsWrapper items={drinksState} dispatchProduct={dispatchDrinks} />
        <ProductsWrapper
          items={spiritsState}
          dispatchProduct={dispatchSpirits}
        />
        <StyledBoxWrapper>
          <AdminFormWrapper>
            <Form />
          </AdminFormWrapper>
        </StyledBoxWrapper>
      </AdminPageWrapper>
      <LoginDialog
        onClose={() => setOpen(false)}
        show={open}
        userLogged={"Admin"}
        dialogTextOne={"After you finish you work, please remember to logout."}
      />
    </>
  );
};

export default Admin;
