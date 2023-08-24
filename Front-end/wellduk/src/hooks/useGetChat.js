import { useQuery } from '@tanstack/react-query'
import Api from '../api/Api'

const useGetChat = () => {
	const { data, refetch } = useQuery(['GET_CHAT'], () => Api.chatGet())
	return { data, refetch }
}

export default useGetChat
