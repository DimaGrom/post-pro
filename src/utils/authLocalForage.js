import localforage from "localforage"
import uniqid from 'uniqid'

export const registerUser = (username, password) => {
	if(username === '' && password === '') {
		return console.log('Имя и пароль должны быть заполнены.')
	}
	localforage.getItem('users')
		.then(data => {
			if(data) {
				const check = data.find(f => f.name === username)
				if(check) {
					console.log('data ', data)
					return console.log('Данное имя уже существует. Поробуйте новое имя.')
				} else {
					const newUser = {}
					newUser.name = username
					newUser.password = password
					newUser.id = uniqid()

					localforage.setItem('users', [...data, newUser])
					localforage.setItem('token', newUser.id)
					console.log('data ', data)
					return console.log('Поздравляю с регистрацией!')
				}
			} else {
				const newUser = {}
				newUser.name = username
				newUser.password = password
				newUser.id = uniqid()

				localforage.setItem('users', [newUser])
				localforage.setItem('token', newUser.id)
				console.log('data ', data)
				return console.log('Поздравляю с регистрацией!')
			}
		})
}

export const getMe = (set) => {
	localforage.getItem('token')
		.then(data => {
			if(data) {
				return set(true)
			} else {
				return set(false)
			}
		})
}

export const out = () => {
	localforage.removeItem('token')
}