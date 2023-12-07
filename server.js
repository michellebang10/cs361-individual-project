/* Using the following materials and help:
- Rob Hess' CS 290 Course
- https://stackoverflow.com/questions/70010450/
- Instructor Lara Letaw and Partner Audrey Au
*/

var http = require("http")
var fs = require("fs")
var port = 3000
const path = require("path")


if (process.env.PORT != undefined){
    port = process.env.PORT
}

// Get content type of file.
function getContentType(ext){
    const contentType = {
        ".js": "text/javascript",
        ".html": "text/html",
        ".css": "text/css",
        ".png": "image/png",
    } 

    return contentType[ext]
}

// Read all files needed for server. 
function readAllFiles(urlPath, contentType, res) {
    fs.readFile(urlPath, (error, content) => {
        if (error) {
            res.writeHead(404, {
                "Content-Type": "text/html"
            })
            res.end("404 Page Not Found.")
        } else {
            res.writeHead(200, {
                "Content-Type": contentType
            })
            res.end(content, "utf8")
        }
    })
}

// Start actual server up. 
var server = http.createServer(function (req, res) {
    
    var urlPath = "." + req.url
    if (urlPath === "./") {
        urlPath = "./startpage.html"
    }

    const ext = path.extname(urlPath) || "application/octet-stream"
    const contentType = getContentType(ext)

    readAllFiles(urlPath, contentType, res)
})

server.listen(port, function () {
	console.log("== Server is listening on port", port)
})
