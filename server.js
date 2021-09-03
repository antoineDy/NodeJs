console.log('salut')

const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    
    if(query.name === undefined){
        response.write("salut toi !")
    }else{
        response.write(`salut ${query.name} !`)
    }
    response.end()
})

server.listen(8080)

/*
fs.readFile('index.html', (err,data) =>{
        if(err) throw err

        response.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'  
        })
        console.log(url.parse(request.url, true))
        
        response.end(data)
    })
*/