interface IProduct {
    id: string;
    category: string;
    brand: string;
    model: string;
    image: string;
    price:string;
    specifications?:{
        cpu:string;
        ram:string;
        rom:string;
        display:string;
    }
}
export default IProduct;