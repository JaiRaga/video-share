import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Drawer from '../layout/Drawer'
import Video from '../video/Video'
import Videos from '../video/Videos'
import { loadVideos } from '../../redux/actions/videos'

const useStyles = makeStyles((theme) => ({
	drawer: {
		margin: 5,
	},
	videos: {
		marginLeft: 8,
		marginTop: 5,
	},
	innerVideoContainer: {
		backgroundColor: '#123',
	},
}))

const Home = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadVideos())
	}, [])

	return (
		<Grid container id='home'>
			<Grid item className={classes.drawer}>
				<Drawer />
			</Grid>
			<Grid item xs={11} className={classes.videos}>
				<Videos />
			</Grid>
		</Grid>
	)
}

export default Home
