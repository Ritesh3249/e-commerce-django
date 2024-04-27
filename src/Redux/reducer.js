import {ADD_TO_CART, REMOVE_TO_CART} from "./constant"

export const cartData = (data=[],action)=>{
    switch (action.type) {
        case ADD_TO_CART:
           
            return [action.data,...data]

        case REMOVE_TO_CART:
            const remainingItem = data.filter((item)=>{return item.id !== action.data})    
            return [...remainingItem]
    
        default:
            return data;
    }
}