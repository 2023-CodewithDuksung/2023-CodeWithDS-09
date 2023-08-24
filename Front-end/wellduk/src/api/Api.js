import instance from './core'

const Api = {
	register({ email, password1, password2 }) {
		return instance.post('user/register/', { email, password1, password2 })
	},
	login({ email, password }) {
		return instance.post('user/login/', { email, password })
	},
}

export default Api
