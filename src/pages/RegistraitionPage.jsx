import React, {useState, useContext, useEffect} from 'react'
import '../css/style.css'
import '../css/RegistrationPage.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {registerUser} from '../utils/authLocalForage.js'
import {Context} from '../utils/Context.js'


import localforage from "localforage"



const RegistrationPage  = () => {
	const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [statuse, setStatuse] = useState('')
	const {auth, setAuth} = useContext(Context)

	useEffect(() => {
		if(auth) {
				navigate('/')
			}	
	}, [auth, navigate])

	const handleSubmit = () => {
			registerUser(username, password, setAuth, setStatuse)	
	}

	const handleName = (e) => {
		setUsername(e.target.value)
		setStatuse('')
	}

	const handleRemoveLocal = () => {
			localforage.removeItem('users')
			console.log('Все юзеры удалены')
	}

	return (
		<div className='RegistrationPage'>
			<h1>Регистрация</h1>
			<form onSubmit={e => e.preventDefault()}>
				<label>
					<span>
						<span>Имя:</span> 
							{
								statuse === '404' && (
									<span className='red'>Выберите другое имя</span>
								)
							}	
					</span>
					<input 
						type='text'
						placeholder='Username'
						value={username}
						onChange={e => {handleName(e)}}
					/>
				</label>
				<label>
					Пароль:
					<input 
						type='password'
						placeholder='Username'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</label>
				<div className='login'>
					<button onClick={handleSubmit}>Зарегистрироваться</button>

					<button onClick={handleRemoveLocal}>Удалить</button>

					<NavLink to='/login'>Login</NavLink>
				</div>
			</form>

			

		</div>
	)
}

export default RegistrationPage