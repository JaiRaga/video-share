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
import { useHistory } from 'react-router-dom'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import offlineStore from '../../utils/offlineStore'

import moment from 'moment'
import dateTime from 'date-and-time'

const useStyle = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: '6px 8px',
		objectFit: 'cover',
	},
	video: {
		cursor: 'pointer',
		// margin: '3px 8px',
		width: 345,
	},
	videoTitle: {
		cursor: 'pointer',
		paddingBottom: 5,
	},
	avatar: {
		backgroundColor: red[500],
		cursor: 'pointer',
	},
	videoHeading: {
		fontSize: '1.2rem',
		fontFamily: 'Roboto, Helvetiva, Arial, sans-serif',
		fontWeight: 700,
		lineHeight: 1.43,
		letterSpacing: '0.01071em',
		margin: 0,
	},
	videoDate: {
		color: 'rgba(0, 0, 0, 0.54)',
		fontSize: '0.875rem',
		fontFamily: 'Roboto, Helvetiva, Arial, sans-serif',
		fontWeight: 400,
		lineHeight: 1.43,
		letterSpacing: '0.01071em',
		margin: 0,
	},
	parent: {
		display: 'flex',
	},
	username: {
		marginTop: 0,
		marginBottom: 5,
		marginLeft: 73,
		padding: 0,
		fontSize: '0.89rem',
		cursor: 'pointer',
	},
	views: {
		marginTop: 0,
		marginLeft: 10,
		fontSize: '0.89rem',
	},
}))

const Video = ({ _id, secureUrl, owner, title, date }) => {
	const classes = useStyle()
	const history = useHistory()
	let captalizedTitle = title.split('')
	captalizedTitle[0] = captalizedTitle[0].toUpperCase()
	console.log(captalizedTitle)
	captalizedTitle = captalizedTitle.join('')
	console.log(captalizedTitle)

	const [expanded, setExpanded] = React.useState(false)

	console.log('date', date)
	// console.log('js Date', new Date())
	// console.log('dt', dateTime.format(new Date(), 'YYYY/MM/DD HH:mm:ss'))
	console.log('moment', moment(date).format('MMMM Do YYYY, h:mm:ss a'))

	date = moment(date).format('h:mm a, MMMM Do YYYY')

	const handleVideoPlay = () => {
		const vid = document.getElementById(_id)
		vid.play()
	}

	const handleVideoStop = () => {
		const vid = document.getElementById(_id)
		vid.pause()
	}

	const videoTitle = (
		<p
			className={classes.videoHeading}
			onClick={() => history.push(`/video/${_id}`)}>
			{captalizedTitle}
		</p>
	)

	const videoDate = (
		<p
			className={classes.videoDate}
			onClick={() => history.push(`/video/${_id}`)}>
			{date}
		</p>
	)

	return (
		<Card className={classes.root}>
			<video
				id={_id}
				width='300'
				height='200'
				muted
				loop
				className={classes.video}
				onClick={() => history.push(`/video/${_id}`)}
				onMouseOver={handleVideoPlay}
				onMouseLeave={handleVideoStop}>
				<source src={secureUrl} type='video/mp4' />
				Sorry, your browser doesn't support embedded videos.
			</video>
			{/* </CardMedia> */}
			{/* <CardContent> */}
			<CardHeader
				avatar={
					<Avatar
						aria-label='recipe'
						className={classes.avatar}
						onClick={() => history.push(`/video/${_id}`)}>
						{owner.username[0]}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={videoTitle}
				subheader={videoDate}
				className={classes.videoTitle}
			/>
			<div className={classes.parent}>
				<p
					className={classes.username}
					onClick={() => history.push(`/profile/${owner._id}`)}>
					{owner.username.charAt(0).toUpperCase() + owner.username.slice(1)}
				</p>
				<p className={classes.views}>32M views</p>
			</div>
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
