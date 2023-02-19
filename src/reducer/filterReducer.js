const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_LOADING":
      return { ...state, filterProductLoading: true };
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProductLoading: false,
        all_products: [...action.payload],
        filter_products: [...action.payload],
      };
    case "FILTER_ERROR":
      return {
        ...state,
        filterProductLoading: false,
        filterProductError: true,
      };
    // GET SORTING VALUE EVENT
    case "GET_SORTING_VALUE":
      return { ...state, sorting_value: action.payload };

    // GET SORTING PRODUCTS
    case "GET_SORTING_PRODUCTS":
      let newSortData;
      const { all_products, sorting_value } = state;
      let tempFilterProducts = [...all_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.title.localeCompare(b.title);
        }

        if (sorting_value === "z-a") {
          return b.title.localeCompare(a.title);
        }
      };

      newSortData = tempFilterProducts.sort(sortingProducts);

      return { ...state, filter_products: newSortData };

    //Update Filter Value
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    //Filtered Products
    case "GET_FILTERED_PRODUCTS":
      const { filter_products } = state;
      let tempFilterProduct = [...filter_products];

      const { category, brand, rating, price } = state.filters;

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (brand !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.brand === brand
        );
      }

      if (rating !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.rating >= rating
        );
      }

      return { ...state, filter_products: tempFilterProduct };

    default:
      return state;
  }
};

export default FilterReducer;
