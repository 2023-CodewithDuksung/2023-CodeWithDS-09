import { useQuery } from '@tanstack/react-query'
import Api from '../api/Api'

const useGetRaonUse = () => {
	const { data, refetch } = useQuery(['GET_RAON_USE'], () => Api.raonUse(), {
		enabled: false,
	})
	return { data, refetch }
}

export default useGetRaonUse
