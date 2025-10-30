const mongoose = require("mongoose")


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
	}
},{timestamps:true})



const productModel = mongoose.model("product", productSchema)
module.exports = productModel