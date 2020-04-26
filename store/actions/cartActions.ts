import Product from "../../models/product";

export type CartActionTypes = 'ADD_TO_CART' | 'REMOVE_FROM_CART';

export type CartAction<TAction extends CartActionTypes> = {
    type: TAction
    Product: Product
};


export const addToCart = (product: Product): CartAction<'ADD_TO_CART'> => {
    return { type: 'ADD_TO_CART', Product: product }
};

export const removeFromCart = (product: Product): CartAction<'REMOVE_FROM_CART'> => {
    return { type: 'REMOVE_FROM_CART', Product: product }
};