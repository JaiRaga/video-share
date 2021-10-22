import React from 'react'
import {
	Grid,
	IconButton,
	makeStyles,
	Tooltip,
	useMediaQuery,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import HistoryIcon from '@material-ui/icons/History'
import SettingIcon from '@material-ui/icons/Settings'
import LogoutIcon from '@material-ui/icons/PersonOutline'

const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.between('xs', 'sm')]: {
			display: 'none',
			backgroundColor: 'red',
		},
		// backgroundColor: '#234',
		// color: '#fff',
	},
	iconname: {
		cursor: 'pointer',
		marginBottom: 10,
	},
}))

const Drawer = () => {
	const classes = useStyles()

	return (
		<Grid
			container
			item
			xs={12}
			direction='column'
			// justifyContent='flex-start'
			alignItems='flex-start'
			className={classes.drawer}>
			<Grid item>
				<IconButton aria-label='home'>
					<HomeIcon />
				</IconButton>
			</Grid>
			<Grid item className={classes.iconname}>
				Home
			</Grid>
			<Grid item>
				<IconButton aria-label='home'>
					<WatchLaterIcon />
				</IconButton>
			</Grid>
			<Grid item className={classes.iconname}>
				Saved
			</Grid>
			<Grid item>
				<IconButton aria-label='home'>
					<HistoryIcon />
				</IconButton>
			</Grid>
			<Grid item className={classes.iconname}>
				History
			</Grid>
			<Grid item>
				<IconButton aria-label='home'>
					<SettingIcon />
				</IconButton>
			</Grid>
			<Grid item className={classes.iconname}>
				Setting
			</Grid>
			<Grid item>
				<IconButton aria-label='home'>
					<LogoutIcon />
				</IconButton>
			</Grid>
			<Grid item className={classes.iconname}>
				Logout
			</Grid>
		</Grid>
	)
}

export default Drawer
