import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Routes
import PrivateRoute from './components/routing/PrivateRoute'

// Components
import Navbar from './components/layout/Navbar'
import { Drawer } from '@material-ui/core'
import Home from './components/home/Home'
import Upload from './components/video/Upload'
// import Landing from "./component/layout/Landing";
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import VideoPage from './components/video/VideoPage'
// import ProfileContainer from "./component/profile/ProfileContainer";
// import Dashboard from "./component/dashboard/Dashboard";
// import Profiles from "./component/Profiles/Profiles";
// import Profile from "./component/profile/Profile";
// import Followers from "./component/Profiles/Followers";
// import Following from "./component/Profiles/Following";
// import Setting from "./component/profile/Setting";

// Redux
import store from './redux/store'
import { loadUser } from './redux/actions/auth'
import { loadVideos } from './redux/actions/videos'

// utils
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
		store.dispatch(loadVideos())
	}, [])

	// console.log(moment(moment() + 36e5 * 5).twitter());

	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Drawer />

				<Switch>
					<Route exact path='/register' component={Register} />
					<Route exact path='/Login' component={Login} />
					<Route exact path='/' component={Home} />
					<Route exact path='/upload' component={Upload} />
					<Route exact path='/video/:id' component={VideoPage} />
					{/* <PrivateRoute exact path='/profile' component={ProfileContainer} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/followers' component={Followers} />
            <PrivateRoute exact path='/following' component={Following} />
            <PrivateRoute exact path='/setting' component={Setting} /> */}
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
