// selectors
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

// action name creator
const createActionName = actionName => `app/cart/${actionName}`;

// action types
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');

// action creators
export const addProduct = payload => ({ payload, type: ADD_PRODUCT});
export const deleteProduct = payload => ({ payload, type: DELETE_PRODUCT});

// reducer
const cartReducer = (statePart = [], action ={}) => {

  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload]
      }
    }
    case DELETE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload)
      }
    }
    default:
      return statePart;
  }
}

export default cartReducer;