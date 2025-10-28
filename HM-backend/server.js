require("dotenv").config()
const express = require("express")
const authRoute = require("./src/routes/auth.route")
const connectDB = require("./src/config/db")


const app = express()
connectDB()
app.use(express.json())

app.post("/api/auth",authRoute)

const port = process.env.port || 4000
app.listen(port, () => {
	console.log(`server is running on port ${port}`);
}
)