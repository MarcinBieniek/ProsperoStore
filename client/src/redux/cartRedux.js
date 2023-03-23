// selectors
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;
export const getTotalPrice = ({cart}) => cart.products.reduce((total, product) => total + (product.price * product.amount), 0)

// action name creator
const createActionName = actionName => `app/cart/${actionName}`;

// action types
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const UPDATE_AMOUNT = createActionName('UPDATE_AMOUNT');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

// action creators
export const addProduct = payload => ({ payload, type: ADD_PRODUCT});
export const updateAmount = payload => ({payload, type: UPDATE_AMOUNT});
export const deleteProduct = payload => ({ payload, type: DELETE_PRODUCT});
export const clearCart = payload => ({ payload, type: CLEAR_CART});

// reducer
const cartReducer = (statePart = [], action = {}) => {

  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products.filter(product => product.id !== action.payload.id), action.payload]
      }
    };
    case UPDATE_AMOUNT: {
      return { ...statePart, 
        products: statePart.products.map(product => product.id === action.payload.id 
          ? { ...product, amount: action.payload.quantity} 
          : product
        ) 
      };
    };
    case DELETE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload)
      }
    };
    case CLEAR_CART: {
      return {
        statePart
      }
    };
    default:
      return statePart;
  }
}

export default cartReducer;