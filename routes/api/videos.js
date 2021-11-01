const express = require('express')
const axios = require('axios')
const router = express.Router()

const auth = require('../../middleware/auth')
const { cloudinary } = require('../../utils/cloudinary')
const Video = require('../../models/Video')

// Upload a image
router.post('/upload-image', auth, async (req, res) => {
	try {
		console.log(1)
		const fileStr = req.body.data
		console.log(2, fileStr)
		const uploadResponse = await cloudinary.uploader.upload(fileStr, {
			upload_preset: 'video_upload',
		})
		console.log(3)

		console.log(uploadResponse)
		res.status(201).send('Done...!')
	} catch (error) {
		console.log('error.....', error)
	}
})

// Upload a Video
router.post('/upload-video', auth, async (req, res) => {
	try {
		console.log(1, req.user)
		const owner = req.user._id
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
		const { secure_url, public_id } = uploadResponse
		const video = new Video({
			owner,
			secure_url,
			public_id,
		})
		await video.populate('owner').execPopulate()
		await video.save()
		console.log(4, video)
		res.status(201).send(video)
	} catch (error) {
		console.log('error.....', error)
	}
})

// router.get('/videos', async (req, res) => {
// 	try {
// 		const response = await axios.get(
// 			'https://363896476523249:atDjo--vU6WMmbSMsZA6wavPp_M@api.cloudinary.com/v1_1/ragas-youtube-clone/resources/video'
// 		)

// 		console.log(response.data)

// 		const urls = response.data.resources.map((video) => video.secure_url)
// 		console.log(urls)
// 		res.send(urls)
// 	} catch (error) {
// 		console.log('error', error)
// 		res.status(500).send('Internal Server Error..', error)
// 	}
// })

// Get all Videos
router.get('/videos', async (req, res) => {
	try {
		const videos = await Video.find({})
		if (!videos)
			return res.status(418).send('No videos avaliable at this time.')

		Promise.all(
			videos.map(async (video) => {
				await video.populate('owner').execPopulate()
				await video.save()
				return video
			})
		)
			.then((result) => {
				return res.send(result)
			})
			.catch((err) => {
				console.log(err)
				res.status(500).send('Internal Server Error')
			})
	} catch (err) {
		console.log('error from get all videos', err)
		res.status(500).send('Internal Server Error')
	}
})

module.exports = router
