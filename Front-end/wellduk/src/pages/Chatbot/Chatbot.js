import styled from 'styled-components'
import { IoChevronBackSharp } from 'react-icons/io5'
import { BsPersonCircle } from 'react-icons/bs'

import Logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom'

function Chatbot() {
	const navigate = useNavigate()
	return (
		<>
			<TopNav>
				<IoChevronBackSharp size={'40'} onClick={() => navigate('/')} />
				<TopNavTitle>챗봇</TopNavTitle>
			</TopNav>
			<Box>
				<ChatbotBox>
					<img
						src={Logo}
						style={{
							width: '70px',
							height: '70px',
							position: 'absolute',
							bottom: '25px',
						}}
					/>
					<ChatbotTextBox></ChatbotTextBox>
				</ChatbotBox>
				<UserBox>
					<UserImg>
						<BsPersonCircle size={'68'} />
					</UserImg>
					<UserTextBox></UserTextBox>
				</UserBox>
			</Box>
			<RecommendBox></RecommendBox>
			<BottomNav>
				<UserInput></UserInput>
				<SendBtn>전송</SendBtn>
			</BottomNav>
		</>
	)
}

const TopNav = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	padding: 0px 10px;
`

const TopNavTitle = styled.h2``

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 20px;
`

const ChatbotBox = styled.div`
	position: relative;
	margin: 30px 0px;
`

const UserBox = styled.div`
	display: flex;
	flex-direction: row-reverse;
	position: relative;
	margin: 30px 0px;
`

const ChatbotTextBox = styled.textarea`
	display: flex;
	align-items: center;
	width: 280px;
	height: 60px;
	background-color: white;
	border: 1px solid #fea82f;
	border-radius: 15px;
	margin-left: 30px;
	padding: 20px 15px 20px 40px;
`

const UserTextBox = styled.textarea`
	display: flex;
	align-items: center;
	width: 280px;
	height: 60px;
	background-color: white;
	border: 1px solid #fea82f;
	border-radius: 15px;
	margin-right: 30px;
	padding: 20px 30px 20px 15px;
`

const UserImg = styled.div`
	width: 68px;
	height: 68px;
	border-radius: 50%;
	background-color: #ff6701;
	position: absolute;
	bottom: 25px;
`

const BottomNav = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 90px;
	border-top: 1px solid #fea82f;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10px;
`

const UserInput = styled.input`
	border: none;
	width: 290px;
	height: 60px;
	border: 1px solid #fea82f;
	border-radius: 5px;
	font-size: large;
	padding: 0px 15px;
`

const SendBtn = styled.button`
	width: 70px;
	height: 60px;
	border-radius: 5px;
	background: #fea82f;
`

const RecommendBox = styled.div`
	position: fixed;
	bottom: 90px;
	width: 100%;
	height: 120px;
	background-color: #fea82f;
`

const RecommendQst = styled.div``

export default Chatbot
