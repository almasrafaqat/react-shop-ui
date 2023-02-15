export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return { ...state, isLoading: true };

    case "API_SET_PRODUCTS":

      

      return { ...state, isLoading: false, products: action.payload };

    case "API_ERROR":
      return { ...state, isError: true, isLoading: false };
    case "SET_CATEGORIES":
      const getUniqeCategory = (data) => {
        let newVal = data.map((curElem)=>{
          return curElem.category;
        });
        newVal = [new Set(newVal)]
        // console.log("Product REducer", newVal);
      }
      const categoryOnlyData = getUniqeCategory(state.products);
      return {...state, categories: categoryOnlyData}
    default:
      return state;
  }
};
