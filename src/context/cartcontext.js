import { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducer/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
    cartLoading: false,
    cartError: false,
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //add to cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: "CART_LOADING" });
    try {
      dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    } catch (error) {
      dispatch({ type: "CART_ERROR" });
    }
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
