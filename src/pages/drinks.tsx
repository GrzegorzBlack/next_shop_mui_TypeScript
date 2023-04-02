import Page2 from "../components/Page2";
import { Product, useProducts } from "../contexts/ProductsProvider";

const Drinks = () => {
  const drinksState: Product[] = useProducts().drinks;

  return <Page2 productsState={drinksState} />;
};

export default Drinks;
