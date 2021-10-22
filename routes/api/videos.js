const express = require('express')
const axios = require('axios')
const router = express.Router()
const { cloudinary } = require('../../utils/cloudinary')

router.post('/upload-image', async (req, res) => {
	try {
		console.log(1)
		const fileStr = req.body.data
		console.log(2, fileStr)
		const uploadResponse = await cloudinary.uploader.upload(fileStr, {
			upload_preset: 'video_upload',
		})
		console.log(3)

		console.log(uploadResponse)
		console.log(4)
		res.send('Done.....')
	} catch (error) {
		console.log('error.....', error)
	}
})

router.post('/upload-video', async (req, res) => {
	try {
		console.log(1)
		const fileStr = req.body.data
		// const encodedString = fileStr.replace('data:video/mp4;base64,', '')
		// const data = Buffer.from(encodedString, 'base64')
		// const blob = new Blob([data], { type: 'video/mp4' })
		// console.log(blob)
		console.log(2)
		const uploadResponse = await cloudinary.uploader.upload(fileStr, {
			resource_type: 'video',
			upload_preset: 'video_upload',
		})
		console.log(3)

		console.log(uploadResponse)
		console.log(4)
		res.send('Done.....')
	} catch (error) {
		console.log('error.....', error)
	}
})

router.get('/videos', async (req, res) => {
	try {
		const response = await axios.get(
			'https://363896476523249:atDjo--vU6WMmbSMsZA6wavPp_M@api.cloudinary.com/v1_1/ragas-youtube-clone/resources/video'
		)

		console.log(response.data)

		const urls = response.data.resources.map((video) => video.secure_url)
		console.log(urls)
		res.send(urls)
	} catch (error) {
		console.log('error', error)
		res.status(500).send('Internal Server Error..', error)
	}
})

module.exports = router
