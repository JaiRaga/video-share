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
	},
}))

const Navbar = () => {
	const classes = useStyles()
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

					<YouTube fontSize='large' />
					<Typography variant='h6' className={classes.title}>
						YouTube
					</Typography>

					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
