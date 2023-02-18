import { createContext, useContext } from "react";


export const FilterContext = createContext();


export const FilterContextProvider = ({children}) => {
    
    return <FilterContext.Provider></FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext);
}