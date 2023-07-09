export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};

export const decrement = (product, id) => {
  return {
    type: "DECREMENT",
    payload: {
      product: product,
      productId: id,
    }
  };
};

export const increment = (product, id) => {
  return {
    type: "INCREMENT",
    payload: {
      product: product,
      productId: id,
    }
  };
};

const initialState = { cartItems: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity +1,
            };
          }
          return item;
        });

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      }

      case "DECREMENT":
        const prodID = action.payload.productId

        const decreaseCartItems = state.cartItems.map((item) => {
          if (item.id === prodID && item.quantity >= 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
  
        return {
          ...state,
          cartItems: decreaseCartItems.filter((item) => item.quantity > 0),
        };

        case "INCREMENT":

        const itemId = action.payload.productId

          const increaseCartItems = state.cartItems.map((item) => {
            if (item.id === itemId && item.quantity >= 1) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          });
    
          return {
            ...state,
            cartItems: increaseCartItems.filter((item) => item.quantity > 0),
          };
  
      default:
        return state;
    }
  
};


export default cartReducer;
