export default class CartItemModel {
    id: string;
    quantity: number;
    productPrice: number;
    productTitle: string;
    sum: number;

    constructor(
        id: string,
        quantity: number,
        productPrice: number,
        productTitle: string
    ) {
        this.id = id;
        this.quantity = quantity;
        this.productPrice = productPrice;
        this.productTitle = productTitle;
        this.sum = quantity * productPrice;
    }
}