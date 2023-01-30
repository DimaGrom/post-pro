import localforage from "localforage"

export const getToken = (set) => {
	localforage.getItem('token')
		.then(token => {
			set(token)
		})
}