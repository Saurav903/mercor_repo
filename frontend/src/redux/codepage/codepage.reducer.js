import { GET_DATA, POST_DATA } from "./codepage.type"

let initialState = {
    datas:[],
    submitted:[]
}

export const codepageReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA:{
            return{
                ...state,
                datas:payload
            }
        }
        case POST_DATA:{
            return{
                ...state,
                submitted:payload
            }
        }
        default:{
            return state
        }
    }
}