const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
    question:String,
    testcase:Array,
    output:String,
    solution:String,
    input:String
});

const CodeModel = mongoose.model("Questions",codeSchema);

module.exports={
    CodeModel
}