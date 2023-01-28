import React, {useState, useContext} from 'react'
import '../css/style.css'
import '../css/RegistrationPage.css'
import {NavLink} from 'react-router-dom'
import {registerUser} from '../utils/authLocalForage.js'
import {Context} from '../utils/Context.js'


import localforage from "localforage"



const RegistrationPage  = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const {auth, setAuth} = useContext(Context)

	const handleSubmit = () => {
			registerUser(username, password, setAuth)
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
					Имя:
					<input 
						type='text'
						placeholder='Username'
						value={username}
						onChange={e => setUsername(e.target.value)}
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
					<NavLink to='/login'>Login</NavLink>
				</div>
			</form>

			<button style={{color: 'white', margin: '20px 0'}} onClick={handleRemoveLocal}>
				Удалить всех юзеров
			</button>

		</div>
	)
}

export default RegistrationPage