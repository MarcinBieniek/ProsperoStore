// selectors
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

// action name creator
const createActionName = actionName => `app/cart/${actionName}`;

// action types
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

// action creators
export const addProduct = payload => ({ payload, type: ADD_PRODUCT});

// reducer

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload]
      }
    }
    default:
      return statePart;
  }
}

export default cartReducer;