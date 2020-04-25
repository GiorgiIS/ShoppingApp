import { createStore, combineReducers } from "redux";
import productsRecuder from '../store/reducers/productsReducer';
import cartReducer from "./reducers/cartReducer";

// npm install --save-dev redux-devtools-extension
// this must be used only in development, so before production  mode remove
// it is for debuggung purposes, to see redux store in debugger
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    products: productsRecuder,
    cart: cartReducer
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;