var http = require("http")
var fs = require("fs")

var port = 3000

if (process.env.PORT != undefined){
    port = process.env.PORT
}

var indexHTML = fs.readFileSync("./index.html", "utf8")
console.log("== index.html read")
var indexJS = fs.readFileSync("./index.js", "utf8")
console.log("== index.js read")
var styleCSS = fs.readFileSync("./style.css", "utf8")
console.log("== style.css read")

var server = http.createServer(function (req, res) {

    if (req.url == "/index.html" || req.url == "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(indexHTML)
        res.end()
    } else if (req.url == "/index.js"){
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        })
        res.write(indexJS)
        res.end()
    } else if (req.url == "/style.css"){
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(styleCSS)
        res.end()
    }
})

server.listen(port, function() {
    console.log("== Server is listening on port:", port)
})