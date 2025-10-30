const registerController = async (req, res) => {
	try {
		
	} catch (error) {
		console.log('error in seller register api' , error)
		return res.status(500).json({
			message:'internal server error'
		})
	}
}