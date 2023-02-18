export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return { ...state, isLoading: true };

    case "API_SET_PRODUCTS":
      const getUniqeCategory = (data) => {
        let newVal = data.map((curElem) => {
          return curElem.category;
        });
        return (newVal = [...new Set(newVal)]);
      };
      const categoryOnlyData = getUniqeCategory(action.payload);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        productCategory: categoryOnlyData,
      };

    case "API_ERROR":
      return { ...state, isError: true, isLoading: false };

    //Single Product
    case "SET_SINGLE_PRODUCT_LOADING":
      return { ...state, singleProductLoading: true };

    case "API_SET_SINGLE_PRODUCTS":
      return {
        ...state,
        singleProductLoading: false,
        SingleProduct: action.payload,
      };

    case "SET_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isError: true,
        singleProductLoading: false,
      };
    default:
      return state;
  }
};
