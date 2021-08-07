const initialState = {
    isLogin:"",
    accessToken:"",
    refreshToken:"",
    role:""
}
const UserReducer = (state = initialState,action:any)=>{
    switch(action.type) {
        case "userLogin":
            return {
                ...action.payload
            }
        case "logout":
            return {
                ...initialState,isLogin:false
            }
        default:
            return state
    }
}
export default UserReducer;