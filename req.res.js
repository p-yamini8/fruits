const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("server is created");
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
        res.statusCode=200;
        res.end("<h1>Hello World</h1>")
    }
    else if(req.url=='/pizza'){
        res.statusCode=200;
        res.end("<h1> this is your pizza</h1>")
    }
    else if(req.url=='/home')
    {res.statusCode=200;
        res.end('<h1>Welcome home</h1>');

    }
    else if(req.url=='/about')
        {res.statusCode=200;
            res.end("<h1>Welcome to About Us</h1>");
    
        }
        else if(req.url=='/node')
            {res.statusCode=200;
                res.end('<h1>Welcome to my Node Js project</h1>');
        
            }
            else{
                res.statusCode=302;
                res.end('<h1>Page Not Found</h1>');
            }
})
let port=4000;
server.listen(port,()=>{
    console.log("server is runing");
});