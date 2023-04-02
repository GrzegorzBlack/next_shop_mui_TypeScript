import Page2 from "../components/Page2";
import { Product, useProducts } from "../contexts/ProductsProvider";

const Spirits = () => {
  const spiritsState: Product[] = useProducts().spirits;

  return <Page2 productsState={spiritsState} />;
};

export default Spirits;
