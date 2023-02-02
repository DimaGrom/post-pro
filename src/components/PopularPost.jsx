import '../css/style.css'
import '../css/PopularPost.css'
import popularImg from '../icons/popular_02.png'
import {NavLink} from 'react-router-dom'


const PopularPost = ({post}) => {

	if(!post) {
		return (
			<div className='PopularPost'>
				<h2>Постов нет</h2>
			</div>
		)
	}

	// console.log(post.image)

	return (
		<div className='PopularPost'>
			
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
						<img src={popularImg} alt='star' />
					</div>
					
				</div>

				
			</NavLink>
		</div>
	)
}

export default PopularPost