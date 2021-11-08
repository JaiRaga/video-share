import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import moment from 'moment'
import offlineStore from '../../utils/offlineStore'
import Video from './Video'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '1rem',
		// backgroundColor: '#999',
	},
	videoDisplay: {
		// backgroundColor: '#666',
	},
	videoPlayer: {
		marginTop: 10,
		width: '100%',
		height: '550px',
	},
}))

const VideoPage = (props) => {
	// localforage
	const offlineState = offlineStore
	console.log('video page', offlineState)

	const classes = useStyles()
	// console.log(props)
	// console.log(props.match.params.id)
	const videoId = props.match.params.id
	const { videos } = useSelector((state) => state.video)
	const video = videos.filter((video) => video._id === videoId)
	// console.log(video)
	const { secure_url, title, description, createdAt } = video[0]
	// console.log(secure_url)

	const date = moment(createdAt).format('h:mm a, MMMM Do YYYY')
	return (
		<Grid container className={classes.root}>
			<Grid
				container
				item
				xs={12}
				direction='column'
				// alignItems='center'
				className={classes.videoDisplay}>
				<video controls autoPlay className={classes.videoPlayer}>
					<source src={secure_url} type='video/mp4' />
					Sorry, your browser doesn't support embedded videos.
				</video>
				<Typography variant='h4' className={classes.title}>
					{title}
				</Typography>
				<Typography variant='body1' className={classes.title}>
					{description}
				</Typography>
				<Typography>{date}</Typography>
			</Grid>
		</Grid>
	)
}

export default VideoPage
