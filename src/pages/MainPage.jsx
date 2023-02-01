import React, {useEffect, useState, useContext} from 'react'
import '../css/style.css'
import '../css/MainPage.css'
import {useNavigate} from 'react-router-dom'
import {getAllPosts, popularPosts} from '../utils/postLocalForage.js'
import PostItem from '../components/PostItem.jsx'
import PopularPost from '../components/PopularPost'
import popularImg from '../icons/popular_04.png'
import loveImg from '../icons/like_01.png'
import {Context} from '../utils/Context.js'


const MainPage = () => {
	const navigate = useNavigate()
	
	const [posts, setPosts] = useState([])
	const [populat, setPopular] = useState([])
	const [live, setLove] = useState(null)
	const {auth, check} = useContext(Context)
	const [color, setColor] = useState(true)

	const colorWiteAction = {border: 'solid white 2px'}

	// console.log(populat)

	useEffect(() => {
		getAllPosts(setPosts)
		popularPosts(setPopular)
	}, [check])

	const handleCreatePost = () => {
		navigate('/new')
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
					<img onClick={() => setColor(!color)} style={color ? colorWiteAction : undefined } src={popularImg} alt='Популярные' />
					<img onClick={() => setColor(!color)} style={color ? undefined : colorWiteAction} src={loveImg} alt='Любимые' />
				</div>
				{
					(populat && color) && populat.map((m, k) => <PopularPost key={k} post={m} />)
				}
				{
					(live && color) && <div>LIKE</div>
				}
			</div>

		</div>
	)
}

export default MainPage