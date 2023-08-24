import { useQuery } from '@tanstack/react-query'
import Api from '../api/Api'

const useGetRaonCurrent = () => {
	const { data, refetch } = useQuery(['GET_RAON_CURRENT'], () =>
		Api.raonCurrent(),
	)
	return { data, refetch }
}

export default useGetRaonCurrent
