import react, {useState, useContext} from 'react'
import '../css/style.css'
import '../css/Navbar.css'
import {NavLink} from 'react-router-dom'
import {Context} from '../utils/Context.js'
import {out} from '../utils/authLocalForage.js'


const Navbar = () => {
	const isActiveStyle = {opacity: '1'}

	const {auth, setAuth} = useContext(Context)

	const handleOut  = () => {
		out()
		setAuth(!auth)
	}

	return (
		<div className='Navbar'>

			{
				auth 
					? (
						<div className='Navbar__item'>
							<NavLink 
								to='/' 
								style={({isActive}) => isActive ? isActiveStyle : undefined}
							>
								Посты
							</NavLink>
							<NavLink 
								to='/new'
								style={({isActive}) => isActive ? isActiveStyle : undefined}
							>
								Добавить посты
							</NavLink>
						</div>
					) : (
							<div className='Navbar__item'>
							<NavLink 
								to='/' 
								style={({isActive}) => isActive ? isActiveStyle : undefined}
							>
								Посты
							</NavLink>
						</div>
					)
			}

			<div className='Navbar__login'>
				{
					auth 
						? (
							<NavLink to='/' onClick={handleOut}>Выйти</NavLink>
						): (
							<NavLink to='/login'>Войти</NavLink>
						)
				}
			</div>

		</div>
	)
}

export default Navbar