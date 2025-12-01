const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const registerController =async (req,res) => {
	try {
	const {name , email, phone , password} = req.body

	if(!name || !email|| !phone || !password) return res.status(422).json({
		message:"all feilds required"
	})

	const existingUser = await userModel.findOne({email})

	if(existingUser) return res.status(400).json({
		message:"User already exists"
	})

	const newUser = await userModel.create({
		name,email,phone,password
	})

	let token  = jwt.sign({id:newUser._id } , process.env.JWT_SECRET , {expiresIn:"1h"})


	res.cookie("token",token);

	return res.status(201).json({
		message:"User registered successfully",
		user:newUser
	})


	} catch (error) {
	console.log("error in registration -> ",error)	
	return res.status(500).json({
		message:"Internal Server Error"
		,error: error
	})
	}
}

const loginController = async (req , res ) => {
	try {
		let {email , password} = req.body
        if(!email || !password) 
			return res.status(422).json({
			message:"All fields are required"
		})
		const user =await userModel.findOne({email})

		if(!user)
			return res.status(404).json({
				message:"user not found"
			})
	    let cp =await user.comparePass(password)

		if(!cp) return res.status(400).json({
			message:"Invalid credentials"
		})

		let token =jwt.verify({  id : user._id } , process.env.JWT_SECRET , {
			expiresIn:'1h'
		})

		res.cookie('token', token);
		
		return res.status(200).json({
			message:"User logged in",
			user:user
		})
	} catch (error) {
		console.log("error in login -> ",error)	
	    return res.status(500).json({
		message:"Internal Server Error"
	})
	}
}






module.exports= { registerController , loginController}