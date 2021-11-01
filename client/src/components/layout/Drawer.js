import React from 'react'
import {
	Grid,
	IconButton,
	makeStyles,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import HistoryIcon from '@material-ui/icons/History'
import SettingIcon from '@material-ui/icons/Settings'
import LogoutIcon from '@material-ui/icons/PersonOutline'
import { useHistory } from 'react-router'
import { logout } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.between('xs', 'sm')]: {
			display: 'none',
			backgroundColor: 'red',
		},
	},
	iconname: {
		cursor: 'pointer',
		marginBottom: 10,
		textAlign: 'center',
	},
	iconFont: {
		fontSize: '0.7em',
	},
}))

const Drawer = () => {
	const classes = useStyles()
	const history = useHistory()
	const dispatch = useDispatch()
	const { user, isAuthenticated } = useSelector((state) => state.auth)

	return (
		<Grid
			container
			item
			xs={12}
			direction='column'
			// justifyContent='flex-start'
			// alignItems='flex-start'
			className={classes.drawer}>
			{!user && !isAuthenticated ? (
				<>
					<Grid item>
						<IconButton aria-label='home' onClick={() => history.push('/')}>
							<HomeIcon />
						</IconButton>
					</Grid>
					<Grid
						item
						className={classes.iconname}
						onClick={() => history.push('/')}>
						<Typography
							align='center'
							variant='button'
							className={classes.iconFont}>
							Home
						</Typography>
					</Grid>
				</>
			) : (
				<>
					<Grid item>
						<IconButton aria-label='home' onClick={() => history.push('/')}>
							<HomeIcon />
						</IconButton>
					</Grid>
					<Grid
						item
						className={classes.iconname}
						onClick={() => history.push('/')}>
						<Typography
							align='center'
							variant='button'
							className={classes.iconFont}>
							Home
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							aria-label='home'
							onClick={() => history.push('/saved')}>
							<WatchLaterIcon />
						</IconButton>
					</Grid>
					<Grid
						item
						className={classes.iconname}
						onClick={() => history.push('/saved')}>
						<Typography
							align='center'
							variant='button'
							className={classes.iconFont}>
							Saved
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							aria-label='home'
							onClick={() => history.push('/history')}>
							<HistoryIcon />
						</IconButton>
					</Grid>
					<Grid
						item
						className={classes.iconname}
						onClick={() => history.push('/history')}>
						<Typography
							align='center'
							variant='button'
							className={classes.iconFont}>
							History
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							aria-label='home'
							onClick={() => history.push('/setting')}>
							<SettingIcon />
						</IconButton>
					</Grid>
					<Grid
						item
						className={classes.iconname}
						onClick={() => history.push('/setting')}>
						<Typography
							align='center'
							variant='button'
							className={classes.iconFont}>
							Setting
						</Typography>
					</Grid>
					<Grid item>
						<IconButton aria-label='home' onClick={() => dispatch(logout())}>
							<LogoutIcon />
						</IconButton>
					</Grid>
					<Grid
						item
						className={classes.iconname}
						onClick={() => dispatch(logout())}>
						<Typography
							align='center'
							variant='button'
							className={classes.iconFont}>
							Logout
						</Typography>
					</Grid>
				</>
			)}
		</Grid>
	)
}

export default Drawer
