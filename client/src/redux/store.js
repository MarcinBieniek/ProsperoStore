import { createStore, combineReducers, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartRedux';
import favouriteReducer from './favouriteRedux';
import initialState from './initialState';
import productsReducer from './productsRedux';
import searchReducer from './searchRedux';
import userReducer from './usersRedux';
import ordersReducer from './ordersRedux';

const subreducers = {
  products: productsReducer,
  search: searchReducer,
  cart: cartReducer,
  user: userReducer,
  favourite: favouriteReducer,
  orders: ordersReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;