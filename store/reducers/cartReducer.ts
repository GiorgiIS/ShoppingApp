import Product from '../../models/product';
import PRODUCTS from "../../data/dummy-data";
import { CartAction } from '../actions/cartActions';
import CartItem from '../../models/cart-item';

interface CartState {
    // dictionary is created here, wher key is id.
    items: { [id: string]: CartItem; }
    totalAmoaunt: number
}

const initialState: CartState = {
    items: {},
    totalAmoaunt: 0
};

const addToCartActionHandler = (state: CartState, action: CartAction) => {
    let newOrUpdatedCartItem: CartItem;
    const { id, price, title, } = { ...action.product };
    const existingItem = state.items[id];

    if (existingItem) {
        newOrUpdatedCartItem =
            new CartItem(id, existingItem.quantity + 1, price, title);
    }
    else {
        newOrUpdatedCartItem = new CartItem(id, 1, price, title);
    }

    return {
        ...state,
        items: { ...state.items, [id]: newOrUpdatedCartItem },
        totalAmoaunt: state.totalAmoaunt + price
    }
}

export default (state: CartState = initialState, action: CartAction) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCartActionHandler(state, action);
        default:
            return state;
    }
}