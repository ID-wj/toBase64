const fs = require('fs')
const path = require('path')

//TODO config input filename and output filename
let filePath = path.resolve(`${__dirname}/1.pdf`)
let data = fs.readFileSync(filePath)

data = Buffer.from(data).toString('base64')

fs.writeFileSync(path.resolve(`${__dirname}/base64.txt`), data)