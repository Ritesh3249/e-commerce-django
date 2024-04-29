import { REGISTER_USER, SET_REGISTER_USER, SET_REGISTER_VALUE } from "../constant";

export function userData(data=[],action) {
    switch (action.type) {
        case SET_REGISTER_VALUE:
        return {
            ...data,
            [action.payload.name]:action.payload.value
        };
        case SET_REGISTER_USER:
            return [...action.data]
    
        default:
            return data
    }
    
}