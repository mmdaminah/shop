interface IComment {
    name:string;
    email:string;
    comment:string;
}
interface IProduct {
    id: string;
    category: string;
    brand: string;
    model: string;
    image: string;
    price:string;
    comments?:IComment[];
    specifications?:{
        cpu:string;
        ram:string;
        rom:string;
        display:string;
        connection:string
    }
}
export default IProduct;