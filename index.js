const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end(`<h1>hello</h1>
            <h1>this</h1>
            <h1>college</h1>`)
    }
})
server.listen(1006,()=>{
    console.log("running mission ");
})

