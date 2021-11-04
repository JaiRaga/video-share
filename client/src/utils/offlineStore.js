import localforage from 'localforage'

const offlineStore = async () => {
	let state
	try {
		state = await localforage.getItem('state')
	} catch (err) {
		console.log('error localforage', err)
	}

	console.log('state obtained', state)
	return state
}

export default offlineStore
