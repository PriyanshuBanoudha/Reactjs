const sumRequestHandler = (req,res)=>{

    console.log( "In sum handler" , req.url);
    const body = []
    req.on("data",chunk =>{
        body.push(chunk)
    })

    req.on('end',()=>{
        const fullbody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullbody)
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
        
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        
    })
}
module.exports=sumRequestHandler