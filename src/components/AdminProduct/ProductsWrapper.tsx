import { AdminProduct2 } from "./AdminProduct2";
import List from "@mui/material/List";

import { Product, ProductActions } from "../../contexts/ProductsProvider";

import {
    AdminPageWrapper,
    ListBoxWrapper,
    StyledBoxWrapper,
    AdminFormWrapper,
    ListBox,
} from "../../styles/pagesStyles/adminStyle";


type Payload = {
    type: "LOGGED" | "UNLOGGED";
    payload: boolean;
}


interface ProductsWrapType {
    items: Product[];
    dispatchProduct: React.Dispatch<ProductActions>;
}


export const ProductsWrapper = ({ items, dispatchProduct }: ProductsWrapType) => {

    const renderedProducts = items.map((product) => (
        <AdminProduct2
            key={product.id + product.category}
            dispatch={dispatchProduct}
            {...product}
        />
    ));

    return (
        <ListBox>
            <ListBoxWrapper>
                <List>{renderedProducts}</List>
            </ListBoxWrapper>
        </ListBox>
    );
};