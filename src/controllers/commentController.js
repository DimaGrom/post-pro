import localforage from 'localforage'


export const userFind = async (id) => {
	const users = await localforage.getItem('users')
	const user = await  users.find(f => f.id === id)
	return user
}

export const saveNewComment = async (comment) => {
	const comments = await localforage.getItem('comments')
	if(await comments) {
		await localforage.setItem('comments', [...comments, comment])
	} else {
		await localforage.setItem('comments', [comment])
	}
}