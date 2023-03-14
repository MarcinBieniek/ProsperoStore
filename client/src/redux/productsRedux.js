import { API_URL } from '../config';

//selectors
export const allProducts = ({products}) => products;
export const getProductById = ({ products }, productId) => products.find(product => product.id == productId);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_BOOKS');

// action creators
export const updateProducts = payload => ({ type: UPDATE_PRODUCTS, payload });

export const fetchBooks = () => {
  return (dispatch) => {
  fetch(`${API_URL}products/`)
    .then(res => res.json())
    .then(products => dispatch(updateProducts(products)))
  }
};

// action creators
const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default productsReducer;