import { useReducer, createContext, useContext, Dispatch } from "react";

const products = [
  {
    id: 1,
    category: "Drinks",
    name: "Coca-Cola",
    price: 3,
  },
  {
    id: 2,
    category: "Drinks",
    name: "Pepsi",
    price: 3,
  },
  {
    id: 3,
    category: "Drinks",
    name: "Oranżada Czerwona",
    price: 4,
  },
  {
    id: 4,
    category: "Snacks",
    name: "Orzeszki solone",
    price: 8,
  },
  {
    id: 5,
    category: "Snacks",
    name: "Batonik Mars",
    price: 3,
  },
  {
    id: 6,
    category: "Snacks",
    name: "Paluszki słone",
    price: 5,
  },
  {
    id: 7,
    category: "Spirits",
    name: "Giness",
    price: 10,
  },
  {
    id: 8,
    category: "Spirits",
    name: "Mohito Drink",
    price: 6,
  },
  {
    id: 9,
    category: "Spirits",
    name: "Perła Chmielowa",
    price: 4,
  },
];


export interface Product {
  id: number | string;
  category: string;
  name: string;
  price: number;
}

// interface ProviderValue {
//   snacks: Product[];
//   drinks: Product[];
//   spirits: Product[];
//   dispatch: Product[];
// }





// interface ACTIONTYPE extends Product {
//   type: "CREATE_PRODUCT" | "DELETE_PRODUCT"
// };

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  }
};


export enum Types {
  Create = 'CREATE_PRODUCT',
  Delete = 'DELETE_PRODUCT'
}

type ProductPayload = {
  [Types.Create]: {
    id: number | string;
    category: string;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number | string;
  }
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

const ProductsContext = createContext<{ snacks: Product[], drinks: Product[], spirits: Product[]; dispatch: Dispatch<ProductActions>; }>({
  snacks: [],
  drinks: [],
  spirits: [],
  dispatch: () => null
});

const productsReducer = (state: Product[], action: ProductActions): any => {
  switch (action.type) {
    // case "SHOW_SNACKS":
    //   return state;
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id + action.payload.category,
          category: action.payload.category,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Types.Delete:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      throw new Error("Something went wrong!");
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, products);

  const snacks: Product[] = state.filter((item: Product) => item.category === "Snacks");
  const drinks: Product[] = state.filter((item: Product) => item.category === "Drinks");
  const spirits: Product[] = state.filter((item: Product) => item.category === "Spirits");

  return (
    <ProductsContext.Provider value={{ snacks, drinks, spirits, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
