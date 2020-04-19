import Product from '../../models/product';
import PRODUCTS from "../../data/dummy-data";

interface ProductsState {
    availableProducts: Product[],
    userProducts: Product[]
}

const initialState: ProductsState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(c => c.ownerId === 'u1')
};

export default (state: ProductsState = initialState, action: any) => {
    return state;
}