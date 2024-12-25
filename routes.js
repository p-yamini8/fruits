const fs=require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(req.url=="/")
    {
        res.setHeader('content-Type','text/html');
        res.end(`
            <form action='/message' method='POST'>
            <label>Name:</label>
            <input type="text" name='username'></input>
            <button type='submit'>Add</button>
            </form>
    
            `)
    }
    if(req.url=="/message")
    {
        res.setHeader('content-Type','text/html');
       let datachunks=[];
       req.on('data',(chunks)=>{
        console.log(chunks)
        datachunks.push(chunks);
       })
       req.on('end',()=>{
        let combinedbuffer=Buffer.concat(datachunks);
        console.log(combinedbuffer);
        let formdata=combinedbuffer.toString();
        console.log(formdata);
        const formvalues=formdata.split('=')[1];
        fs.writeFile('formvalues.txt',formvalues,(err)=>{
    res.statusCode=302;
    res.setHeader('Location','/');
    res.end();
        })
       });
    }
    else{
        if(req.url=='/read'){
    fs.readFile('formvalues.txt',(err,data)=>{
        console.log(data.toString());
        res.end(`
            <h1>${data.toString()}</h1>`)
    })
        }
    }
}

module.exports.handler=requestHandler;
//module.exports.testFunction=anotherFunction;