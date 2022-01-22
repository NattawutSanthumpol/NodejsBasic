const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const name = "Nattwut Santhumpol"
    const age = 29
    const address = "<h3>สมุทรสาคร</h3>"
    const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด","CPU","RAM","GPU","Monitor"]
    const productss = [
        {name:"NoteBook",price:35000,image:"images/products/product1.png"},
        {name:"เสื้อ",price:2500,image:"images/products/product2.png"},
        {name:"หูฟัง",price:780,image:"images/products/product3.png"}
    ]
    res.render('index',{productss:productss})
})

router.get('/addForm', (req, res) => {
    res.render('form')
})

router.get('/manage', (req, res) => {
    res.render('manage')
})

module.exports = router


// const path = require('path')



// อ้างอิงตำแหน่งไฟล์
// router.get('/', (req, res) => {
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname, "../templates/index.html"))
// })

// router.get('/product/:id', (req, res) => {

//     const productID = req.params.id
//     if (productID === '1') {
//         res.sendFile(path.join(__dirname, '../templates/product1.html'))
//     } else if (productID === '2') {
//         res.sendFile(path.join(__dirname, '../templates/product2.html'))
//     } else if (productID === '3') {
//         res.sendFile(path.join(__dirname, '../templates/product3.html'))
//     } else {
//         res.redirect('/')
//         // res.status(404)
//         // res.send("<h1>404 Page Not Found</h1>")
//     }
// })
