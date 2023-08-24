import axios from 'axios'

const instance = axios.create({
	// baseURL: 'http://127.0.0.1:8000/',
	// baseURL: 'http://13.125.142.117:8000/',
	baseURL: 'http://15.164.171.199/',
	withCredentials: true,
})

export default instance
