import { createStore, combineReducers } from "redux";
import productsRecuder from '../store/reducers/productsReducer';

const rootReducer = combineReducers({
    products: productsRecuder
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;