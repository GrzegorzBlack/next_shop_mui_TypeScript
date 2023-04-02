import { useFormik } from "formik";

import { useProducts, Types, Product } from "../../contexts/ProductsProvider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { StyledForm } from "./FormStyles";


interface Values {
  name: string;
  price: string;
  category: string;
}



export const Form = () => {
  const dispatchSnacks = useProducts().dispatch;
  const stateSnack = useProducts().snacks;

  const dispatchDrinks = useProducts().dispatch;
  const stateDrink = useProducts().drinks;

  const dispatchSpirits = useProducts().dispatch;
  const stateSpirit = useProducts().spirits;

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  const dispachCategory = {
    Snacks: dispatchSnacks,
    Drinks: dispatchDrinks,
    Spirits: dispatchSpirits,
  };

  const stateToMap = {
    Snacks: stateSnack,
    Drinks: stateDrink,
    Spirits: stateSpirit,
  };

  const handleSubmit = (values: Values) => {
    const { name, price, category } = values;
    const id = Math.max(...stateToMap[category].map((i: Product) => i.id)) + 1;

    const payload = {
      id,
      category,
      name,
      price,
    };

    dispachCategory[category]({
      type: Types.Create, payload
    });
  };
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        type="text"
        label="Enter product name"
        onChange={formik.handleChange}
        value={formik.values.name}
        required
      />
      <TextField
        id="price"
        name="price"
        type="number"
        label="Enter product price"
        onChange={formik.handleChange}
        value={formik.values.price}
        InputProps={{ inputProps: { min: 1, max: 999 } }}
        required
      />
      <FormControl sx={{ width: "200px" }}>
        <InputLabel>Choose product type</InputLabel>
        <Select
          id="demo-simple-select"
          name="category"
          label="Choose product type"
          onChange={formik.handleChange}
          value={formik.values.category}
          required
        >
          <MenuItem value="Snacks">Snacks</MenuItem>
          <MenuItem value="Drinks">Drinks</MenuItem>
          <MenuItem value="Spirits">Spirits</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">
        Add product
      </Button>
    </StyledForm>
  );
};
