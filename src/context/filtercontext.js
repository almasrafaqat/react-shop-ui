import { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "../reducer/filterReducer";
import { useProductContext } from "./productcontext";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const initialState = {
    filterProductLoading: false,
    filterProductError: false,
    all_products: [],
    filter_products: [],
    sorting_value: "lowest",
    filters: {
      category: "all",
      brand: "all",
      rating: "all",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
    },
  };

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  // sorting the value from dropdown
  const sorting = (event) => {
    let userVal = event.target.value;
    dispatch({ type: "GET_SORTING_VALUE", payload: userVal });
  };

  // update filter value

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "GET_SORTING_PRODUCTS" });
    dispatch({ type: "GET_FILTERED_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  //Loading Products into filter reducer
  useEffect(() => {
    dispatch({ type: "FILTER_LOADING" });
    try {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "FILTER_ERROR" });
    }
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
