import '../css/style.css'
import '../css/CongrachulatePage.css'
import {NavLink} from 'react-router-dom'

const CongrachulatePage = () => {

	return (
		<div className='CongrachulatePage'>
			<h1>Пост создан</h1>
			<div>
				<NavLink to='/'>На главную</NavLink>
			</div>
			<div>
				<NavLink to='/new'>Содать пост</NavLink>
			</div>
		</div>
	)
}

export default CongrachulatePage