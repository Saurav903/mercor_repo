const express = require("express");
const { CodeModel } = require("../models/codepage.model");
const {runCode} = require("../utils/codeEvaluted");

const codeRouter = express.Router();

codeRouter.get("/get",async(req,res)=>{
    const {page,limit} = req.query;

    const pageNumber = parseInt(page,10) || 1;
    const limitNumber = parseInt(limit,10) || 1;
    try {
        let response = await CodeModel.find().skip((pageNumber - 1)*limitNumber).limit(limitNumber);
        res.send(response)
    } catch (error) {
        res.send(error);
    }
});

codeRouter.post("/post",async(req,res)=>{
    const {code,questionId} = req.body;
    try {
        let qns = await CodeModel.find({_id:questionId});
        
        let arr=[];
        let values = await runCode(qns[0].testcase,arr,code);
        console.log(values);
        res.json({values:values});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error while evaluating code' });
    }
})

module.exports={
    codeRouter
}