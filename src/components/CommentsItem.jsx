import '../css/style.css'
import '../css/CommentsItem.css'

const CommentsItem = ({comment, token}) => {

	return (
		<div className={comment.authorID !== token ? 'CommentsItem' : 'CommentsItem right'} >	

			<div className={comment.authorID !== token ? 'CommentsItem__wrappe' : 'CommentsItem__wrappe right'} >

				<div className='CommentsItem__name'>
					{
						comment.authorID === token 
							? (<p>Вы</p>) 
							: (<p>{comment.authName}</p>)
					}
				</div>

				<div className='CommentsItem__date'>
					<p>{comment.datedate}</p>
				</div>

				<div className='CommentsItem__text'>
					<p>{comment.text}</p>
				</div>

			</div> {/*  END CommentsItem__wrappe  */}

		</div>  
	)
}

export default CommentsItem