import React, {useState, useContext, useEffect} from 'react'
import '../css/style.css'
import '../css/EditPostPage.css'
import localforage from "localforage"
import {useNavigate, useParams} from 'react-router-dom'
import {updatePost, getPostForUpdat} from '../utils/postLocalForage.js'
import {Context} from '../utils/Context.js'


const EditPostPage  = () => {
	const navigate = useNavigate()
	const [image, setImage] = useState('')
	const [imageNew, setImageNew] = useState('')
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const {check, setCheck} = useContext(Context)
	const params = useParams()

	useEffect(() => {
		getPostForUpdat(params.id, setImage, setTitle, setText)
	}, [params.id])

	const handleChengePost = () => {
		const newPost = {}
		newPost.imageNew = imageNew
		newPost.image = image
		newPost.title = title
		newPost.text = text
		updatePost(params.id, newPost, check, setCheck)
		navigate('/')	
	}

	const handleSubmitTest = () => {
		localforage.getItem('post')
			.then(posts => {
				console.log('localforage.getItem("post")', posts)
			})
		
	}

	const handledeleteImage  = () => {
		setImageNew('')
		setImage('')
	}


	return (
		<div className='EditPostPage'>

			<form  
				onSubmit={e => e.preventDefault()}
			>	
				<label className='file'>
					{
						(image === '' && imageNew === '') 
							? <>Добавить изображение</>
							: <>Изменить изображение</>
					}
					
					<input
						type='file'
						className='hidden'
						onChange={e => {
							setImageNew(e.target.files[0])
							setImage('')
						}}
					/>
				</label>
				<div className='image'>
					{
						image && <img src={URL.createObjectURL(image)} alt='картинка' />
					}
					{
						imageNew && <img src={URL.createObjectURL(imageNew)} alt='картинка' />
					}
				</div>
				<div className='context'>
					<label>
						Заголовок поста:
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							placeholder='Заголовок...'
						/>
					</label>
					<label>
						Текст поста:
						<textarea
							rows='5'
							type='text'
							value={text}
							onChange={e => setText(e.target.value)}
							placeholder='Текст...'
						/>
					</label>
				</div>
				<div className='button_sibmit'>

					<button onClick={handleChengePost} className='submit'>Изменить</button>
					
					

					<button onClick={handledeleteImage} className='submit'>Удалить изображение</button>

					<button onClick={() => navigate('/')} className='submit'>Отмена</button>
				</div>
			</form>
		</div>
	)
}

export default EditPostPage