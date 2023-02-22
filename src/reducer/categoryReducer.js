const categoryReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_API_LOADING":
      return { ...state, isLoading: true };
    case "SET_CATEGORY_API":
      return { ...state, isLoading: false, categories: action.payload };
    case "CATEGORY_API_ERROR":
      return { ...state, isLoading: false, isError: true };

    // Product By Category

    case "PRODUCT_BY_CATEGORY_LOADING":
      return { ...state, productByCatLoading: true };
    case "SET_PRODUCT_BY_CATEGORY":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        productByCatLoading: false,
        categoryFilterProducts: [...action.payload],
        categoryWiseProduct: [...action.payload],
        
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "PRODUCT_BY_CATEGORY_ERROR":
      return {
        ...state,
        productByCatLoadingError: true,
        productByCatLoading: false,
      };

    case "GET_SORTING_PRODUCTS":
      let newSortData;

      const { categoryWiseProduct, sorting_value } = state;
      let tempSortProduct = [...categoryWiseProduct];

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

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        categoryFilterProducts: newSortData,
      };

    // getFiltered PRoducts
    case "GET_FILTERED_PRODUCTS":
      const { brand, rating, price } = state.filters;
      const { categoryFilterProducts } = state;
      let tempFilteredProducts = [...categoryFilterProducts];

      if (brand !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (curElem) => curElem.brand === brand
        );
      }

      if (rating !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (curElem) => curElem.rating >= rating
        );
      }
      if (price === 0) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilteredProducts = tempFilteredProducts.filter(
          (curElem) => curElem.price <= price
        );
      }
      return { ...state, categoryFilterProducts: tempFilteredProducts };

    // get Sorting Value
    case "GET_SORTING_VALUE":
      return { ...state, sorting_value: action.payload };

    //get events value and name
    case "GET_FILTER_CAT_VALUE":
      let { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    //clear category filters
    case "CLEAR_CATEGORY_FILTERS":
      return {
        ...state,
        filters: {
          brand: "all",
          rating: "all",
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
          maxPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default categoryReducer;
