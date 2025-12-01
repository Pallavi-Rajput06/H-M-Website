require("dotenv").config()
const express = require("express")
const cors = require("cors")
const authRoute = require("./src/routes/auth.route")
const productRoute = require('./src/routes/product.route')
const sellerAuthRoute = require('./src/routes/product.route')
const paymentRoutes = require("./src/routes/payment.routes")
const connectDB = require("./src/config/db")
const cookieParser = require("cookie-parser")

const app = express()


app.use(cors({
	origin:"http://localhost:3000",
	credebtials :true 
}))
connectDB()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/user",authRoute)
app.use("/api/auth/seller",sellerAuthRoute)
app.use('/api/products',productRoute)
app.use("/api/payment" , paymentRoutes)

const port = process.env.port || 4000
app.listen(port, () => {
	console.log(`server is running on port ${port}`);
}
)