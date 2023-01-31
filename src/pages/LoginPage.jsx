import React, {useState, useContext, useEffect} from 'react'
import '../css/style.css'
import '../css/LoginPage.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {loginUser} from '../utils/authLocalForage.js'
import {Context} from '../utils/Context.js'

const LoginPage  = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [statuse, setStatuse] = useState('')
	const {auth, setAuth} = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		if(auth) {
			navigate('/')
		}
	}, [auth])

	const handleSubmit = () => {
		loginUser(username, password, setAuth, setStatuse)
	}

	// console.log('LoginPage statuse ', statuse)

	const handleName = (e) => {
		setUsername(e.target.value)
		setStatuse('')
	}

	const handleRassword = (e) => {
		setPassword(e.target.value)
		setStatuse('')
	}

	return (
		<div className='LoginPage'>
			<h1>Авторизация</h1>
			<form onSubmit={e => e.preventDefault()}>
				<label>
					<span>
						<span>Имя:</span> 
							{
								statuse === '404' && (
									<span className='red'>Обязательно для заполнения</span>
								)
							}	
						</span>			
					<input 
						type='text'
						placeholder='Username'
						value={username}
						onChange={e => handleName(e)}
					/>
				</label>
				<label>
					<span>
						<span>Пароль:</span> 
							{
								statuse === '404' && (
									<span className='red'>Обязательно для заполнения</span>
								)
							}	
						</span>
					<input 
						type='password'
						placeholder='Username'
						value={password}
						onChange={e => handleRassword(e)}
					/>
				</label>
				<div className='login'>
					<button onClick={handleSubmit}>Войти</button>
					<NavLink to='/registration'>Нет акаунта?</NavLink>
				</div>
				<div>
					<h4 className={statuse === '404' ? ' opasity1' : ''}>Неверно имя или пароль</h4>
				</div>
			</form>
		</div>
	)
}

export default LoginPage