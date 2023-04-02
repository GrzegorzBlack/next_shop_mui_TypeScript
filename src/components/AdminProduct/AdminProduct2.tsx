import ListItemText from "@mui/material/ListItemText";
import { AdminListItem, StyledListItemButton } from "./AdminProduct2Styles";
import { ProductActions, Types } from "../../contexts/ProductsProvider";



interface AdminProductInterface {
  id: string | number;
  dispatch: React.Dispatch<ProductActions>;
  name?: string;
  price?: number;
}



export const AdminProduct2 = ({ id, dispatch, name, price }: AdminProductInterface) => {
  const payload = {
    id
  };
  const handleCLick = () => {
    dispatch({ type: Types.Delete, payload });
  };
  return (
    <AdminListItem>
      <ListItemText sx={{ flex: "0 0 170px" }}>{name}</ListItemText>
      <ListItemText sx={{ flex: "0 0 50px" }}>{`${price} zł`}</ListItemText>
      <StyledListItemButton onClick={handleCLick} sx={{ flex: "0 0 130px" }}>
        Delete product
      </StyledListItemButton>
    </AdminListItem>
  );
};
