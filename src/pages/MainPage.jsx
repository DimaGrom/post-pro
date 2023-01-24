import React from 'react'
import '../css/style.css'
import '../css/MainPage.css'
import {useNavigate} from 'react-router-dom'
// import {getAllPost} from '../redux/post_slice.js'
// import PostItem from '../components/PostItem.jsx'

const MainPage = () => {
	const navigate = useNavigate()
	
	const posts = []

	const handleCreatePost = () => {
		console.log(23)
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
	
			</div> 

		</div>
	)
}

export default MainPage