import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const existingProductToadd = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProductToadd) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

    case REMOVE_PRODUCT:

      const existingProductToRemove = state.products.find(
        (product) => product.id === action.payload.id
      );

      if(existingProductToRemove.quantity > 1) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default productsReducer;