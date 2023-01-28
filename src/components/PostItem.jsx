import React, {useContext} from 'react'
import '../css/style.css'
import '../css/PostItem.css'
import Moment from 'react-moment'
import viewsImg from '../icons/eye_01.png'
import commentImg from '../icons/comment_01.png'
import editImg from '../icons/edit_02.png'
import deleteImg from '../icons/delete_01.png'
import {Context} from '../utils/Context.js'

const PostItem = ({post, auth}) => {
  const {token} = useContext(Context)

	if(!post) {
		return (
			<div className='PostItem'>
				<h1>Постов нет</h1>
			</div>
		)
	}

	//console.log('post PostItem ', post)
	console.log('post, auth PostItem ', post.author, auth)

	return (
		<div className='PostItem'>

			<div className='flext'>
				<div className='image'>
					{
						post.image && (
							<img
								src={URL.createObjectURL(post.image)}
								alt='Картинк'
							/>
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
						<img src={viewsImg} alt='Просмотров' />
						<span>{post.views}</span>
					</div>
					<div>
						<img src={commentImg} alt='Комментарии' />
						<span>{post.comments}</span>
					</div>
				</div>

				{
					post.author === token && (
						<div className='PostItem_icons__pablic edit'>
							<div>
								<img src={editImg} alt='Просмотров' />
							</div>
							<div>
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