import React, { useState } from 'react'
import {
	Grid,
	Avatar,
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	IconButton,
} from '@material-ui/core'
import clsx from 'clsx'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import Details from './Details'

const useStyle = makeStyles((theme) => ({
	video: {
		cursor: 'pointer',
		// margin: '3px 8px',
		width: 345,
	},
	root: {
		maxWidth: 345,
		margin: '6px 8px',
		objectFit: 'cover',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}))

const Video = ({ src, ind }) => {
	const classes = useStyle()
	const [expanded, setExpanded] = React.useState(false)

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

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card className={classes.root}>
			{/* <CardMedia className={classes.media}> */}
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
			{/* </CardMedia> */}
			{/* <CardContent> */}
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			{/* <Typography variant='body2' color='textSecondary' component='p'>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography> */}
			{/* </CardContent> */}
		</Card>
	)
	// <video
	// 	id={ind}
	// 	width='300'
	// 	height='200'
	// 	muted
	// 	loop
	// 	className={classes.video}
	// 	onMouseOver={handleVideoPlay}
	// 	onMouseLeave={handleVideoStop}>
	// 	<source src={src} type='video/mp4' />
	// 	Sorry, your browser doesn't support embedded videos.
	// </video>
}

export default Video
