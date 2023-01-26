import React, {useState} from 'react'
import '../css/style.css'
import '../css/AddpostPage.css'
import localforage from "localforage"
import {useNavigate} from 'react-router-dom'
import {createPost} from '../utils/postLocalForage.js'

const AddpostPage  = () => {
	const navigate = useNavigate()
	const [image, setimage] = useState('')
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')


	const handleSubmit = () => {
		const post = {}
		post.image = image
		post.title = title
		post.text = text

		createPost(post)
		navigate('/')
	}

	const handleSubmitTest = () => {
		localforage.getItem("post")
			.then(val => {
    		console.log("post: ", val)
    	})
		
	}

	const handleSubmitremove = () => {
		localforage.removeItem('post')
	}

	return (
		<div className='AddpostPage'>
			<h1>Добавить пост</h1>
			<form  
				onSubmit={e => e.preventDefault()}
			>	
				<label className='file'>
					Прикрепить изображение
					<input
						type='file'
						className='hidden'
						onChange={e => setimage(e.target.files[0])}
					/>
				</label>
				<div className='image'>
					{
						image && <img src={URL.createObjectURL(image)} alt='картинка' />
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

					<button onClick={handleSubmit} className='submit'>Добавить</button>
					<button onClick={handleSubmitTest} className='submit'>Тест</button>

					<button onClick={handleSubmitremove} className='submit'>Очистить</button>

					<button onClick={() => navigate('/')} className='submit'>Отмена</button>
				</div>
			</form>
		</div>
	)
}

export default AddpostPage