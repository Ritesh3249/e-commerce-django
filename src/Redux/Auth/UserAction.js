import { EMPTY_REGISTER_VALUE, LOGIN_USER, REGISTER_USER, SET_REGISTER_VALUE } from "../constant";

export const  REGISTER_INITIAL_STATE={
    name:"",
    email:"",
    password:""
}
export const  LOGIN_INITIAL_STATE={
    
    email:"",
    password:""
}

export function addRegisterValue(e) {
    return{
        type:SET_REGISTER_VALUE,
        payload:{name:e.target.name,value:e.target.value  }
    }
}
export function emptyRegisterValue(e) {
    return{
        type:EMPTY_REGISTER_VALUE,
        payload:{  name:"",
        email:"",
        password:""  }
    }
}

export function registerUser(data) {
    console.log("We hit")
    return {
        type : REGISTER_USER,
        data
    }
}
export function loginUser(data) {
    return {
        type : LOGIN_USER,
        data
    }
}