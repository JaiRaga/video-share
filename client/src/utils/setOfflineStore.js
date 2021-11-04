import localforage from 'localforage'

const setOfflineStore = async (store) => {
	console.log(store)
	try {
		const state = await localforage.setItem('state', store)
		console.log('set Offline store', state)
	} catch (error) {
		console.log('from set offline store', error)
	}
}

export default setOfflineStore
