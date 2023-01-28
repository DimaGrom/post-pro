import React, {useState} from 'react'
import '../css/style.css'
import '../css/LoginPage.css'
import {NavLink} from 'react-router-dom'



const LoginPage  = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')


	const handleSubmit = () => {
		
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