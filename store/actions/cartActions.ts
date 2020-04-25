import Product from "../../models/product";

export type CartActionType = 'ADD_TO_CART';

export type CartAction = {
    type: CartActionType,
    product: Product
};

export const addToCart = (product: Product): CartAction => {
    return { type: 'ADD_TO_CART', product: product }
};