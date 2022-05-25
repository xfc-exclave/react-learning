import { combineReducers } from "redux";
import productReducer from './product'
import receiverReducer from './receiver'

export default combineReducers({
    productReducer, receiverReducer
});