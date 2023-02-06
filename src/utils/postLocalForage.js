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

// export const likePosts = (set, token) => {
// 	localforage.getItem('post')
// 		.then(data => {
// 			if(data) {
// 				set(data.filter(f => f.nowlike !== ''))
// 			}	
// 		})
// }

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
						post.like = []
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
						post.like = []
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

export const getPostById = (id, set, token) => {
	localforage.getItem('post')
		.then(posts => {
			if(posts) {
				const postsWithoutPost = posts.filter(f => f.id !== id)
				// console.log('postsWithoutPost ', postsWithoutPost)
				const post = posts.find(f => f.id === id)
				// console.log('post ', post)
				post.views += 1
				localforage.setItem('post', [...postsWithoutPost, post])
				const check = post.like.indexOf(token)
				if(check === -1) {
					return set(post)
				} else {
					post.nowlike = post.like[check]
					// console.log('getPostById post', post)
					return set(post)
				}
				// set(post)
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


// Лайкаем изрбранные посты
// export const setLike = (id, token, a, set) => {
// 	localforage.getItem('post')
// 		.then(posts => {
// 			const post = posts.find(f => f.id === id)
// 			const newPosts = posts.filter(f => f.id !== id)
// 			const check = post.like.find(f => f.authLike === token)
// 			if(check) {
// 				post.like = post.like.filter(f => f.authLike !== token)
// 				post.nowlike = ''
// 				localforage.setItem('post', [...newPosts, post])
// 				set(!a)
// 			} else {
// 				post.nowlike = token
// 				post.like = [...post.like, {authLike: token}]
// 				localforage.setItem('post', [...newPosts, post])
// 				set(!a)
// 			}		
// 		})
// 		.then(() => {
// 			localforage.getItem('users')
// 				.then(users => {
// 					const user = users.find(f => f.id === token)
// 					const check = user.likePost.find(f => f.postName === id)
// 					if(check) {
// 						user.likePost = user.likePost.filter(f => f.postName !== id)
// 						const newUsers = users.filter(f => f.id !== token)
// 						localforage.setItem('users', [...newUsers, user])
// 					} else {
// 						user.likePost = [...user.likePost, {postName: id}]
// 						const newUsers = users.filter(f => f.id !== token)
// 						localforage.setItem('users', [...newUsers, user])
// 					}
// 				})
// 		})
	
// }

export const getPostForUpdat = (id, setImage, setTitle, setText) => {
	localforage.getItem('post')
		.then(posts => {
			const post = posts.find(f => f.id === id)
			setImage(post.image)
			setTitle(post.title)
			setText(post.text)
			// console.log('getPostForUpdat ', post)
		})
}

export const updatePost = (id, newPost, check, setCheck) => {
	localforage.getItem('post')
		.then(posts => {
			const post = posts.find(f => f.id === id)
			const newpost = posts.filter(f => f.id !== id)
			if(newPost.imageNew) {
				post.image = newPost.imageNew
			} else if (newPost.image) {
				post.image = newPost.image
			} else {
				post.image = ''
			}
			post.title = newPost.title
			post.text = newPost.text
			localforage.setItem('post', [...newpost, post])
			setCheck(!check)
		})	
}

// Список избранных постов

export const listLikeAllPosts = () => {
	
	console.log('listLikeAllPosts posts ')
}