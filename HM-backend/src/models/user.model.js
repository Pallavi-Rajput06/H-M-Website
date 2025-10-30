const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
	name:{
		type:"String" , 
		required:true
	},
	email:{
		type:"String" , 
		required:true,
		unique:true
	},
	phone:{
		type:"String" , 
		required:true,
		unique:true,
		minLength:10 
	},
	password:{
		type:"String" , 
		required:true
	}
},{timestamps:true})


userSchema.pre("save" , async function (next){

	let hashedPass = await bcrypt.hash (this.password,10)
	this.password = hashedPass;
	next()
})

userSchema.methods.comparePass = async function(password){
	let comparePass  = await bcrypt.compare(password, this.password);
	return comparePass
}

const userModel = mongoose.model("user" , userSchema)
module.exports = userModel