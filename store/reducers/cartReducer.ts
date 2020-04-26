import Product from '../../models/product';
import PRODUCTS from "../../data/dummy-data";
import { CartAction, CartActionTypes } from '../actions/cartActions';
import CartItem from '../../models/cart-item';

interface CartState {
    // dictionary is created here, where key is id.
    items: { [id: string]: CartItem; }
    totalAmoaunt: number
}

const initialState: CartState = {
    items: {},
    totalAmoaunt: 0
};

const addToCartActionHandler = (state: CartState, action: CartAction<'ADD_TO_CART'>) => {
    let newOrUpdatedCartItem: CartItem;
    const { id, price, title, } = { ...action.Product };
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

const removeFromCartActionHandler = (state: CartState, action: CartAction<'REMOVE_FROM_CART'>) => {

    const targetProduct = state.items[action.Product.id];
    let updatedCartItems = { ...state.items };

    if (targetProduct.quantity > 1) {
        const updatedCartItem = new CartItem(
            targetProduct.id,
            targetProduct.quantity - 1,
            targetProduct.productPrice,
            targetProduct.productTitle
        );

        updatedCartItems = { ...updatedCartItems, [action.Product.id]: updatedCartItem }
    }
    else {

        // this will delete value from copied updatedCartItems object
        delete updatedCartItems[action.Product.id];
    }

    return {
        ...state,
        items: updatedCartItems,
       // I used Math.abs because negative zero (-0 WTF) was returning after removing all items
        totalAmoaunt: Math.abs(state.totalAmoaunt - targetProduct.productPrice)
    }
}

export default (state: CartState = initialState,
    action: CartAction<CartActionTypes>) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCartActionHandler(state, action as CartAction<'ADD_TO_CART'>);
        case 'REMOVE_FROM_CART':
            return removeFromCartActionHandler(state, action as CartAction<'REMOVE_FROM_CART'>);
        default:
            return state;
    }
}