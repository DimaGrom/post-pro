import React from 'react'
import Layout from './components/Layout.jsx'
import MainPage from './pages/MainPage.jsx'
import AddpostPage from './pages/AddpostPage.jsx'
import {Routes, Route} from 'react-router-dom'

const App = () => {		


	return (
		<Layout>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/new' element={<AddpostPage />} />
			</Routes>
		</Layout>
	)

}

export default App