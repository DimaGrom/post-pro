import React, {useEffect, useState, useContext} from 'react'
import '../css/style.css'
import '../css/MainPage.css'
import {useNavigate} from 'react-router-dom'
import {getAllPosts, popularPosts} from '../utils/postLocalForage.js'
import {getLikePostLockal} from '../utils/likeLocalForage.js'
import PostItem from '../components/PostItem.jsx'
import PopularPost from '../components/PopularPost'
import LikePost from '../components/LikePost.jsx'
import popularImg from '../icons/popular_04.png'
import loveImg from '../icons/like_01.png'
import {Context} from '../utils/Context.js'


const MainPage = () => {
	const navigate = useNavigate()
	
	const [posts, setPosts] = useState([])
	const [populat, setPopular] = useState([])
	const [likepost, setLikePost] = useState([])
	const {auth, check, token} = useContext(Context)
	const [colorPopul, setColorPopula] = useState(true)
	const [colorLike, setColorLike] = useState(false)

	const colorWiteAction = {border: 'solid white 2px'}

	useEffect(() => {
		// getAllPosts(setPosts)
		// popularPosts(setPopular)
		if(auth) {
			getLikePostLockal(setLikePost, token)
		} else {
			setColorPopula(true)
		}
	}, [auth, colorPopul, colorLike])


	useEffect(() => {
		getAllPosts(setPosts)
		popularPosts(setPopular)
	}, [check])

	console.log('MainPage auth ', auth)
	console.log('MainPage populat ', populat)

	const handleCreatePost = () => {
		navigate('/new')
	}

	const handleLicke = () => {
		setColorLike(true)
		setColorPopula(false)
	}

	const handlePopul = () => {
		setColorPopula(true)
		setColorLike(false)
	}

	if(!posts.length) {
		return (
			<div className='MainPage'>
				<div className='not_post'>
					<h2>Постов нет</h2>
					<div className='addpost'>
						{
							auth && (
								<button onClick={handleCreatePost}>Создать пост</button>
							)	
						}
					</div>
				</div>	
			</div>
		)
	}

	return (
		<div className='MainPage'>

			<div className="posts">
				{
					posts && posts.map((m, k) => <PostItem key={k} post={m} auth={auth} />)
				}
			</div> 

			<div className="popular">
				<div className='popular__icon'>

					{
						(auth && token) && (
							<img
								 onClick={handlePopul} 
								 style={colorPopul ? colorWiteAction : undefined } 
								 src={popularImg} 
								 alt='Популярные' 
							/>
						)
					}

					{
						(auth && token) && (
							<img 
								onClick={handleLicke} 
								style={colorLike ? colorWiteAction : undefined } 
								src={loveImg} 
								alt='Любимые' 
							/>
						)
					}		

				</div>
				{
					(populat && colorPopul) && populat.map((m, k) => <PopularPost key={k} post={m} />)
				}
				{
					(auth && token && likepost.length !== 0 && colorLike) && likepost.map((m, k) => <LikePost key={k} post={m} />)
				}
			</div>

		</div>
	)
}

export default MainPage