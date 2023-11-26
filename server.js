/* Using material from Rob Hess' CS 290 course. */

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
var requestJS = fs.readFileSync("./request.js", "utf8")
console.log("== request.js read")
var errorHTML = fs.readFileSync("./404.html", "utf8")
console.log("== 404.html read")
var faqHTML = fs.readFileSync("./faq.html", "utf8")
console.log("== faq.html read")
var startHTML = fs.readFileSync("./startpage.html", "utf8")
console.log("== startpage.html read")
var purposeHTML = fs.readFileSync("./purpose.html", "utf8")
console.log("== purpose.html read")
var settingsHTML = fs.readFileSync("./settings.html", "utf8")
console.log("== settings.html read")
var styleCSS = fs.readFileSync("./style.css", "utf8")
console.log("== style.css read")
var pochaccoPNG = fs.readFileSync("./pochacco.png")
var aggretsukoPNG = fs.readFileSync("./images/aggretsuko.png")
var badtzmaruPNG = fs.readFileSync("./images/badtzmaru.png")
var badtzmaru2PNG = fs.readFileSync("./images/badtzmaru2.png")
var chococatPNG = fs.readFileSync("./images/chococat.png")
var cinnamorollPNG = fs.readFileSync("./images/cinnamoroll.png")
var cinnamoroll2PNG = fs.readFileSync("./images/cinnamoroll2.png")
var cogimyunPNG = fs.readFileSync("./images/cogimyun.png")
var danielPNG = fs.readFileSync("./images/daniel.png")
var gudetamaPNG = fs.readFileSync("./images/gudetama.png")
var gudetama2PNG = fs.readFileSync("./images/gudetama2.png")
var hangyodonPNG = fs.readFileSync("./images/hangyodon.png")
var hellokittyPNG = fs.readFileSync("./images/hellokitty.png")
var hellokitty2PNG = fs.readFileSync("./images/hellokitty2.png")
var keroppiPNG = fs.readFileSync("./images/keroppi.png")
var kuromiPNG = fs.readFileSync("./images/kuromi.png")
var kuromi2PNG = fs.readFileSync("./images/kuromi2.png")
var littletwinstarsPNG = fs.readFileSync("./images/littletwinstars.png")
var mymelodyPNG = fs.readFileSync("./images/mymelody.png")
var mymelody2PNG = fs.readFileSync("./images/mymelody2.png")
var pianoPNG = fs.readFileSync("./images/piano.png")
var piano2PNG = fs.readFileSync("./images/piano2.png")
var pochacco2PNG = fs.readFileSync("./images/pochacco.png")
var pochacco3PNG = fs.readFileSync("./images/pochacco2.png")
var pompompurinPNG = fs.readFileSync("./images/pompompurin.png")
var tuxedosamPNG = fs.readFileSync("./images/tuxedosam.png")
console.log("== images read")

var server = http.createServer(function (req, res) {

    if (req.url == "/index.html"){
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
    } else if (req.url == "/request.js"){
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        })
        res.write(requestJS)
        res.end()
    } else if (req.url == "/faq.html"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(faqHTML)
        res.end()
    } else if (req.url == "/startpage.html" || req.url == "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(startHTML)
        res.end()
    } else if (req.url == "/purpose.html"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(purposeHTML)
        res.end()
    } else if (req.url == "/settings.html"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(settingsHTML)
        res.end()
    } else if (req.url == "/style.css"){
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(styleCSS)
        res.end()
    } else if (req.url == "/pochacco.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(pochaccoPNG)
        res.end()
    } else if (req.url == "/images/aggretsuko.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(aggretsukoPNG)
        res.end()
    } else if (req.url == "/images/badtzmaru.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(badtzmaruPNG)
        res.end()
    } else if (req.url == "/images/badtzmaru2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(badtzmaru2PNG)
        res.end()
    } else if (req.url == "/images/chococat.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(chococatPNG)
        res.end()
    } else if (req.url == "/images/cinnamoroll.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(cinnamorollPNG)
        res.end()
    } else if (req.url == "/images/cinnamoroll2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(cinnamoroll2PNG)
        res.end()
    } else if (req.url == "/images/cogimyun.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(cogimyunPNG)
        res.end()
    } else if (req.url == "/images/daniel.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(danielPNG)
        res.end()
    } else if (req.url == "/images/gudetama.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(gudetamaPNG)
        res.end()
    } else if (req.url == "/images/gudetama2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(gudetama2PNG)
        res.end()
    } else if (req.url == "/images/hangyodon.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(hangyodonPNG)
        res.end()
    } else if (req.url == "/images/hellokitty.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(hellokittyPNG)
        res.end()
    } else if (req.url == "/images/hellokitty2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(hellokitty2PNG)
        res.end()
    } else if (req.url == "/images/keroppi.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(keroppiPNG)
        res.end()
    } else if (req.url == "/images/kuromi.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(kuromiPNG)
        res.end()
    } else if (req.url == "/images/kuromi2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(kuromi2PNG)
        res.end()
    } else if (req.url == "/images/littletwinstars.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(littletwinstarsPNG)
        res.end()
    } else if (req.url == "/images/mymelody.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(mymelodyPNG)
        res.end()
    } else if (req.url == "/images/mymelody2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(mymelody2PNG)
        res.end()
    } else if (req.url == "/images/piano.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(pianoPNG)
        res.end()
    } else if (req.url == "/images/piano2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(piano2PNG)
        res.end()
    } else if (req.url == "/images/pochacco.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(pochacco2PNG)
        res.end()
    } else if (req.url == "/images/pochacco2.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(pochacco3PNG)
        res.end()
    } else if (req.url == "/images/pompompurin.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(pompompurinPNG)
        res.end()
    } else if (req.url == "/images/tuxedosam.png"){
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(tuxedosamPNG)
        res.end()
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        })
        res.write(errorHTML)
        res.end()
    }
})

server.listen(port, function () {
	console.log("== Server is listening on port", port)
})
