import '../css/style.css'
import '../css/LikePost.css'
import heartImg from '../icons/like_heart.png'
import {NavLink} from 'react-router-dom'


const LikePost = ({post}) => {

	if(!post) {
		return (
			<div className='LikePost'>
				<h2>Постов нет</h2>
			</div>
		)
	}

	return (
		<div className='LikePost'>
			
			<NavLink to={`/${post.id}`}>

				<div className='content'>

					{
						post.image 
							? (
								<div 
									className='image'
									style={{
										background: `url(${URL.createObjectURL(post.image)}) 50%/cover no-repeat`,

									}}
								>
								</div>
							) : (
								<div className='image'>	</div>
							)
					}

					<div className='star'>
						<img src={heartImg} alt='star' />
					</div>
					
				</div>

				
			</NavLink>
		</div>
	)
}

export default LikePost