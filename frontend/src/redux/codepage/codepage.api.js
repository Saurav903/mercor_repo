
import axios from "axios";

export const getdataapi = async(page)=>{
    let res = await axios.get(`https://shy-lime-swallow-gown.cyclic.app/questions/get?page=${page}&limit=1`);
    return res.data;
}

export const postdataapi = async(value)=>{
    let res = await axios.post("https://shy-lime-swallow-gown.cyclic.app/questions/post",value);
    return res.data;
}