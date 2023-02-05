import React, {useState, useContext} from 'react'
import '../css/style.css'
import '../css/CommentsPage.css'
// import dateNow from '../utils/dateTime.js'
import localforage from "localforage"
import {listLikeAllPosts} from '../utils/postLocalForage.js'
import {Context} from '../utils/Context.js'
import {useParams} from 'react-router-dom'
import {createComment} from '../utils/commitLocalforage.js'


const CommentsPage = () => {
	const {token} = useContext(Context)
	const params = useParams()
	const [text, setText] = useState('')
	const [statuse, setStatuse] = useState(0)

	const handleCreateCommint = () => {
		// console.log('handleCreateCommint')
		createComment(token, params.id, text, setStatuse)
		setText('')
	}

	const handleText = (e) => {
		// console.log('handleCreateCommint')
		setText(e.target.value)
		setStatuse(0)
	}

	const handleTestUser = () => {
		localforage.getItem('users')
			.then(users => {
				console.log('users ', users)
			})
	}

	const handleTestComment = () => {
		localforage.getItem('comments')
			.then(comment => {
				console.log('comment ', comment)
			})
	}

	const handleTestPost = () => {
		localforage.getItem('post')
			.then(post => {
				console.log('post ', post)
			})
	}

	const handleTestListLikePost = () => {
				listLikeAllPosts()
	}

	return (
		<div className='CommentsPage'>
			
			<div className='CommentsPage__wraper'>

				<div className='CommentsPage__context'>

				</div> {/*END CommentsPage__context*/}

				<div className='CommentsPage__create_text'>
					<h3>Добавить комментарий</h3>

					<form onSubmit={e => e.preventDefault()} >
						<label>
							Текст поста:
							<textarea
								rows='5'
								type='text'
								value={text}
								onChange={e => handleText(e)}
								placeholder='Текст...'
							/>
						</label>
						<div className='CommentsPage__sibmit'>
							<button onClick={handleCreateCommint} className='submit'>Добавить</button>
							<button className='submit'>Отмена</button>
						</div>
					</form>

					<div style={{display: 'flex', width: '100%', color: 'white', margin: '20px 0', justifyContent: 'space-between'}} >
						<button onClick={handleTestUser} style={{color: 'white'}} >USER</button>
						<button onClick={handleTestPost} style={{color: 'white'}} >POST</button>
						<button onClick={handleTestComment} style={{color: 'white'}} >COMMENT</button>
						<button onClick={handleTestListLikePost} style={{color: 'white'}} >LIST</button>
					</div>

					{
						statuse === 404 && (
							<h3 style={{color: 'red'}}>Обязательно для заполнения</h3>
						)
					}

				</div> {/*END CommentsPage__create_text*/}

			</div> {/*END CommentsPage__wraper*/}

		</div>
	)
}

export default CommentsPage