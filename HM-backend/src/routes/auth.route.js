const express = require("express")
const { registerController, loginController } = require("../controllers/auth.controller")
const userSchemavalidationApi = require("../middlewares/authentication.middleware")
const router = express.Router()

router.post("/register", userSchemavalidationApi ,registerController)
 router.post("/login" ,loginController)


module.exports = router