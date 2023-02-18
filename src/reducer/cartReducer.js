const CartReducer = (state, action) => {
  switch (action.type) {
    case "CART_LOADING":
      return { ...state, cartLoading: true };
    case "ADD_TO_CART":
      let { id, amount, product } = action.payload;

      let cartProduct;
      cartProduct = {
        id: id,
        amount: amount,
        name: product.title,
        price: product.price,
        stock: product.stock,
        image: product.thumbnail,
        brand: product.brand,
        discount: product.discountPercentage,
        rating: product.rating,
        category: product.category,
      };
      return {
        ...state,
        cartLoading: false,
        cart: [...state.cart, cartProduct],
      };
    case "CART_ERROR":
      return { ...state, cartLoading: false, cartError: true };
    default:
      return state;
  }
};

export default CartReducer;
