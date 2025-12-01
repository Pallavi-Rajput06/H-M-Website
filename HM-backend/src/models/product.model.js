const mongoose = require("mongoose")
const {type} = require("../validator/user.validation")
const {string} = require("joi")

const productSchema = new mongoose.Schema({
	productName :{
		type : String ,
        required :true
	},
	price :{
		currency:{
		type:String,
		enum:["INR","USD"],
		default:"INR",
		required:true
	    },
		amount:{
			type:String,
		    required:true
		}
	},
	categiry : {
		type:String,
		enum:["ladies" , "mens","kids" , "beauty" ,"home"]
		
	},
	size:{
		type : String ,
		enum : ["s" ,"m" , "xl" , "l" ,"xxl"],
		default:["m"]
	},
	color:[
		{
            type:"String"  
		}

	]
		
	,
	image:{
		type:Array,
		default:[]

	},
	description: {
		type:String,
		required:true
	},
	seller_id:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'seller'
	},
	razorpay_order_id : {
	 type : String
	},
	payment_status:{
		type:String,		
		enum : ["pending" , "failed" , "success"],
	}

},{timestamps:true})



const productModel = mongoose.model("product", productSchema)
module.exports = productModel