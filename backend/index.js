require("dotenv").config()

const express = require("express")
const connect = require("./config/db")
const app = express()
const userRoutes = require("./routes/users.route")
const productRoutes = require("./routes/product.route")
const cartRoutes = require("./routes/cart.route")
const port = process.env.port
const cors = require("cors")
const bcrypt = require('bcrypt');
app.use(express.json())

app.use("/users",userRoutes)
app.use("/products",productRoutes)
app.use("/carts",cartRoutes)
app.use(cors())


app.listen(port , async()=>{
    try{
      await connect()
      console.log(`http://localhost:${port}`)
    }catch(e){
        console.log(e.message)
    }
})