import {useParams} from 'react-router-dom' 

const PostPage = () => {
	const params = useParams()

	const id = params.id

	console.log(id)

	return (
		<div className='PostPage'>
			PostPage
		</div>
	)
}

export default PostPage