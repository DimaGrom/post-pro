import React, {useEffect, useState} from 'react'
import '../css/style.css'
import '../css/MainPage.css'
import {useNavigate} from 'react-router-dom'
import localforage from "localforage"
import {getAllPosts} from '../utils/postLocalForage.js'
import PostItem from '../components/PostItem.jsx'


const MainPage = () => {
	const navigate = useNavigate()
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getAllPosts(setPosts)
	}, [])

	const handleCreatePost = () => {
		navigate('/new')
	}

	if(!posts.length) {
		return (
			<div className='MainPage'>
				<div className='not_post'>
					<h2>Постов нет</h2>
					<div className='addpost'>
						<button onClick={handleCreatePost}>Создать пост</button>
					</div>
				</div>	
			</div>
		)
	}

	return (
		<div className='MainPage'>

			<div className="posts">
				{
					posts && posts.map((m, k) => <PostItem key={k} post={m} />)
				}
			</div> 

		</div>
	)
}

export default MainPage