import react from 'react'
import '../css/style.css'
import '../css/Navbar.css'
import {NavLink} from 'react-router-dom'


const Navbar = () => {

	const isActiveStyle = {opacity: '1'}

	return (
		<div className='Navbar'>
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
		</div>
	)
}

export default Navbar