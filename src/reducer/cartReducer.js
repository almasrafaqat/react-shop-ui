const CartReducer = (state, action) => {
  switch (action.type) {
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
      return { ...state, cart: [...state.cart, cartProduct] };
    default:
      return state;
  }
};

export default CartReducer;
