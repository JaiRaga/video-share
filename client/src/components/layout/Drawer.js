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
import { useHistory } from 'react-router'

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
	const history = useHistory()

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
				<IconButton aria-label='home' onClick={() => history.push('/')}>
					<HomeIcon />
				</IconButton>
			</Grid>
			<Grid item className={classes.iconname} onClick={() => history.push('/')}>
				Home
			</Grid>
			<Grid item>
				<IconButton aria-label='home' onClick={() => history.push('/saved')}>
					<WatchLaterIcon />
				</IconButton>
			</Grid>
			<Grid
				item
				className={classes.iconname}
				onClick={() => history.push('/saved')}>
				Saved
			</Grid>
			<Grid item>
				<IconButton aria-label='home' onClick={() => history.push('/history')}>
					<HistoryIcon />
				</IconButton>
			</Grid>
			<Grid
				item
				className={classes.iconname}
				onClick={() => history.push('/history')}>
				History
			</Grid>
			<Grid item>
				<IconButton aria-label='home' onClick={() => history.push('/setting')}>
					<SettingIcon />
				</IconButton>
			</Grid>
			<Grid
				item
				className={classes.iconname}
				onClick={() => history.push('/setting')}>
				Setting
			</Grid>
			<Grid item>
				<IconButton aria-label='home' onClick={() => history.push('/logout')}>
					<LogoutIcon />
				</IconButton>
			</Grid>
			<Grid
				item
				className={classes.iconname}
				onClick={() => history.push('/logout')}>
				Logout
			</Grid>
		</Grid>
	)
}

export default Drawer
