import { API_URL } from '../config';

//selectors
export const allOrders = ({ orders }) => orders;
export const getOrderByUsername = ({ orders }, username) => orders.filter(order => order.username === username);

// actions
const createActionName = actionName => `app/orders/${actionName}`;
const UPDATE_ORDERS = createActionName('UPDATE_ORDERS');

// action creators
export const updateOrders = payload => ({ type: UPDATE_ORDERS, payload });

// thunk
export const fetchOrders = () => {
  return (dispatch) => {
  fetch(`${API_URL}orders/`)
    .then(res => res.json())
    .then(orders => dispatch(updateOrders(orders)))
  }
};

// action creators
const ordersReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_ORDERS:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default ordersReducer;