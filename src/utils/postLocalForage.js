import localforage from "localforage"

export const getAllPosts = (set) => {
	localforage.getItem('post')
		.then(data => {
			if(data) {
				return set(data.sort((a, b) => b.datecreate - a.datecreate) || [])
			}
		})
}

export const createPost = (post) => {
	localforage.getItem('post')
	.then(data => {
		if(data) {
				localforage.getItem('token')
					.then(token => {
						if(token) {
							post.author = token
						}
					})
				post.views = 0
				post.comments = 0
				post.datecreate = Date.now()
				post.datedate = new Date()
			localforage.setItem('post', [...data, post])
			.then(() => {
				localforage.getItem('post')
			})
		} else {
			localforage.getItem('token')
					.then(token => {
						if(token) {
							post.author = token
						}
					})
			localforage.setItem('post', [post])
		}			
	})
}