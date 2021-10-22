import axios from 'axios'
import React, { useState } from 'react'

const Upload = () => {
	const [fileInput, setFileInput] = useState('')
	const [selectedFile, setSelectedFile] = useState()
	const [previewSource, setPreviewSource] = useState('')
	const [videos, setVideos] = useState([])
	// const [] = useState()

	const handleInputChange = (e) => {
		const file = e.target.files[0]
		previewFile(file)
		setSelectedFile(file)
		setFileInput(e.target.value)
	}

	const previewFile = (file) => {
		const reader = new FileReader()
		console.log('File preview', 1, reader)
		reader.readAsDataURL(file)
		console.log(2, reader)
		reader.onloadend = () => setPreviewSource(reader.result)
		console.log(3, reader)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!selectedFile) return
		if (fileInput.includes('.mp4')) {
			// For video upload
			const reader = new FileReader()
			console.log('Video File Submit', 1, reader)
			reader.readAsDataURL(selectedFile)
			console.log(2, reader)
			reader.onloadend = () => uploadVid(reader.result)
			console.log(3, reader)
			reader.onerror = () => {
				console.log('error**** video')
			}
			console.log(4, reader)
		} else {
			const reader = new FileReader()
			reader.readAsDataURL(selectedFile)
			reader.onloadend = () => uploadImage(reader.result)
			reader.onerror = () => {
				console.log('error****')
			}
		}
	}

	const uploadVid = async (video) => {
		try {
			await fetch('/api/upload-video', {
				method: 'POST',
				body: JSON.stringify({ data: video }),
				headers: { 'Content-Type': 'application/json' },
			})

			setFileInput('')
			setPreviewSource('')
		} catch (error) {
			console.log('error', error)
		}
	}

	const uploadImage = async (base64EncodedImage) => {
		try {
			await fetch('/api/upload-image', {
				method: 'POST',
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { 'Content-Type': 'application/json' },
			})

			setFileInput('')
			setPreviewSource('')
		} catch (error) {
			console.log('error++++++++', error)
		}
	}

	const getVideos = async () => {
		const res = await axios.get('/api/videos')
		console.log('get videos', res)

		setVideos((prev) => [...prev, ...res.data])
	}

	return (
		<div>
			<h1>Upload an image</h1>
			<form onSubmit={handleSubmit}>
				<input type='file' onChange={handleInputChange} value={fileInput} />
				<button type='submit'>Submit</button>
			</form>
			{previewSource &&
				(fileInput.includes('.mp4') ? (
					<video height='400' controls>
						<source src={previewSource} type='video/mp4' />
					</video>
				) : (
					<img src={previewSource} alt='kali' style={{ height: '400px' }} />
				))}
			<h1>Upload a Video</h1>
			{/* <button id="upload_widget">Upload Video</button> */}
			<button onClick={getVideos}>Show videos</button>
			<ul>
				{videos &&
					videos.map((video) => (
						<li>
							<video height='400' controls autoPlay>
								<source src={video} type='video/mp4' />
							</video>
						</li>
					))}
			</ul>
		</div>
	)
}

export default Upload
