import React, { useState } from 'react'
import axios from 'axios'
import { Grid, Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	title: {
		marginTop: 10,
	},
	form: {},
	input: {
		visibility: 'hidden',
	},
	uploadBtn: {
		display: 'inline-flex',
		cursor: 'pointer',
		border: '1px solid rgba(0, 10, 255, 0.23)',
		padding: '5px 15px',
		fontSize: '0.875rem',
		boxSizing: 'border-box',
		fontFamily: 'Roboto, Helvetica, Arial',
		fontWeight: 500,
		lineHeight: '1.75',
		borderRadius: 4,
		letterSpacing: '0.02857em',
		textTransform: 'uppercase',
		backgroundColor: 'transparent',
		color: 'rgba(0, 0, 0, 0.87)',
		[theme.breakpoints.down(485)]: {
			display: 'flex',
			justifyContent: 'center',
		},
	},
	submitBtn: {
		[theme.breakpoints.down(485)]: {
			display: 'flex',
			justifyContent: 'center',
			margin: 'auto',
		},
	},
	preview: {
		marginTop: 10,
	},
}))

const Upload = () => {
	const classes = useStyles()
	const [fileInput, setFileInput] = useState('')
	const [selectedFile, setSelectedFile] = useState()
	const [previewSource, setPreviewSource] = useState('')
	const [videos, setVideos] = useState([])
	// const [] = useState()

	const handleInputChange = (e) => {
		const file = e.target.files[0]
		console.log('files', e.target.files)
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
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'>
			<Typography variant='h4' className={classes.title}>
				Upload a Video
			</Typography>
			<Grid item className={classes.form}>
				<form onSubmit={handleSubmit}>
					{/* <Grid container item justifyContent='center'>
						<Grid item> */}
					<label for='files' className={classes.uploadBtn}>
						Select Video
					</label>
					<input
						id='files'
						type='file'
						onChange={handleInputChange}
						value={fileInput}
						className={classes.input}
					/>
					{/* </Grid>
					</Grid> */}
					<Button
						type='submit'
						variant='outlined'
						className={classes.submitBtn}>
						Submit
					</Button>
				</form>
			</Grid>
			<Grid item className={classes.preview}>
				{previewSource &&
					(fileInput.includes('.mp4') ? (
						<video height='400' controls>
							<source src={previewSource} type='video/mp4' />
						</video>
					) : (
						<img src={previewSource} alt='kali' style={{ height: '400px' }} />
					))}
			</Grid>
		</Grid>
	)
}

export default Upload
