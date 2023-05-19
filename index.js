const fs = require('fs')
const node = fs.readFileSync('node.txt')
console.log(node.toString())