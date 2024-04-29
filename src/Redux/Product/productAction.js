import { ADD_PRODUCT } from "../constant"

export const AddProduct=(data)=>{
    return {
        type:ADD_PRODUCT,
        data
    }
}