import { styled } from 'styled-components'
import { marginAuto } from '../../styles/common'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Api from '../../api/Api'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

function SignUp() {
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: 'onChange' })

	const { mutateAsync } = useMutation(data => {
		Api.register(data)
	})

	const onSubmit = async data => {
		const UserData = {
			email: data.email + '@duksung.ac.kr',
			password1: data.pw,
			password2: data.pwCheck,
		}

		try {
			await mutateAsync(UserData)
			navigate('/login')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<S.Wrapper>
			<S.Title>회원가입</S.Title>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.Container>
					<label>이메일</label>
					<S.IdContainer>
						<Input
							id="email"
							{...register('email', {
								required: {
									value: true,
								},
							})}
						/>
						<S.Email>@duksung.ac.kr</S.Email>
					</S.IdContainer>
				</S.Container>
				<S.Container>
					<label>비밀번호</label>
					<Input
						id="pw"
						type="password"
						{...register('pw', { required: true })}
					/>
				</S.Container>
				<S.Container>
					<label>비밀번호 확인</label>
					<Input
						id="pwCheck"
						type="password"
						{...register('pwCheck', { required: true })}
					/>
				</S.Container>
				<Button type="submit">회원가입</Button>
			</S.Form>
		</S.Wrapper>
	)
}
export default SignUp

const Wrapper = styled.div`
	${marginAuto}
	text-align: center;
`

const Title = styled.h2`
	padding: 32px;
`

const Form = styled.form`
	width: 60%;
	padding: 20px 0;
	${marginAuto}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-content: center;
	flex-wrap: wrap;
	margin-bottom: 40px;
`

const IdContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
`

const Email = styled.span`
	position: absolute;
	right: 10px;
	font-size: 14px;
`
const S = {
	Wrapper,
	Title,
	Form,
	Container,
	IdContainer,
	Email,
}
