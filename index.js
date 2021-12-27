const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")


const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
// const flutterRouter = require("./routes/flutter")


// deployment
const path = require("path")


const cors = require("cors")

dotenv.config()


mongoose
          .connect(process.env.MONGO_URL)
          .then(() => console.log("DB Connection Successful"))
          .catch(err => {
                    console.log(err)
          })

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
// app.use("/api/checkout", flutterRouter)


// configuration for deployment
app.use(express.static(path.join(__dirname, "/client/build")))


app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, "/client/build", "index.thml"))
})



app.listen(process.env.PORT || 7000, () => {
          console.log("Backend Server Is Running!")
})