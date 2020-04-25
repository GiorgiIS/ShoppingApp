import { createStore, combineReducers } from "redux";
import productsRecuder from '../store/reducers/productsReducer';
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    products: productsRecuder,
    cart: cartReducer
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;