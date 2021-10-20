import React from 'react'
import {
	AppBar,
	makeStyles,
	Toolbar,
	Typography,
	IconButton,
	Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import YouTube from '@material-ui/icons/YouTube'
import { useHistory } from 'react-router'

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
	menuButton: {
		marginRight: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
		fontWeight: 700,
		cursor: 'pointer',
	},
	youtubeIcon: {
		cursor: 'pointer',
	},
}))

const Navbar = () => {
	const classes = useStyles()
	const history = useHistory()
	return (
		<div className={classes.root}>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
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
			</AppBar>
		</div>
	)
}

export default Navbar
