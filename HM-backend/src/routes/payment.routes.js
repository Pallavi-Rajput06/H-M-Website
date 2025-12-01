const express = require("express");
const { processpaymentController, verifyPaymentController } = require("../controllers/payment.controller");

const router  = express.Router()


router.post("/process",processpaymentController)
router.post("/verify",verifyPaymentController)



module.exports = router;