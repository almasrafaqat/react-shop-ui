export const ProductReducer = (state, action) => {
  switch (action.type) {
    // Products API
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

    // Get Search Query Products
    case "SEARCH_PRODUCT_LOADING":
      return { ...state, searchProductLoading: true };

    case "SET_SEARCH_PRODUCT":
      console.log("searchProduct: ", action.payload);
      return {
        ...state,
        searchProductLoading: false,
        searchProduct: action.payload,
      };
    case "SEARCH_PRODUCT_ERROR":
      return {
        ...state,
        searchProductLoading: false,
        searchProductError: true,
      };

    // Get user Search Value
    case "GET_USER_SEARCH_VALUE":
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    default:
      return state;
  }
};
