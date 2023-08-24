import instance from './core'
const Api = {
	register({ email, password1, password2 }) {
		return instance.post('user/register/', { email, password1, password2 })
	},
	login({ email, password }) {
		return instance.post('user/logins/', { email, password })
	},
	raonCurrent() {
		return instance.get('raon/current/', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			credentials: 'include',
		})
	},
	raonUse() {
		return instance.get('raon/', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			credentials: 'include',
		})
	},
	chatPost({ user_input }) {
		return instance.post(
			'chats/',
			{ user_input },
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
				credentials: 'include',
			},
		)
	},
	chatGet() {
		return instance.get('chats/', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			credentials: 'include',
		})
	},
}

export default Api
