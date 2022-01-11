const http = require('http')
const fs = require('fs')
const url = require('url')

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`, 'utf-8')
const productPage1 = fs.readFileSync(`${__dirname}/templates/product1.html`, 'utf-8')
const productPage2 = fs.readFileSync(`${__dirname}/templates/product2.html`, 'utf-8')
const productPage3 = fs.readFileSync(`${__dirname}/templates/product3.html`, 'utf-8')

http.createServer((req, res) => {

    // const pathName = req.url
    const { pathname, query } = url.parse(req.url, true)

    if (pathname === "/" || pathname === "/home") {
        res.end(indexPage)
    } else if (pathname === "/product") {
        if (query.id === "1") {
            res.end(productPage1)
        } else if (query.id === "2") {
            res.end(productPage2)
        } else if (query.id === "3") {
            res.end(productPage3)
        } else {
            res.writeHead(404)
            res.end("<h1>Not Found</h1>")
        }

    } else {
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }

}).listen(8080, 'localhost', () => {
    console.log("Start Server In Port 8080")
})