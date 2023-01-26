import '../css/style.css'

const PostItem = ({post}) => {

	if(!post) {
		return (
			<div className='PostItem'>
				<h1>Постов нет</h1>
			</div>
		)
	}

	console.log('post PostItem ', post)

	return (
		<div className='PostItem'>
			PostItem

			<div className='PostItem__wrapper'>

				<div className='PostItem__imagin'>
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

		</div>
	)
}

export default PostItem