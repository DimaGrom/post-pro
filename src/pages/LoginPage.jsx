import React, {useState, useContext, useEffect} from 'react'
import '../css/style.css'
import '../css/LoginPage.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {loginUser} from '../utils/authLocalForage.js'
import {Context} from '../utils/Context.js'

const LoginPage  = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const {auth, setAuth} = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		if(auth) {
			navigate('/')
		}
	}, [auth])

	const handleSubmit = () => {
		loginUser(username, password, setAuth)
	}

	return (
		<div className='LoginPage'>
			<h1>Авторизация</h1>
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
					<button onClick={handleSubmit}>Войти</button>
					<NavLink to='/registration'>Нет акаунта?</NavLink>
				</div>
			</form>
		</div>
	)
}

export default LoginPage