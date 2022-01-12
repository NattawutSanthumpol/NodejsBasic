const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = "Nattwut Santhumpol"
    const age = 29
    const address = "<h3>สมุทรสาคร</h3>"
    res.render('index',{name:name,age:age,address:address})
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
