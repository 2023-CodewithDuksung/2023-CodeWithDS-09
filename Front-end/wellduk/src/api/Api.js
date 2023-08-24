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
	assignmentWrite({ title, content, url, where }) {
		return instance.post(
			'hand-over/posts/',
			{ title, content, url, where },
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
				credentials: 'include',
			},
		)
	},
	assignmentList() {
		return instance.get('hand-over/posts/', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			credentials: 'include',
		})
	},
	communityWrite({ title, content }) {
		return instance.post(
			'free-communication/posts/',
			{ title, content },
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
				credentials: 'include',
			},
		)
	},
	communityList() {
		return instance.get('free-communication/posts/', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			credentials: 'include',
		})
	},
}

export default Api
