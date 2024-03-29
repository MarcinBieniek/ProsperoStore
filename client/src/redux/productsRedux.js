import { API_URL } from '../config';

//selectors
export const allProducts = ({products}) => products;
export const getProductById = ({ products }, productId) => products.find(product => product.id == productId);
export const getSaleProducts = ({ products }) => products.filter(product => product.sale === true)

// actions
const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');

// action creators
export const updateProducts = payload => ({ type: UPDATE_PRODUCTS, payload });

// thunk
export const fetchProducts = () => {
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