const mongoose= require("mongoose")


const connectDB = async() => {
	try {
		let res = await mongoose.connect(process.env.mongo_uri)

		if (res){
			console.log("mongoDB connected")
		} 
 
	} catch (error) {
			console.log("error in connecting mongoDB")
	}
}

module.exports = connectDB