import localforage from "localforage"

export const getAllPosts = (set) => {
	localforage.getItem('post')
		.then(data => {
			if(data) {
				return set(data || [])
			}
		})
}

export const createPost = (post) => {
	localforage.getItem('post')
	.then(data => {
		if(data) {
			localforage.setItem('post', [...data, post])
			.then(() => {
				localforage.getItem('post')
			})
		} else {
			localforage.setItem('post', [post])
		}			
	})
}