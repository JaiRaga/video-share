import React from 'react'
import { makeStyles } from '@material-ui/core'
import Video from '../video/Video'
import spacevid from '../../space.mp4'
import sample from '../../sample.mp4'

const useStyles = makeStyles((theme) => ({
	content: {
		// marginTop: 64,
		// toolbar: theme.mixins.toolbar,
	},
}))

// const useStyles = makeStyles((theme) => {
// 	console.log(theme.mixins.toolbar)
// 	return {
// 		content: {
// 			marginTop: theme.mixins.toolbar.minWidth === 600 ? 64 : 56,
// 		},
// 	}
// })

const Home = () => {
	const classes = useStyles()
	// console.log(classes.content.toolbar, classes.content.marginTop)
	const val = [1, 2, 3, 4]
	return (
		<div className={classes.content}>
			<h1>Hi</h1>
			{val.map((_, ind) => (
				// <Video src={ind % 2 === 0 ? spacevid : sample} />
				<Video key={ind} ind={ind} src={spacevid} />
			))}
		</div>
	)
}

export default Home
