import localforage from "localforage"
import uniqid from 'uniqid'

export const getAllPosts = (set) => {
	localforage.getItem('post')
		.then(data => {
			if(data) {
				return set(data.sort((a, b) => b.datecreate - a.datecreate) || [])
			}
		})
}

export const popularPosts = (set) => {
	localforage.getItem('post')
		.then(data => {
			if(data) {
				return set(data.sort((a, b) => +b.views - +a.views).slice(0, 5) || [])
			}
				
		})
}

export const createPost = (post, a, set) => {
	localforage.getItem('post')
	.then(data => {
		if(data) {
				localforage.getItem('token')
					.then(token => {
						if(token) {
							post.author = token
						}
					})
				localforage.getItem('users')
					.then(users => {
						if(users) {
							const user = users.find(f => f.id === post.author)
							post.authName = user.userName
						}
					})
					.then(() => {
						post.id = uniqid()
						post.views = 0
						post.comments = 0
						post.datecreate = Date.now()
						post.datedate = new Date()
						localforage.setItem('post', [...data, post])
						set(!a)
					})
		} else {
			localforage.getItem('token')
					.then(token => {
						if(token) {
							post.author = token
						}
					})
					localforage.getItem('users')
					.then(users => {
						if(users) {
							const user = users.find(f => f.id === post.author)
							post.authName = user.userName
						}
					})
					.then(() => {
						post.id = uniqid()
						post.views = 0
						post.comments = 0
						post.datecreate = Date.now()
						post.datedate = new Date()
						localforage.setItem('post', [post])
						set(!a)
					})
		}			
	})
}

export const getPostById = (id, set) => {
	localforage.getItem('post')
		.then(posts => {
			if(posts) {
				const postsWithoutPost = posts.filter(f => f.id !== id)
				// console.log('postsWithoutPost ', postsWithoutPost)
				const post = posts.find(f => f.id === id)
				// console.log('post ', post)
				post.views += 1
				localforage.setItem('post', [...postsWithoutPost, post])
				set(post)
			}
		})
}

export const deletePost = (id, a, set) => {
	localforage.getItem('post') 
		.then(posts => {
			const newPosts = posts.filter(f => f.id !== id)
			localforage.setItem('post', newPosts)
			set(!a)
			console.log('Пост удалён')
		})
}