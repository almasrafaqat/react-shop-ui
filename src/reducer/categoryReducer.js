const categoryReducer = (state, action) => {
    switch (action.type) {
        case "CATEGORY_API_LOADING":
            return { ...state, isLoading: true };
        case "SET_CATEGORY_API":
            return { ...state, isLoading: false, categories: action.payload }
        case "CATEGORY_API_ERROR":
            return { ...state, isLoading: false, isError: true }

        // Product By Category

        case "PRODUCT_BY_CATEGORY_LOADING":
            return { ...state, productByCatLoading: true };
        case "SET_PRODUCT_BY_CATEGORY":
            return { ...state, productByCatLoading: false, categoryWiseProduct: action.payload };
        case "PRODUCT_BY_CATEGORY_ERROR":
            return { ...state, productByCatLoadingError: true, productByCatLoading: false };

        default: return state;

    }
}


export default categoryReducer;