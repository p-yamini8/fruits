const fs=require('fs');
const handler=(req,res)=>{
    if(req.url=="/")
        {res.setHeader("content-Type",'text/html')
            fs.readFile('form_data.txt',(err,data)=>{
               const saveddata=data.toString();
               res.end(`
                <h1>${saveddata}</h1>
                <form action='/message' method='POST'>
                  <label>Name:</label>
                  <input type="text" name="username"></input>
                  <button type='submit'>Add</button>
                </form>`)
            })
           
        }
        else{
            if(req.url=="/message"){
                let a=[]
                    req.on('data',(chunks)=>{
            a.push(chunks);
                    })
                    req.on('end',()=>{
                       const combinedbuffer= Buffer.concat(a);
                      let b= combinedbuffer.toString();
                      const form_data=b.split("=")[1];
                    //  console.log(form_data);
                      fs.writeFile("form_data.txt",form_data,(err)=>{
                        res.statusCode=302;
                        res.setHeader('Location',"/")
                        res.end();
                      })
                    });
                }
                else{
                    if(req.url=="/read")
                    {
                        fs.readFile("form_data.txt",(err,data)=>{
                        //  console.log(data.toString());
                         res.end(`<h1>${data.toString()}</h1>`);
                        })
                    }
                }
            }
    }
   
module.exports=handler;