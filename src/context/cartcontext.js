import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const getCartData = () => {
    let newCartData = localStorage.getItem("cart");
    if (newCartData == []) {
      return [];
    } else {
      return JSON.parse(newCartData);
    }
  };
  const initialState = {
    cart: getCartData(),
    cartLoading: false,
    cartError: false,
    totalItem: 0,
    totalAmount: 0,
    shippingFee: 5,
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

  //Total Cart Item
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Increase Cart Quanitity
  const setIncrease = (id) => {
    dispatch({ type: "SET_CART_INCREAMENT", payload: id });
  };

  // Descrease Cart Quanitity
  const setDecrease = (id) => {
    dispatch({ type: "SET_CART_DECREAMENT", payload: id });
  };

  // Delete Item Cart

  const setRemove = (id) => {
    dispatch({ type: "SET_CART_DELETE", payload: id });
  };
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, setIncrease, setDecrease, setRemove }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
