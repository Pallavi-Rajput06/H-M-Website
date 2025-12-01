const express = require("express")
const upload = require('../config/multer')
const { createProductController, updateProductcontroller, getAllProductController, deleteProductController } = require("../controllers/product.controller")
const sellerMiddleware = require("../middlewares/seller.middleware")

const router = express.Router()

router.post("/create" ,  upload.array('images' , 5) , createProductController)
router.get("/:category",getAllProductController)
router.put("/update/:id" , sellerMiddleware , upload.array('images' , 5) , updateProductcontroller)
router.delete("/delete/:id" , sellerMiddleware ,deleteProductController)



module.exports = router