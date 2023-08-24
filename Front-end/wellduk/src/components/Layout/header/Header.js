import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
	const navigate = useNavigate()

	return (
		<Container>
			<Logo onClick={() => navigate('/')}>Wellduk</Logo>
			<BsPerson size="40" onClick={() => navigate('/login')} />
		</Container>
	)
}

const Logo = styled.span`
	font-size: x-large;
	font-weight: 900;
`

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #fffaf2;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
`

export default Header
