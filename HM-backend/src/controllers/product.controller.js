const productModel = require('../models/product.model');
const sendFiles = require('../services/storage.services')

const createProductController = async (req, res) => {
	try {

		let seller_id = req.seller;
		if(!req.files)
			return res.status(422).json({
				message : 'Images is required'
			})
		const uploadImg = await Promise.all(
			req.files.map(
				async (val) => await sendFiles(val.buffer , val.originalname)
			)
		)	
		let {productName, amount, description, currency, size, color, category } = req.body 

		if(!productName||  !amount || !description|| !currency|| !size|| !color|| !category )
			return res.status(422).json({
				message:'All feilds are required'
			})

			let newProduct = await ProductModel.create({
				productName,
				price: {
				  amount,
				  currency,
				},
				description,
				colors: color,
				sizes: size,
				images: uploadedImgs.map((val) => val.url),
				category: category,
			  });
		  
			  return res.status(201).json({
				message: "Product created",
				product: newProduct
			  });
				
	} catch (error) {
		return res.status(500).json({
			message:'internal server error '
		})
	}
}

const getAllProductController = async (req,res) => {
	try {

        let category  = req.params.cateory ;

		let products = await productModel.find({category})

		if(!products)
			return res.status(404).json({
		message : 'No products found'
	})

	return res.status(200).json({
		message:'Products fetched'
		,products:products
	})
	} catch (error) {
	 console.log('error in get products api -> ' , error)	
	 return res.status(500).json({
		message:'Internal server error'
	})
	}
}

const updateProductcontroller = async (req,res ) => {
	try {
		let product_id =req.params.id;

		if(!product_id)
			return res.status(404).json({
				message : 'Product id not found'
			})
		
		let {productName , amount , description , currency , size , color }	=req.body

		const uploadedImgs = await Promise.all(
			req.files.map(async(val) => await sendFiles(val.buffer , val.originalname) )
		)

		let updatedProduct = await productModel.findByIdAndUpdate({ _id: product_id},
			{
				productName,
				price:{
					amount ,currency
				},
				description,
				color,
				size
				,images:uploadedImgs.map((val) => val.url)
			}
		)

		await updatedProduct.save()

		if(!updatedProduct)
			return res.status(400).json({
		message:'Something went wrong '})

		return res.status(200).json({
			message:'Product updated'
		})
	} catch (error) {
		console.log('error in update products api -> ' , error)	
	 return res.status(500).json({
		message:'Internal server error'
	})
	}
}


const deleteProductController = async (req,res) => {
	try {
		if(!req.seller) 
			returnres.status(400).json({
		message:'Token not found '})

		let product_id = req.params.id
		if(!product_id)
			return res.status(404).json({
				message:'Product id not found'
			})

		let deleteProduct = await productModel.findByIdAndDelete(product_id)

	} catch (error) {
		console.log('error in delete products api -> ' , error)	
	 return res.status(500).json({
		message:'Internal server error'
	})
	}
}
module.exports = {
	createProductController,
	getAllProductController,
	updateProductcontroller,
	deleteProductController
}