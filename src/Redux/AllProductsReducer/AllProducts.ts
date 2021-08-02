import IProduct from "../../Interfaces/ProductInterface"
let initialState:{allProducts:IProduct[]} = {
    allProducts:[]
}
const request = (name:string) => {
    fetch("/" + name)
        .then(response => response.json())
        .then(result => {
            initialState.allProducts = [...initialState.allProducts,...result.products]
        })
}
['mobile','tablet','laptop'].map(item => request(item))
const allProductReducer = (state = initialState, action:any) => {
    switch (action.type){
        case "search":
        default:
            return state;
    }
};
export default allProductReducer;
