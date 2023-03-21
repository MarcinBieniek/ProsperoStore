// selectors

export const getAll = ({ favourite }) => favourite.products;
export const getFavNumber = ({ favourite }) => favourite.products.length;

// action name creator
const createActionName = actionName => `app/cart/${actionName}`;

//action types
const ADD_FAVOURITE = createActionName('ADD_FAVOURITE');
const DELETE_PRODUCT = createActionName('DELETE_FAVOURITE');

// action creators
export const addFavourite = payload => ({ payload, type: ADD_FAVOURITE});
export const deleteFavourite = payload => ({ payload, type: DELETE_PRODUCT});

// reducer
const favouriteReducer = (statePart = [], action = {}) => {

  switch (action.type) {
    case ADD_FAVOURITE: {
      return {
        ...statePart,
        products: [...statePart.products.filter(product => product.id !== action.payload.id), action.payload]
      }
    };
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

export default favouriteReducer;