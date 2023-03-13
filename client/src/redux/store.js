import { createStore, combineReducers } from 'redux';
import cartReducer from './cartRedux';
import initialState from './initialState';
import productsReducer from './productsRedux';
import searchReducer from './searchRedux';
import userReducer from './usersRedux';

const subreducers = {
  products: productsReducer,
  search: searchReducer,
  cart: cartReducer,
  user: userReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;