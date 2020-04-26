export default class Product {
    id: string;
    ownerId: string;
    title: string;
    imageUrl: string;
    description: string;
    price: number;

    constructor(
        id: string,
        ownerId: string,
        title: string,
        imageUrl: string,
        description: string,
        price: number,
    ) {
        this.id = id;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl;
        this.description = description;
        this.title = title;
        this.price = price;
    }

    static default = () => {
        return new Product('', '', '', '', '', 0);
    }

    static JustId = (id: string) => {
        return new Product(id, '', '', '', '', 0);
    }
}