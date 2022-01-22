const express = require('express')
const router = express.Router()
// เรียกใช้งาน Model
const Product = require('../models/products')
// Upload File
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images/products")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + ".jpg") // เปลี่ยนชื่อไฟล์
    }
})
// UpFile
const upload = multer({
    storage: storage
})

router.get('/', (req, res) => {
    // const name = "Nattwut Santhumpol"
    // const age = 29
    // const address = "<h3>สมุทรสาคร</h3>"
    // const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด","CPU","RAM","GPU","Monitor"]
    // const productss = [
    //     {name:"NoteBook",price:35000,image:"images/products/product1.png"},
    //     {name:"เสื้อ",price:2500,image:"images/products/product2.png"},
    //     {name:"หูฟัง",price:780,image:"images/products/product3.png"}
    // ]
    Product.find().exec((err, doc) => {
        res.render('index', { products: doc })
    })
})

router.get('/add-product', (req, res) => {
    res.render('form')
})

router.get('/manage', (req, res) => {
    Product.find().exec((err, doc) => {
        res.render('manage', { products: doc })
    })

})


router.get('/insert', (req, res) => {
    console.log(req.query);
    res.render('form')
})

router.get('/product/:id', (req, res) => {
    const product_id = req.params.id
    Product.findOne({_id:product_id}).exec((err,doc) =>{
        if(err) console.log(err);
        res.render('product',{product:doc})
    })

})

router.post('/insert', upload.single("image"), (req, res) => {
    
    let data = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        description: req.body.description
    })
    console.log(data);
    Product.seveProduct(data, (err) => {
        if (err) console.log(err)
        res.redirect('/')
    })
})


router.post('/edit', (req, res) => {
    const edit_id = req.body.edit_id
    console.log(edit_id);
    Product.findOne({_id:edit_id}).exec((err, doc) => {
        if (err) console.log(err)
        res.render('edit',{product:doc})
    })
})


router.get('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, { useFindAndModify: false }).exec(err => {
        if (err) console.log(err)
        res.redirect('/manage')
    })
})

router.post('/update',(req, res) => {
    const update_id = req.body.update_id
    let data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec(err =>{
        if(err) console.log(err);
        res.redirect('/manage')
    })
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
