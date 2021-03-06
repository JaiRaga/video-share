import { createTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#e00404',
		},
		secondary: {
			main: '#1597E5',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
})

export default theme
