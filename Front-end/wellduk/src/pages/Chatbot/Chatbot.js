import styled from 'styled-components'
import { IoChevronBackSharp } from 'react-icons/io5'
import Logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Api from '../../api/Api'
import useGetChat from '../../hooks/useGetChat'
import { BsPersonCircle } from 'react-icons/bs'

function Chatbot() {
	const openAiKey = process.env.REACT_APP_OPENAI_API_KEY
	const navigate = useNavigate()
	const [user_input, setUser_input] = useState('')
	const onChange = e => {
		setUser_input(e.target.value)
	}
	console.log(user_input)
	const { mutateAsync } = useMutation(data => {
		console.log(data)
		return Api.chatPost(data)
	})

	const { data, refetch } = useGetChat()
	console.log(data?.data)
	// console.log(chatData)
	const onSubmit = async () => {
		const { data } = await mutateAsync({ user_input })
		console.log(data)
		refetch()
		setUser_input('')
	}

	return (
		<>
			<TopNav>
				<IoChevronBackSharp size={'40'} onClick={() => navigate('/')} />
				<TopNavTitle>챗봇</TopNavTitle>
			</TopNav>
			<MarginBox></MarginBox>
			{data?.data?.map((item, idx) => {
				return (
					<div>
						<Box>
							<UserBox>
								<UserImg>
									<BsPersonCircle size={'68'} />
								</UserImg>
								<UserTextBox>{item.user_input}</UserTextBox>
							</UserBox>
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
								<ChatbotTextBox>
									{item.gpt_response}
								</ChatbotTextBox>
							</ChatbotBox>
						</Box>
					</div>
				)
			})}
			{/* {chatData.user_input && (
				<Box>
					<UserBox>
						<UserImg>
							<BsPersonCircle size={'68'} />
						</UserImg>
						<UserTextBox>{chatData.user_input}</UserTextBox>
					</UserBox>
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
						<ChatbotTextBox>{chatData.gpt_response}</ChatbotTextBox>
					</ChatbotBox>
				</Box>
			)} */}
			<MarginBox></MarginBox>
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
	z-index: 10;
`

const TopNavTitle = styled.h2``

const MarginBox = styled.div`
	width: 100%;
	height: 150px;
`

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
	margin: 0px 0px 0px 0px;
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
	min-height: 50px;
	background-color: white;
	border: 1px solid #fea82f;
	border-radius: 15px;
	margin-left: 40px;
	padding: 20px 15px 20px 40px;
	resize: vertical;
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
