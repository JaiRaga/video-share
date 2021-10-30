import {
	GET_VIDEO,
	GET_VIDEOS,
	POST_VIDEO,
	UPDATE_VIDEO,
	DELETE_VIDEO,
} from '../actions/types'

const initialState = {
	videos: [],
	video: null,
	loading: true,
	errors: [],
}

export default (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case GET_VIDEOS:
			return {
				...state,
				videos: [...payload.data],
				loading: false,
			}
		case GET_VIDEO:
			return {
				...state,
				video: payload,
				loading: false,
			}
		case POST_VIDEO:
			return {
				...state,
				video: payload,
				loading: false,
			}
		case UPDATE_VIDEO:
			return {
				...state,
				videos: state.videos.map((video) =>
					video.id === payload.id ? payload : null
				),
				loading: false,
			}
		case DELETE_VIDEO:
			return {
				...state,
				videos: state.videos.filter((video) => video.id === payload.id),
				loading: false,
			}
		default:
			return state
	}
}
