import React, {useEffect, useState, useContext} from 'react'
import '../css/style.css'
import '../css/PostPage.css'
import Moment from 'react-moment'
import viewsImg from '../icons/eye_01.png'
import commentImg from '../icons/comment_01.png'
import editImg from '../icons/edit_02.png'
import deleteImg from '../icons/delete_01.png'
import like from '../icons/heart_01.png'
import {Context} from '../utils/Context.js'
import {NavLink, useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom' 
import {getPostById, deletePost} from '../utils/postLocalForage.js'



const PostPage = () => {
	const params = useParams()
	const navigate = useNavigate()
	const [post, setPost] = useState('')
	const {token, check, setCheck} = useContext(Context)

	useEffect(() => {
		getPostById(params.id, setPost)
	}, [params.id])

	// console.log('PostPage post ', post)

	if(!post) {
		return (
			<div className='PostPage'>
				<h1>Постов нет</h1>
			</div>
		)
	}

	const handleDeletePost = () => {
		deletePost(params.id, check, setCheck)
		navigate('/')
	}

	return (
		<div className='PostPage'>

			<div className='contentext'>

				<div className="wrapper">
					<div className={post.image ? 'flex' : 'notimage'} >
						{
							 post.image && (
									<div 
										className='image'
										style={{
										background: `url(${URL.createObjectURL(post.image)}) 50%/cover no-repeat`}}	
									>
									</div>
							 )
						}						
					</div>
					<div className='like'>
						{
							<img
								src={like}
								alte='Like'
							/>
						}
					</div>
				</div>

				<div className='name'>
					<div>
						{post.authName}
					</div>
					<Moment 
					date={post.datedate} 
					format='DD MM YYYY' 
					className='PostPage__date'
				/>
				</div>

				<div className='title'>{post.title}</div>
				<div className='text line-clamp-3'>{post.text}</div>

				<div className='PostPage_icons'>
					<div className='PostPage_icons__pablic'>
						<div>
							<NavLink to='/'>
								<img src={viewsImg} alt='Просмотров' />
								<span>{post.views}</span>
							</NavLink>
						</div>
						<div>
							<img src={commentImg} alt='Комментарии' />
							<span>{post.comments}</span>
						</div>
					</div>

					{
						post.author === token && (
							<div className='PostPage_icons__pablic edit'>
								<div>
									<img src={editImg} alt='Просмотров' />
								</div>
								<div onClick={handleDeletePost}>
									<img src={deleteImg} alt='Комментарии' />
								</div>
							</div>
						)
					}
				
				</div>

			</div>

			{/*<div className='popula'>
				POPUL
			</div>*/}

		</div>
	)
}

export default PostPage