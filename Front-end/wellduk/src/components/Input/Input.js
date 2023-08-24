import { forwardRef } from 'react'
import { styled } from 'styled-components'

function Input({ ...rest }, ref) {
	return <S.InputStyle ref={ref} {...rest} />
}
export default forwardRef(Input)

const InputStyle = styled.input`
	border: 1px solid ${({ theme }) => theme.COLOR.main};
	border-radius: 5px;
	width: 100%;
	height: 40px;
	padding: 10px;
`

const S = { InputStyle }
