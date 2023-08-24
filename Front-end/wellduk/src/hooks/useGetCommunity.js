import { useQuery } from '@tanstack/react-query'
import Api from '../api/Api'

const useGetCommunity = () => {
	const { data, refetch } = useQuery(['GET_COMMUNITY'], () =>
		Api.communityList(),
	)
	return { data, refetch }
}

export default useGetCommunity
