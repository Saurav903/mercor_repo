const runCode = (testcase,arr,code)=>{
    console.log(testcase);
    for(let i=0; i<testcase.length; i++){
        
        const d = new Date();
        let ms = d.getSeconds()+d.getMilliseconds();
        let vals = `(${code}(${testcase[i].input[0]},${testcase[i].input[1]}))`
        let evaluted = eval(vals);
        const d2 = new Date();
        let ms2 = d2.getSeconds()+d2.getMilliseconds();
        let time = ms2 - 50;
        if(evaluted == testcase[i].output){
            arr.push({inp:testcase[i],time:time,isPassed:2,output:evaluted})
        }else {
            arr.push({inp:testcase[i],time:time,isPassed:0,output:evaluted})
        }
    }
    return arr;
}

module.exports={
    runCode
}