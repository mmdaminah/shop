interface IProduct {
    id: string;
    category: string;
    brand: string;
    model: string;
    image: string;
    price?:number;
}
export default IProduct;