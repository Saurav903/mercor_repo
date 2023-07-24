import { getdataapi, postdataapi } from "./codepage.api";
import { GET_DATA, POST_DATA } from "./codepage.type";

export const getdata = (page)=>async(dispatch)=>{
    let data = await getdataapi(page);
    dispatch({
        type:GET_DATA,
        payload:data
    })
}

export const postdata = (value)=>async(dispatch)=>{
    let data = await postdataapi(value);

    dispatch({
        type:POST_DATA,
        payload:data
    })
}