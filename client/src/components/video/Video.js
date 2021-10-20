import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
	video: {
		cursor: 'pointer',
	},
}))

const Video = ({ src, ind }) => {
	const classes = useStyle()

	const handleVideoPlay = () => {
		console.log('hello')
		const vid = document.getElementById(ind)
		console.log(vid)
		vid.play()
	}

	const handleVideoStop = () => {
		console.log('Bye')
		const vid = document.getElementById(ind)
		console.log(vid)
		vid.pause()
	}

	return (
		<video
			id={ind}
			width='300'
			height='200'
			muted
			loop
			className={classes.video}
			onMouseOver={handleVideoPlay}
			onMouseLeave={handleVideoStop}>
			<source src={src} type='video/mp4' />
			Sorry, your browser doesn't support embedded videos.
		</video>
	)
}

export default Video
