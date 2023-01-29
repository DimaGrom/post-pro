import localforage from "localforage"
import uniqid from 'uniqid'



export const registerUser = (username, password, set) => {
	if(username === '' && password === '') {
		return console.log('Имя и пароль должны быть заполнены.')
	}
	localforage.getItem('users')
		.then(data => {
			if(data) {
				const check = data.find(f => f.userName === username)
				if(check) {
					console.log('data ', data)
					return console.log('Данное имя уже существует. Поробуйте новое имя.')
				} else {
					const newUser = {}
					newUser.userName = username
					newUser.password = password
					newUser.id = uniqid()

					localforage.setItem('users', [...data, newUser])
					localforage.setItem('token', newUser.id)
					set(true)
					// console.log('data ', data)
					return console.log('Поздравляю с регистрацией!')
				}
			} else {
				const newUser = {}
				newUser.userName = username
				newUser.password = password
				newUser.id = uniqid()

				localforage.setItem('users', [newUser])
				localforage.setItem('token', newUser.id)
					set(true)
				// console.log('data ', data)
				return console.log('Поздравляю с регистрацией!')
			}
		})
}

export const loginUser = (username, password, set) => {
	if(username === '' && password === '') {
		return console.log('Имя и пароль должны быть заполнены.')
	}
	localforage.getItem('users')
		.then(data => {
			if(data) {
				const check = data.find(f => f.userName === username && f.password === password)
				if(check) {
					console.log('data ', data)
					set(true)
					localforage.setItem('token', check.id)
				} else {
					return console.log('Неверно введен пароль или логин.')
				}
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