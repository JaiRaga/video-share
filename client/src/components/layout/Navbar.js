import React, { Fragment } from 'react'
import {
	AppBar,
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
	menuButton: {
		marginRight: theme.spacing(1),
	},
	list: {
		width: 223,
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
		color: '#1976d2',
	},
	icons: {
		color: '#1976d2',
		minWidth: '35px',
		paddingRight: 20,
	},
}))

const Navbar = () => {
	const classes = useStyles()
	const history = useHistory()
	// const [open, setOpen] = React.useState(false)
	const [state, setState] = React.useState({
		left: false,
	})

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

	const guestLinks = (
		<Fragment>
			<List className={classes.list}>
				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Twitter' />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List className={classes.right}>
				<Link to='/login' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Login' />
					</ListItem>
				</Link>

				<Link to='/register' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
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
			{guestLinks}
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

					<Button color='inherit'>Login</Button>
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
