import React, {useContext} from 'react'
import '../css/style.css'
import '../css/PostItem.css'
import Moment from 'react-moment'
import viewsImg from '../icons/eye_01.png'
import commentImg from '../icons/comment_01.png'
import editImg from '../icons/edit_02.png'
import deleteImg from '../icons/delete_01.png'
import {Context} from '../utils/Context.js'
import {NavLink} from 'react-router-dom'
import {deletePost} from '../utils/postLocalForage.js'

const PostItem = ({post, auth}) => {
  const {token, check, setCheck} = useContext(Context)

	if(!post) {
		return (
			<div className='PostItem'>
				<h1>Постов нет</h1>
			</div>
		)
	}

	const handleDeletePost = () => {
		deletePost(post.id, check, setCheck)
	}

	return (
		<div className='PostItem'>

				<div className='flext'>
					<div className={post.image ? 'image' : 'notimage'}>
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
				</div>

				<div className='name'>
					<div>
						{post.authName}
					</div>
					<Moment 
					date={post.datedate} 
					format='DD MM YYYY' 
					className='PostItem__date'
				/>
				</div>

				<div className='title'>{post.title}</div>
				<div className='text line-clamp-3'>{post.text}</div>

				<div className='PostItem_icons'>
					<div className='PostItem_icons__pablic'>
						<div>
							<NavLink to={`/${post.id}`}>
								<img src={viewsImg} alt='Просмотров' />
								<span>{post.views}</span>
							</NavLink>
						</div>
						<div>
							<NavLink to={`/${post.id}/commit`}>
								<img src={commentImg} alt='Комментарии' />
								<span>{post.comments}</span>
							</NavLink>
						</div>
					</div>

					{
						post.author === token && (
							<div className='PostItem_icons__pablic edit'>
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
	)
}

export default PostItem