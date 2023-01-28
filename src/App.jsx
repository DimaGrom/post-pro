import React, {useState, useEffect} from 'react'
import Layout from './components/Layout.jsx'
import MainPage from './pages/MainPage.jsx'
import AddpostPage from './pages/AddpostPage.jsx'
import CongrachulatePage from './pages/CongrachulatePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegistrationPage from './pages/RegistraitionPage.jsx'
import {Routes, Route} from 'react-router-dom'
import {Context} from './utils/Context.js'
import {getMe} from './utils/authLocalForage.js'


const App = () => {		

	const [auth, setAuth] = useState(false)

	useEffect(() => {
		getMe(setAuth)
	}, [])
	
	// console.log('auth ', auth)	

	return (
		<Context.Provider value={{auth, setAuth}}>
			<Layout>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/new' element={<AddpostPage />} />
					<Route path='/cong' element={<CongrachulatePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/registration' element={<RegistrationPage />} />
				</Routes>
			</Layout>
		</Context.Provider>
	)

}

export default App