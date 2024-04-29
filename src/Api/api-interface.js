import axios from 'axios'

export const postWithoutToken =async (path,data)=>{
    return await axios.post(process.env.REACT_APP_API_BASE_URL+path,data,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export const getWithoutToken = async (path)=>{
    return await axios.post(process.env.REACT_APP_API_BASE_URL+path,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}