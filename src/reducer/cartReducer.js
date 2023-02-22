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

    // Cart Item total
    case "CART_ITEM_TOTAL":
      const CartItem = state.cart.reduce((initialValue, curItem) => {
        let { amount } = curItem;
        initialValue = initialValue + amount;
        return initialValue;
      }, 0);

      return { ...state, totalItem: CartItem };

    // CART TOTAL PRICE
    case "CART_TOTAL_PRICE":
      const CartTotalPrice = state.cart.reduce((initialValue, curElem) => {
        let { price, amount } = curElem;
        initialValue = initialValue + amount * price;
        return initialValue;
      }, 0);
      return { ...state, totalAmount: CartTotalPrice };
    default:
      return state;
  }
};

export default CartReducer;
