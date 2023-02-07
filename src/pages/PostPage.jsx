import React, {useEffect, useState, useContext} from 'react'
import '../css/style.css'
import '../css/PostPage.css'
import Moment from 'react-moment'
import viewsImg from '../icons/eye_01.png'
import commentImg from '../icons/comment_01.png'
import editImg from '../icons/edit_02.png'
import deleteImg from '../icons/delete_01.png'
import likeImg from '../icons/heart_01.png'
import likeActiveImg from '../icons/heart_02.png'
import popularImg from '../icons/popular_04.png'
import loveImg from '../icons/like_01.png'
import {Context} from '../utils/Context.js'
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import {getPostById, deletePost, popularPosts} from '../utils/postLocalForage.js'
import {createLikeLockal, checkLike, getLikePostLockal} from '../utils/likeLocalForage.js'
import PopularPost from '../components/PopularPost'
import LikePost from '../components/LikePost.jsx'


const PostPage = () => {
	const params = useParams()
	const navigate = useNavigate()
	const [post, setPost] = useState('')
	const [populat, setPopular] = useState([])
	const [likepost, setLikePost] = useState([])
	const {auth, token, check, setCheck} = useContext(Context)
	const [switchLike, setSwitchLick] = useState(true)
	const [colorPopul, setColorPopula] = useState(true)
	const [colorLike, setColorLike] = useState(false)
	const [likeActive, setLikeActive] = useState(false)
	const colorWiteAction = {border: 'solid white 2px'}

	useEffect(() => {
		getPostById(params.id, setPost, token)
		popularPosts(setPopular)
		getLikePostLockal(setLikePost, token, setSwitchLick)
		checkLike(token, params.id, setLikeActive)
	}, [params.id, token])


	if(!post) {
		return (
			<div className='PostPage'>
				<h1>Постов нет</h1>
			</div>
		)
	} 

	const handleLove = () => {
		createLikeLockal(params.id, token, setLikeActive, switchLike, setSwitchLick)
	}

	const handleDeletePost = () => {
		deletePost(params.id, check, setCheck)
		navigate('/')
	}

	const handleLicke = () => {
		setColorLike(true)
		setColorPopula(false)
	}

	const handlePopul = () => {
		setColorPopula(true)
		setColorLike(false)
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
					{
						(auth && token) && (
							<div
							 className={post.image ? 'like' : 'notImg'}
							 onClick={handleLove}
							>
								{	
									likeActive && token 
										? (
											<img
												src={likeActiveImg}
												alt='Like'
											/>
										) : (
											<img
												src={likeImg}
												alt='Like'
											/>
										)
										
								}
							</div>
						)
					}	
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
							<NavLink  to={`/${post.id}/commit`} >
								<img src={commentImg} alt='Комментарии' />
								<span>{post.comments}</span>
							</NavLink>
						</div>
					</div>

					{
						post.author === token && (
							<div className='PostPage_icons__pablic edit'>
								<div>
									<NavLink to={`/${post.id}/edit`}>
										<img src={editImg} alt='Просмотров' />
									</NavLink>
								</div>
								<div onClick={handleDeletePost}>
									<img src={deleteImg} alt='Комментарии' />
								</div>
							</div>
						)
					}
				
				</div>

			</div>

			<div className="popular">

				{
					(auth && token) && (
						<div className='popular__icon'>
							<img
								 onClick={handlePopul} 
								 style={colorPopul ? colorWiteAction : undefined } 
								 src={popularImg} 
								 alt='Популярные' 
							 />

							<img 
								onClick={handleLicke} 
								style={colorLike ? colorWiteAction : undefined } 
								src={loveImg} 
								alt='Любимые' 
							/>
						</div>
					)
				}	

				{
					(populat && colorPopul) && populat.map((m, k) => <PopularPost key={k} post={m} />)
				}
				{
					(likepost && colorLike) && likepost.map((m, k) => <LikePost key={k} post={m} />)
				}
			</div>

		</div>
	)
}

export default PostPage