import { useQuery } from '@tanstack/react-query'
import Api from '../api/Api'

const useGetHandOver = () => {
	const { data, refetch } = useQuery(['GET_ASSIGNMENT'], () =>
		Api.assignmentList(),
	)
	return { data, refetch }
}

export default useGetHandOver
