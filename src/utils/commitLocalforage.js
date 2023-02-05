import {userFind, saveNewComment} from '../controllers/commentController.js'
import {findPostBYId, saveChangePost} from '../controllers/postController.js'
import  uniqid  from 'uniqid'
import dateNow from '../utils/dateTime.js'


export const createComment = async (token, id, text, setStatuse) => {
	// console.log('token ', token)
	// console.log('id  ', id)
	// console.log('text  ', text)

	if (text === '') {
		return setStatuse(404)
	}

	const user = await userFind(token)
  // console.log('user  ', user)

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
	// console.log('post  ', post)
	post.comments += 1
	await saveChangePost(post, id)

	await saveNewComment(newComment)

}