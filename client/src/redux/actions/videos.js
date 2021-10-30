import axios from 'axios'
import {
	GET_VIDEOS,
	GET_VIDEO,
	POST_VIDEO,
	UPDATE_VIDEO,
	DELETE_VIDEO,
} from './types'

export const loadVideos = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/videos')
		dispatch({ type: GET_VIDEOS, payload: res })
	} catch (err) {
		console.log('getVideos action', err)
	}
}

export const getVideo = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/video/${id}`)
		dispatch({ type: GET_VIDEO, payload: res })
	} catch (err) {
		console.log('getVideo action', err)
	}
}

export const postVideo = (video) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	const body = JSON.stringify({ data: video })
	try {
		const res = await axios.post(`/api/upload-video`, body, config)
		dispatch({ type: POST_VIDEO, payload: res.data })
	} catch (err) {
		console.log('', err)
	}
}

export const updateVideo = (video, id) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	const body = JSON.stringify({ video })
	try {
		const res = await axios.patch(`/api/video/${id}`, body, config)
		dispatch({ type: UPDATE_VIDEO, payload: res.data })
	} catch (err) {
		console.log('', err)
	}
}

export const deleteVideo = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/video/${id}`)
		dispatch({ type: DELETE_VIDEO, payload: id })
	} catch (err) {
		console.log('', err)
	}
}
