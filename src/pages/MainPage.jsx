import React, {useEffect, useState, useContext} from 'react'
import '../css/style.css'
import '../css/MainPage.css'
import {useNavigate} from 'react-router-dom'
import localforage from "localforage"
import {getAllPosts} from '../utils/postLocalForage.js'
import PostItem from '../components/PostItem.jsx'
import {Context} from '../utils/Context.js'


const MainPage = () => {
	const navigate = useNavigate()
	const [posts, setPosts] = useState([])
	const {auth} = useContext(Context)

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

		</div>
	)
}

export default MainPage