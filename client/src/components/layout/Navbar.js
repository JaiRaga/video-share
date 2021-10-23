import React, { Fragment } from 'react'
import {
	AppBar,
	Grid,
	makeStyles,
	Toolbar,
	Typography,
	IconButton,
	Button,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	SwipeableDrawer,
} from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import YouTube from '@material-ui/icons/YouTube'
import HomeIcon from '@material-ui/icons/Home'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import HistoryIcon from '@material-ui/icons/History'
import SettingIcon from '@material-ui/icons/Settings'
import LogoutIcon from '@material-ui/icons/PersonOutline'

import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonIcon from '@material-ui/icons/Person'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import AdjustIcon from '@material-ui/icons/Adjust'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		[theme.breakpoints.down('sm')]: {
			marginBottom: 56,
		},
		[theme.breakpoints.up('sm')]: {
			marginBottom: 64,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	display: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	list: {
		width: 223,
		display: 'block',
	},
	title: {
		flexGrow: 1,
		fontWeight: 700,
		cursor: 'pointer',
	},
	youtubeIcon: {
		cursor: 'pointer',
	},
	link: {
		textDecoration: 'none',
		color: '#fff',
	},
	icons: {
		color: '#fff',
		minWidth: '35px',
		// paddingRight: 25,
	},
	drawerIcons: {
		color: '#000',
		minWidth: '35px',
		marginRight: 15,
		marginBottom: 3,
	},
	drawerLink: {
		textDecoration: 'none',
		color: '#000',
	},
	right: {
		display: 'flex',
		marginLeft: 'auto',
	},
}))

const Navbar = () => {
	const classes = useStyles()
	const history = useHistory()
	// const [open, setOpen] = React.useState(false)
	const [state, setState] = React.useState({
		left: false,
	})
	const { isAuthenticated, loading } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	// const handleDrawerOpen = () => {
	// 	setOpen(true)
	// }

	// const handleDrawerClose = () => {
	// 	setOpen(false)
	// }

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ [anchor]: open })
	}

	const authLinks = (
		<Fragment>
			<List className={classes.right}>
				<Link to='/' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Home' />
					</ListItem>
				</Link>

				<Link to='/profile' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonPinIcon />
						</ListItemIcon>
						<ListItemText primary='Profile' />
					</ListItem>
				</Link>

				<Link to='/setting' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<AdjustIcon />
						</ListItemIcon>
						<ListItemText primary='Setting' />
					</ListItem>
				</Link>

				<Link to='/' className={classes.link}>
					<ListItem button onClick={() => dispatch(logout())}>
						<ListItemIcon className={classes.icons}>
							<DirectionsRunIcon />
						</ListItemIcon>
						<ListItemText primary='Logout' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	const guestLinks = (
		<Fragment>
			<List className={classes.right}>
				<Link to='/login' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary='Login' />
					</ListItem>
				</Link>

				<Link to='/register' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<PersonAddIcon />
						</ListItemIcon>
						<ListItemText primary='Register' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	// For Drawer
	const drawerAuthLinks = (
		<Fragment>
			<List>
				<Link to='/' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon className={classes.drawerIcons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Home' />
					</ListItem>
				</Link>

				<Link to='/profile' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon className={classes.drawerIcons}>
							<PersonPinIcon />
						</ListItemIcon>
						<ListItemText primary='Profile' />
					</ListItem>
				</Link>

				<Link to='/setting' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon className={classes.drawerIcons}>
							<AdjustIcon />
						</ListItemIcon>
						<ListItemText primary='Setting' />
					</ListItem>
				</Link>

				<Link to='/' className={classes.drawerLink}>
					<ListItem button onClick={() => dispatch(logout())}>
						<ListItemIcon className={classes.drawerIcons}>
							<DirectionsRunIcon />
						</ListItemIcon>
						<ListItemText primary='Logout' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	const drawerGuestLinks = (
		<Fragment>
			<List>
				<Link to='/login' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon className={classes.drawerIcons}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary='Login' />
					</ListItem>
				</Link>

				<Link to='/register' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon className={classes.drawerIcons}>
							<PersonAddIcon />
						</ListItemIcon>
						<ListItemText primary='Register' />
					</ListItem>
				</Link>
			</List>
		</Fragment>
	)

	const list = (anchor) => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			{/* {isAuthenticated ? authLinks : guestLinks} */}

			{drawerAuthLinks}
		</div>
	)

	// console.log('###', open)
	return (
		<div className={classes.root}>
			<AppBar position='fixed' color='primary' className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						onClick={toggleDrawer('left', true)}
						// onClick={!open ? handleDrawerOpen : handleDrawerClose}
						color='inherit'
						aria-label='menu'>
						<MenuIcon />
					</IconButton>

					<YouTube
						fontSize='large'
						onClick={() => history.push('/')}
						className={classes.youtubeIcon}
					/>
					<Typography
						variant='h6'
						onClick={() => history.push('/')}
						className={classes.title}>
						YouTube
					</Typography>

					{/* {isAuthenticated && !loading ? authLinks : guestLinks} */}
					<div className={classes.display}>{authLinks}</div>
				</Toolbar>
				<SwipeableDrawer
					anchor={'left'}
					open={state['left']}
					onClose={toggleDrawer('left', false)}
					onOpen={toggleDrawer('left', true)}>
					{list('left')}
				</SwipeableDrawer>
			</AppBar>
		</div>
	)
}

export default Navbar
