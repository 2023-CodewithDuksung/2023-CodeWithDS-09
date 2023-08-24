import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import useGetCommunity from '../../hooks/useGetCommunity'

function Communication() {
	const navigate = useNavigate()
	const { data, refetch } = useGetCommunity()
	return (
		<>
			<Box>
				<WriteBtn
					onClick={() => navigate('/community/communication/write')}
				>
					글 작성하기
				</WriteBtn>

				<ListBox>
					{data?.data?.map(item => {
						return (
							<Article>
								<span>{item.title}</span>
								<span>{item.content}</span>
								<span>{item.author}</span>
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
	height: 430px;
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
`
export default Communication
