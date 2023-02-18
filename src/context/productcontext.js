import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductReducer } from "../reducer/productReducer";

export const ProductContext = createContext();

const API = "https://dummyjson.com/products";


export const ProductContextProvider = ({ children }) => {
  const initialState = {
    almas: "almas.",
    isLoading: false,
    isError: false,
    products: [],
    productCategory: [],
    SingleProduct :{},
    singleProductLoading: false,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "API_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data.products;
      dispatch({ type: "API_SET_PRODUCTS", payload: products });

    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" })
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "API_SET_SINGLE_PRODUCTS", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_PRODUCT_ERROR" })
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
