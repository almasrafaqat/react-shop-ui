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
        categoryWiseProduct: {},
        productByCatLoading: false,
        productByCatLoadingError: false,

    }
    const [state, dispatch] = useReducer(categoryReducer, initialState);

    const getCategories = async (url) => {
        dispatch({ type: "CATEGORY_API_LOADING" })
        try {
            const res = await axios.get(url);
            const categories = await res.data;
            dispatch({ type: "SET_CATEGORY_API", payload: categories });
        } catch (error) {
            dispatch({ type: "CATEGORY_API_ERROR" })
        }


        // console.log(categories);
    }

    const getProductByCategory = async (url) => {
        dispatch({ type: "PRODUCT_BY_CATEGORY_LOADING" });

        try {
            const response = await axios.get(url);
            const fetcProductsByCategory = response.data;
            
            dispatch({ type: "SET_PRODUCT_BY_CATEGORY", payload: fetcProductsByCategory })
        } catch (error) {
            dispatch({ type: "PRODUCT_BY_CATEGORY_ERROR" })
        }
    }

    useEffect(() => {
        getCategories(api);
    }, [])
    return <CategoryContext.Provider value={{ ...state, getProductByCategory }}>{children}</CategoryContext.Provider>
}


export const useCategoryContext = () => {
    return useContext(CategoryContext);
}