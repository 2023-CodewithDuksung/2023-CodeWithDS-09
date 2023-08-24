import { BsFillChatLeftDotsFill, BsFillPeopleFill } from 'react-icons/bs'
import { IoBarbell } from 'react-icons/io5'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import MenuLogo from '../../img/menu-logo.png'

import styled from 'styled-components'

function Main() {
	const navigate = useNavigate()
	return (
		<>
			<Banner>banner</Banner>
			<Box>
				<img
					src={MenuLogo}
					style={{
						width: '210px',
						height: '133px',
						display: 'block',
					}}
				/>
				<MenuContainer>
					<SubContainer>
						<Chatbot onClick={() => navigate('/chatbot')}>
							<BsFillChatLeftDotsFill size="70" color="white" />
							<Text>챗봇</Text>
						</Chatbot>
						<Laon onClick={() => navigate('/raon')}>
							<IoBarbell size="70" color="#FEA82F" />
							<Text>라온센터</Text>
						</Laon>
					</SubContainer>
					<SubContainer>
						<Community onClick={() => navigate('/community')}>
							<BsFillPeopleFill size="70" color="white" />
							<Text>커뮤니티</Text>
						</Community>
						<Routine onClick={() => navigate('/routine/beginning')}>
							<IoMdCheckboxOutline size="70" color="white" />
							<Text>운동 루틴 추천</Text>
						</Routine>
					</SubContainer>
				</MenuContainer>
			</Box>
		</>
	)
}

const Banner = styled.div`
	background-color: gray;
	padding: 100px;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const MenuContainer = styled.div`
	display: flex;
	width: 95%;
	flex-direction: column;
`

const SubContainer = styled.div`
	display: flex;
	justify-content: center;
`

const Chatbot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.main};
	width: 165px;
	height: 165px;
	border-radius: 30px 0 0 0;
`

const Laon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	width: 165px;
	height: 165px;
	border-radius: 0 30px 0 0;
`

const Community = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.sub[100]};
	width: 165px;
	height: 165px;
	border-radius: 0 0 0 30px;
`

const Routine = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
	width: 165px;
	height: 165px;
	border-radius: 0 0 30px 0;
`

const Text = styled.h1`
	font-size: large;
	font-weight: 400;
`

export default Main
