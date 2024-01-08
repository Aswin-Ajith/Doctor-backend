const jsonServer = require('json-server')

const restServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middilware = jsonServer.defaults()

const port = 3001

restServer.use(middilware)
restServer.use(router)

restServer.listen(port,()=>{
    console.log("rest server listening on the port" + port );
})