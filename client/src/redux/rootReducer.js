import { combineReducers } from 'redux'
import auth from './reducers/auth'
import video from './reducers/videos'

const rootReducer = combineReducers({
	auth,
	video,
})

export default rootReducer
