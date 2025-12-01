const razorpayInstance = require("../config/razorpay");
const productModel = require("../models/product.model");
const { message } = require("../validator/user.validation");

const processpaymentController = async (req,res) => {
	try {
		let {amount,currency} = req.body;
		if(!amount || !currency) 
			{return res.status(404).json({
			message : "Amount not found",
		})}

		let options = {
			amount : amount*100,
			currency:currency ||"INR",
			receipt:`receipt_${Date.now()}`,
			payment_capture :1
		}


		const orders= await razorpayInstance.orders.create(options);
		console.log("order generated here ->", orders)

		if(!orders)
			return res.status(404).json({
				message : "order not generated"
		})


		return res.status(201).json({
			message : "Order created successfully",
			orders
		})
		
	} catch (error) {
		console.log("error" , error)
		res.status(500).json({
			message:"internal server errror",
			error:error
		})
	}
}




const verifyPaymentController = async (req,res) => {
	try {
		let { razorpay_order_id ,  razorpay_payment_id , razorpay_signature , product_id } = req.body

		console.log("data... ", razorpay_order_id ,razorpay_payment_id , razorpay_signature , product_id)


		if(!razorpay_order_id || !razorpay_payment_id  ||!razorpay_signature || !product_id ) 
			return res.status(404).json({
				message : "order not found",
			})

		let product = await productModel.findById(product_id)
		
		if(!product) 
			return res.status(404).json({
				message: "Product not found for this order ",
			})

		product.payment_status = "success";
		await product.save();
		
		return res.status(200).json({
			message:"Payment successful"
		})
	} catch (error) {
		console.log("verify error" , error)
		res.status(500).json({
			message:"internal server errror",
			error:error
		})
	}
}





module.exports = {
	processpaymentController, verifyPaymentController
}