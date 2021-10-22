import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import Drawer from '../layout/Drawer'
import Video from '../video/Video'
import spacevid from '../../space.mp4'
import sample from '../../sample.mp4'
import Videos from '../video/Videos'

const useStyles = makeStyles((theme) => ({
	drawer: {
		margin: 5,
	},
	videos: {
		marginLeft: 10,
		// margin: '0 5px',
		// backgroundColor: '#f00',
		// backgroundColor: '#123',
	},
	innerVideoContainer: {
		backgroundColor: '#123',
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
	// const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
	const val = [1, 2, 3, 4]
	return (
		<Grid container>
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
