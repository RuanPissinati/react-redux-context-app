import { combineReducers } from 'redux';
import shoppingcart from '../reducers/shoppingcart'
import user from '../reducers/user'
export default combineReducers({
  shoppingcart,
  user
});