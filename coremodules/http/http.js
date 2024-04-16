//step1 require http core modules
let http=require('http')
//creating server
let server=http.createServer( (req,c)=>{
    console.log('method',req.method)
    console.log('url',req.url)
    console.log('headers',req.headers)
    console.log('query',req.query)
    console.log('params',req.params)
    console.log('body',req.body)
    res.end('done')

    if(req.url=='/' &&req.method)
    {
      res.writeHead(200,{"Content-Type":"text/html"})
     res.statusCode=201
     res.write('hii i am home page')
     res.end()
      //res.end('<h1>hello how are you , i am fine</h1>')
    }
    else{
     res.statusCode=401
     res.end()
    }
})

//listing
server.listen(8000,"127.0.0.1",()=>{
    console.log(`server is started at 8000`)
})