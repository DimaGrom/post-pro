import {userFind, saveNewComment, getCoomitsForPostController} from '../controllers/commentController.js'
import {findPostBYId, saveChangePost} from '../controllers/postController.js'
import  uniqid  from 'uniqid'
import dateNow from '../utils/dateTime.js'


export const createComment = async (token, id, text, setStatuse, check, setCheck) => {

	if (text === '') {
		return setStatuse(404)
	}

	const user = await userFind(token)

  const newComment = {
			authName: user.userName,
			adressComment: id,
			id: uniqid(),
			text,
			authorID: token,
			datecreate: Date.now(),
			datedate: dateNow(),
      timestamps: true
		}

	// Получаю пост по id для изменения поля comments
	const post = await findPostBYId(id)
	post.comments += 1
	await saveChangePost(post, id)
	await saveNewComment(newComment)
	return setCheck(!check)
}

export const getCoomits = async (set, id) => {
	const comments = await getCoomitsForPostController(id)
	return await set(comments)
}