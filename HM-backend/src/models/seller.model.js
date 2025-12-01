const mongoose = require ("mongoose")
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')


const sellerSchema = new mongoose.Schema({
	sellerName:{
		type:String,
		required:true
	},
	sellerPhone:{
		type:String,
		unique:true,
		minLength:10,
		maxLength:10,
	},
	password:{
		type:String,
		required:true
	},
	sellerEmail:{
		type:String,
		required:true,
		unique:true
	},
	sellerAdhaar:{
		type:String,
		unique:true
	},
	products:[
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'product'
		}
	]
},{
	timestamps:true
})

sellerSchema.pre('save', async function(next){
	let hashedPass = await bcrypt.hash(this.password,10)
    this.password = hashedPass 
	next(); 
})

sellerSchema.methods.comparePass = async function(password){
	let comparePass = await bcrypt.compare(password, this.password)
	return comparePass;
}

const sellerModel = mongoose.model('seller' , sellerSchema)
module.exports = sellerModel