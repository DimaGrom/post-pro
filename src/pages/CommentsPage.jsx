import React, {useState, useContext, useEffect} from 'react'
import '../css/style.css'
import '../css/CommentsPage.css'
import CommentsItem from '../components/CommentsItem.jsx'
import localforage from "localforage"
import {listLikeAllPosts} from '../utils/postLocalForage.js'
import {Context} from '../utils/Context.js'
import {useParams} from 'react-router-dom'
import {createComment, getCoomits} from '../utils/commitLocalforage.js'
import {NavLink} from 'react-router-dom'


const CommentsPage = () => {
	const {token, auth} = useContext(Context)
	const params = useParams()
	const [text, setText] = useState('')
	const [check, setCheck] = useState(true)
	const [statuse, setStatuse] = useState(0)
	const [comments, setComments] = useState([])

	useEffect(() => {
		console.log('useEffect params.id', params.id)
		getCoomits(setComments, params.id)
	}, [params.id, check])

	const handleCreateCommint = () => {
		createComment(token, params.id, text, setStatuse, check, setCheck)
		setText('')
	}

	const handleText = (e) => {
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

	const handleTestdeletAllComments = () => {
		localforage.removeItem('comments')
	}

	return (
		<div className='CommentsPage'>
			
			<div className='CommentsPage__wraper'>

				<div className='CommentsPage__create_text_nerrow'>

					{
						(token && auth) && (
							<form onSubmit={e => e.preventDefault()} >
								<label>
									<textarea
										rows='3'
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
								{
									statuse === 404 && (
										<h3 style={{color: 'red'}}>Обязательно для заполнения</h3>
									)
								}
							</form>
						)
					}			

				</div> {/*END CommentsPage__create_text_nerrow*/}

				<div className='CommentsPage__context'>
					{
						comments.length !== 0 
							? (
								comments.map(m => <CommentsItem key={m.id} comment={m} token={token} />)
							) : (
								<div className='CommentsPage__not_comment'>
									<h5>Комментариев нет</h5>
									{
										(!token && !auth) && (
											<p>
												Что-бы оставить момментарии нужно 
												<NavLink to='/registration'>зарезистрироваться
												</NavLink>
											</p>
										)
									}					
								</div>
							)
					} 
				</div> {/*END CommentsPage__context*/}

				{
					(token && auth) && (
						<div className='CommentsPage__create_text'>
							<h4>Добавить комментарий</h4>

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
								{
									statuse === 404 && (
										<h3 style={{color: 'red'}}>Обязательно для заполнения</h3>
									)
								}
							</form>

						

						</div> 
					)
				}

						

			</div> {/*END CommentsPage__wraper*/}

		</div>
	)
}

export default CommentsPage