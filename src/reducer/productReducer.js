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
        categories: categoryOnlyData,
      };

    case "API_ERROR":
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};
