import axios from "axios";
import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import categoryReducer from "../reducer/categoryReducer";

export const CategoryContext = createContext();

const api = "https://dummyjson.com/products/categories";

export const CategoryContextProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    categories: [],
    categoryWiseProduct: [],
    categoryFilterProducts: [],
    productByCatLoading: false,
    productByCatLoadingError: false,
    sorting_value: "lowest",
    filters: {
      brand: "all",
      rating: "all",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
    },
  };
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const getProductByCategory = async (url) => {
    dispatch({ type: "PRODUCT_BY_CATEGORY_LOADING" });

    try {
      const response = await axios.get(url);
      const fetcProductsByCategory = await response.data.products;

      dispatch({
        type: "SET_PRODUCT_BY_CATEGORY",
        payload: fetcProductsByCategory,
      });
    } catch (error) {
      dispatch({ type: "PRODUCT_BY_CATEGORY_ERROR" });
    }
  };

  //get sorting ASC,DESC values
  const Sorting = (event) => {
    let userVal = event.target.value;
    dispatch({ type: "GET_SORTING_VALUE", payload: userVal });
  };

  // get events value and name
  const getFilterCatValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "GET_FILTER_CAT_VALUE", payload: { name, value } });
  };

  //clear category filters
  const clearCategoryFilters = () => {
    dispatch({ type: "CLEAR_CATEGORY_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "GET_SORTING_PRODUCTS" });
    dispatch({ type: "GET_FILTERED_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  // Get API Categories Data

  const getCategories = async (url) => {
    dispatch({ type: "CATEGORY_API_LOADING" });
    try {
      const res = await axios.get(url);
      const categories = await res.data;
      dispatch({ type: "SET_CATEGORY_API", payload: categories });
    } catch (error) {
      dispatch({ type: "CATEGORY_API_ERROR" });
    }
  };

  useEffect(() => {
    getCategories(api);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        ...state,
        getProductByCategory,
        Sorting,
        getFilterCatValue,
        clearCategoryFilters,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
