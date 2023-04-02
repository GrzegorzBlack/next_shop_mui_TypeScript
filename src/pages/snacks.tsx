import Page2 from "../components/Page2";
import { Product, useProducts } from "../contexts/ProductsProvider";

const Snacks = () => {
  const snacksState: Product[] = useProducts().snacks;

  return <Page2 productsState={snacksState} />;
};

export default Snacks;
