// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).catch(err => console.log(err))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
})

// สร้าง Model
let Product = mongoose.model("products", productSchema)

// ส่งออก Model
module.exports = Product

// ออกแบบ fucntion save data
module.exports.seveProduct = function(model, data) {
    model.save(data)
}

