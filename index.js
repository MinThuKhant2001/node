// const fs = require('fs')
// const node = fs.readFileSync('node.txt')
// console.log(node.toString())

const http = require('http')
http.createServer((req,res) =>{
    res.end('MinThuKahnt')
}).listen(3000,() =>{
    console.log('server runing on port 3300')
})