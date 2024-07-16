//1)import json-server
const jsonServer=require('json-server')
// 2)Create json server -create()
const mediaPlayerServer=jsonServer.create()
// 3)Create path for json file(data file) - router()
const router =jsonServer.router('db.json')

//4) create middleware to parse json 
const middleware = jsonServer.defaults()
// 5)allow server to use router and middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// 6)set up port for the server to run
PORT = 3000 || process.env.PORT

// 7)listen to the request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})