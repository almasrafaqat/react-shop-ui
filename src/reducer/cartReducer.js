const CartReducer = (state, action) => {
  switch (action.type) {
    case "CART_LOADING":
      return { ...state, cartLoading: true };
    case "ADD_TO_CART":
      let { id, amount, product } = action.payload;

      const existingItem = state.cart.find((curElem) => curElem.id === id);

      if (existingItem) {
        const updateCartItem = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;

            // if cart qty exceeding of stock quantity
            if (newAmount > curElem.stock) {
              newAmount = curElem.stock;
            }
            return { ...curElem, amount: newAmount };
          } else {
            return curElem;
          }
        });

        return {
          ...state,
          cartLoading: false,
          cart: updateCartItem,
        };
      }

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

    case "CART_ITEM_PRICE_TOTAL":
      let { totalItem, totalAmount } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;
          accum.totalItem = accum.totalItem + amount;
          accum.totalAmount = accum.totalAmount + amount * price;
          return accum;
        },
        { totalItem: 0, totalAmount: 0 }
      );
      return { ...state, totalItem, totalAmount };

    // Cart Increament
    case "SET_CART_INCREAMENT":
      let existingQty = state.cart.find(
        (curElem) => curElem.id === action.payload
      );

      if (existingQty) {
        const updateQty = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let newAmount = curElem.amount + 1;
            if (newAmount > curElem.stock) {
              newAmount = curElem.stock;
            }
            return { ...curElem, amount: newAmount };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updateQty };
      }

    // Cart Decreament
    case "SET_CART_DECREAMENT":
      let existingDecQty = state.cart.find(
        (curElem) => curElem.id === action.payload
      );

      if (existingDecQty) {
        const updateDecQty = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let newAmount = curElem.amount - 1;
            if (newAmount <= 1) {
              newAmount = 1;
            }
            return { ...curElem, amount: newAmount };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updateDecQty };
      }

    case "SET_CART_DELETE":
      const updateCartItemToRemove = state.cart.filter((curElem) => {
        return curElem.id !== action.payload;
      });

      return { ...state, cart: updateCartItemToRemove };

    default:
      return state;
  }
};

export default CartReducer;
