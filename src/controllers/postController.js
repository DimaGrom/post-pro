import localforage from 'localforage'

export const findPostBYId = async (id) => {
	const posts = await localforage.getItem('post')	
	const post = await posts.find(f => f.id === id)
	return post
}

export const saveChangePost = async (post, id) => {
	const posts = await localforage.getItem('post')
	const newPosts = await posts.filter(f => f.id !== id)
	await localforage.setItem('post', [...newPosts, post])
}