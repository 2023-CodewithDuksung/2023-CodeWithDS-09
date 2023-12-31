import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import useGetHandOver from '../../hooks/useGetHandOver'

function Assignment() {
	const navigate = useNavigate()
	const { data, refetch } = useGetHandOver()
	console.log(data)
	return (
		<>
			<Box>
				<WriteBtn onClick={() => navigate('/community/assign/write')}>
					글 작성하기
				</WriteBtn>

				<ListBox>
					{data?.data?.map(item => {
						return (
							<Article>
								<span>title: {item.title}</span>
								{/* <span>content: {item.content}</span>
								<span>author: {item.author}</span> */}
							</Article>
						)
					})}
				</ListBox>
			</Box>
		</>
	)
}

const Box = styled.div`
	margin: 170px 18px 150px 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const WriteBtn = styled.button`
	width: 280px;
	height: 60px;
	background-color: ${({ theme }) => theme.COLOR.main};
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	font-size: large;
`
const ListBox = styled.div`
	width: 330px;

	background-color: white;
	border-radius: 15px;
	box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.COLOR.common.gray[100]};
	padding: 7px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Article = styled.div`
	width: 315px;
	height: 50px;
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding: 0 15px;
	justify-content: space-between;
	margin-bottom: 10px;
`

const Text = styled.div``

export default Assignment
