import localforage from 'localforage'

export const createLikeLockal = async (id, token, setLikeActive, switchLike, setSwitchLick) => {
	const posts = await localforage.getItem('post')
	const newPosts = await posts.filter(f => f.id !== id)
	const post = await posts.find(f => f.id === id)
	const checkLike = await post.like.indexOf(token)

	if(checkLike === -1) {
		post.like.push(token)
		await localforage.setItem('post', [...newPosts, post])
		setLikeActive(true)
		setSwitchLick(!switchLike)
	} else {
		post.like.splice(checkLike, 1)
		await localforage.setItem('post', [...newPosts, post])
		setLikeActive(false)
		setSwitchLick(!switchLike)
	}

	const users = await localforage.getItem('users')
	const newUsers = await users.filter(f => f.id !== token)
	const user = await users.find(f => f.id === token)
	
	const checkUserlikePost = await user.likePost.indexOf(id)
	if(checkUserlikePost === -1) {
		user.likePost.push(id)
		await localforage.setItem('users', [...newUsers, user])
	} else {
		user.likePost.splice(checkUserlikePost, 1)
		await localforage.setItem('users', [...newUsers, user])
	}
	// console.log( user)
}

export const checkLike = async (token, id, setLikeActive) => {
	const posts = await localforage.getItem('post')
	const post = await posts.find(f => f.id === id)
	const checkIsLike = post.like.indexOf(token)
	if(checkIsLike === -1) {
		setLikeActive(false)
	} else {
		setLikeActive(true)
	}
}

export const getLikePostLockal = async (setLikePost, token) => {
	const posts = await localforage.getItem('post')

	const users = await localforage.getItem('users')
	const user = await users.find(f => f.id === token)

	const likePosts = await posts.filter(f => user?.likePost.indexOf(f.id) > -1 )
	
	setLikePost(likePosts)
}