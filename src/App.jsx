import React, {useState, useEffect} from 'react'
import Layout from './components/Layout.jsx'
import MainPage from './pages/MainPage.jsx'
import AddpostPage from './pages/AddpostPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegistrationPage from './pages/RegistraitionPage.jsx'
import PostPage from './pages/PostPage.jsx'
import EditPostPage from './pages/EditPostPage.jsx'
import {Routes, Route} from 'react-router-dom'
import {Context} from './utils/Context.js'
import {getMe} from './utils/authLocalForage.js'
import {getToken} from './utils/token.js'

const App = () => {		

	const [auth, setAuth] = useState(false)
	const [check, setCheck] = useState(false)
	const [token, setToken] = useState('')


	useEffect(() => {
		getMe(setAuth)
		getToken(setToken)
	}, [auth, check])
	
	

	return (
		<Context.Provider value={{
			auth,
			setAuth, 
			check, 
			setCheck,
			token
		}}>
			<Layout>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/new' element={<AddpostPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/registration' element={<RegistrationPage />} />
					<Route path="/:id" element={<PostPage />} />
					<Route path="/:id/edit" element={<EditPostPage />} />
				</Routes>
			</Layout>
		</Context.Provider>
	)

}

export default App