import { useState } from "react";
import { useCart, CartTypes } from "../contexts/CartProvider";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import ProductDialog from "./Modals/ProductDialog";
import { Product } from "../contexts/ProductsProvider";
import { GridCellParams } from '@mui/x-data-grid';

interface Props {
  productsState: Product[];
};

const Page = ({ productsState }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const { dispatch } = useCart();

  const handleCellCLick = (param: any, event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const handleRowCLick = (param: any, event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, cellValues: GridCellParams) => {
    console.log(cellValues);
    setShowModal(true);
    setName(cellValues.row.col1);
    const id: string = cellValues.row.id;
    const { category } = productsState[0];
    const name: string = cellValues.row.col1;
    const price: number = cellValues.row.col2.slice(0, -3);

    const payload = {
      id,
      category,
      name,
      price
    };

    dispatch({ type: CartTypes.AddProduct, payload });
  };

  const columns = [
    { field: "col1", headerName: "Product name", width: 160 },
    { field: "col2", headerName: "Product price", type: "number", width: 160 },
    {
      field: "col3",
      headerName: "Click to Buy",
      width: 150,
      type: "number",
      renderCell: (cellValues: GridCellParams) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Buy
          </Button>
        );
      },
    },
  ];

  const rowz = productsState.map((product) => ({
    id: `${product.id}`,
    col1: `${product.name}`,
    col2: `${product.price} zł`,
  }));

  return (
    <div style={{ height: "600px", width: "550px", marginLeft: "100px" }}>
      <DataGrid
        rows={rowz}
        columns={columns}
        onCellClick={handleCellCLick}
        onRowClick={handleRowCLick}
      />

      {showModal ? (
        <ProductDialog
          onClose={() => setShowModal(false)}
          show={showModal}
          productName={name}
        />
      ) : null}
    </div>
  );
};

export default Page;
