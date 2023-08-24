import styled from 'styled-components'
import { IoChevronBackSharp } from 'react-icons/io5'
import { BsPersonCircle } from 'react-icons/bs'

import Logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Api from '../../api/Api'

function Chatbot() {
	const openAiKey = process.env.REACT_APP_OPENAI_API_KEY
	const navigate = useNavigate()
	const [user_input, setUser_input] = useState('')
	const [messages, setMessages] = useState('')
	const onChange = e => {
		setUser_input(e.target.value)
	}
	console.log(user_input)
	const { mutateAsync } = useMutation(data => {
		console.log(data)
		return Api.chatPost(data)
	})

	const onSubmit = async () => {
		const response = await mutateAsync({ user_input })
		console.log(response)
		setUser_input('')
		// if (!inputText) return

		// // 사용자의 메시지 추가
		// setMessages([...messages, { text: inputText, type: 'user' }])

		// // OpenAI API에 요청 보내고 응답 받기
		// try {
		// 	const response = await mutateAsync({ text: inputText }) // OpenAI API 요청 데이터를 넣어야 함

		// 	// 응답 메시지 추가
		// 	setMessages([...messages, { text: response.data, type: 'bot' }])
		// 	setInputText('')
		// } catch (error) {
		// 	console.error('Error sending message:', error)
		// }
	}

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
				</ChatbotBox>
				<UserBox>
					<UserImg>
						<BsPersonCircle size={'68'} />
					</UserImg>
					<UserTextBox></UserTextBox>
				</UserBox>
			</Box>

			<BottomNav>
				<UserInput onChange={onChange} value={user_input}></UserInput>
				<SendBtn onClick={onSubmit}>전송</SendBtn>
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
	position: fixed;
	top: 80px;
	width: 100%;
	background-color: #fffaf2;
	z-index: 99;
`

const TopNavTitle = styled.h2``

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 20px;
	margin: 120px 0px 50px 0px;
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

const ChatbotTextBox = styled.div`
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

const UserTextBox = styled.div`
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
	background-color: #fffaf2;
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
