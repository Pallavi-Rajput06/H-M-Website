const Imagekit = require('imagekit')

const storageInstance = new Imagekit({
	publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
	privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
	urlEndpoint:process.env.IMAGEKIT_URL
})


const sendFiles = async (file , filename) => {
	return await storageInstance.upload({
		file,
		filename,
		folder :'HM'
	})
}

module.exports = sendFiles