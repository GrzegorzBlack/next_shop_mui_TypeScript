import { useReducer, createContext, useContext, Dispatch } from "react";

const cart = {};

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


export enum CartTypes {
  AddProduct = 'ADD_PRODUCT',
  AddQuantity = 'ADD_QUANTITY',
  SubstractQuantity = 'SUBSTRACT_QUANTITY',
  DeleteProduct = 'DELETE_PRODUCT',
  DeleteCart = 'DELETE_CART'
}

export interface CartProduct {
  id: string | number;
  category: string;
  name: string;
  price: number;
  quantity: number;
}

export type Cart = {
  [key: string]: CartProduct;
}


type ProductPayload = {
  [CartTypes.AddProduct]: {
    id: number | string;
    category: string;
    name: string;
    price: number;
  };
  [CartTypes.AddQuantity]:
  number | string;

  [CartTypes.SubstractQuantity]:
  number | string;

  [CartTypes.DeleteProduct]:
  number | string;

  [CartTypes.DeleteCart]: null
}



export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

const CartContext = createContext<{
  state: Cart;
  dispatch: Dispatch<ProductActions>;
}>({
  state: {},
  dispatch: () => null
});

const cartReducer = (state: Cart, action: ProductActions) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const key = action.payload.id + action.payload.category;
      console.log(key);
      if (state[key]) {
        return {
          ...state,
          [key]: {
            ...state[key],
            quantity: state[key].quantity + 1,
          },
        };
      }
      return {
        ...state,
        [key]: {
          id: action.payload.id,
          category: action.payload.category,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        },
      };
    }
    case "ADD_QUANTITY": {
      const key = action.payload;
      console.log(key);
      if (state[key]) {
        return {
          ...state,
          [key]: {
            ...state[key],
            quantity: state[key].quantity + 1,
          },
        };
      }
      return state;
    }
    case "SUBSTRACT_QUANTITY": {
      const key = action.payload;
      console.log(key);
      if (state[key]) {
        if (state[key].quantity > 0) {
          return {
            ...state,
            [key]: {
              ...state[key],
              quantity: state[key].quantity - 1,
            },
          };
        }
        return state;
      }
      return state;
    }
    case "DELETE_PRODUCT": {
      const key = action.payload
      const filteredByKey = Object.fromEntries(
        Object.entries(state).filter(([name]) => name !== key)
      );
      return {
        ...filteredByKey,
      };
    }
    case "DELETE_CART": {
      return {};
    }
    default:
      throw new Error("Something went wrong!");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cart);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
