import { styled } from 'styled-components'
import { BsPeople } from 'react-icons/bs'
import { flexAlignCenter, flexCenter, marginAuto } from '../../styles/common'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { useRecoilState } from 'recoil'
import { checkInState } from '../../atoms/CheckInState'
import { useEffect, useState } from 'react'
import useGetRaonCurrent from '../../hooks/useGetRaonCurrent'
import useGetRaonUse from '../../hooks/useGetRaonUse'

function UserNumber() {
	const [checkIn, setCheckIn] = useRecoilState(checkInState)
	// const [checkIn, setCheckIn] = useState('체크인')
	const [exerciseRecordVisible, setExerciseRecordVisible] = useState(false)
	const [raonCurrentData, setRaonCurrentData] = useState({
		raon_maximum: 0,
		raon_current: 0,
	})
	const [raonUseData, setRaonUseData] = useState({})

	const { data: raonCurrent, refetch: raonCurrentRefetch } =
		useGetRaonCurrent()

	const { data: raonUse, refetch: raonUseRefetch } = useGetRaonUse()

	// useEffect(() => {
	// 	const savedCheckInState = localStorage.getItem('checkInState')
	// 	if (savedCheckInState) {
	// 		setCheckIn(savedCheckInState)
	// 	}
	// }, [])

	useEffect(() => {
		setRaonCurrentData(raonCurrent?.data)
	}, [raonCurrent])

	useEffect(() => {
		setRaonUseData(raonUse?.data)
	}, [raonUse])

	useEffect(() => {
		raonUseRefetch()
		raonCurrentRefetch()
	}, [checkIn])

	const handleCheckIn = async () => {
		if (checkIn === '체크인') {
			// if (raonUse === undefined) {
			// 	const { data: updatedRaonUse } = await useGetRaonUse()
			// 	console.log(updatedRaonUse)
			// 	setRaonUseData(updatedRaonUse)
			// }
			// raonUseRefetch()
			// raonCurrentRefetch()
			setCheckIn('체크아웃')
			localStorage.setItem('checkInState', '체크아웃')
		} else {
			// raonUseRefetch()
			setExerciseRecordVisible(true)
			localStorage.setItem('checkInState', '체크인')
		}
		console.log(raonUse)
	}

	const handleReset = () => {
		setExerciseRecordVisible(false)
		setCheckIn('체크인')
		raonCurrentRefetch()
	}

	return (
		<S.Wrapper>
			{!exerciseRecordVisible ? (
				<>
					<S.User>
						<BsPeople size={90} color="#FCECDD" />
						<S.Content>
							{raonCurrentData?.raon_current}/30
						</S.Content>
					</S.User>

					{checkIn === '체크인' ? (
						<S.CheckIn onClick={handleCheckIn}>체크인</S.CheckIn>
					) : (
						<S.CheckIn onClick={handleCheckIn}>
							체크아웃
							{/* <StopWatch /> */}
						</S.CheckIn>
					)}
				</>
			) : (
				<>
					<S.TodayTitle>운동 기록</S.TodayTitle>
					<S.TodayContent>
						<S.Exercise>
							<S.TimeText>시작</S.TimeText>
							<S.Time>16:00</S.Time>
						</S.Exercise>
						<S.Exercise>
							<S.TimeText>종료</S.TimeText>
							<S.Time>17:45</S.Time>
						</S.Exercise>
						<S.Record>1h 45m</S.Record>
					</S.TodayContent>
					<S.ResetButton onClick={handleReset}>reset</S.ResetButton>
				</>
			)}
		</S.Wrapper>
	)
}
export default UserNumber

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto 150px auto;
	${flexAlignCenter}
	flex-direction: column;
	margin-top: 140px;
`

const User = styled.div`
	background-color: ${({ theme }) => theme.COLOR.main};
	width: 100%;
	margin: 50px auto;
	height: 200px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`

const Content = styled.div`
	margin: 10px 0;
`

const CheckIn = styled.button`
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
	width: 100%;
	height: 200px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`

const TodayTitle = styled.div`
	background-color: ${({ theme }) => theme.COLOR.main};
	width: 100%;
	margin: 30px auto;
	height: 60px;
	border-radius: 30px;
	${flexCenter}
	flex-direction: column;
`
const TodayContent = styled.div`
	width: 80%;
	${marginAuto}
`
const Time = styled.div`
	background-color: ${({ theme }) => theme.COLOR.sub[300]};
	width: 60%;
	margin: 20px 0;
	height: 70px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`
const TimeText = styled.div`
	background-color: ${({ theme }) => theme.COLOR.sub[100]};
	width: 35%;
	margin: 20px 0;
	height: 70px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`
const Record = styled.div`
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
	width: 100%;
	margin: 30px auto;
	height: 100px;
	border-radius: 10px;
	${flexCenter}
	flex-direction: column;
`

const Exercise = styled.div`
	display: flex;
	justify-content: space-between;
`

const StyledInput = styled(Input)`
	height: 130px;
	border: 1px solid ${({ theme }) => theme.COLOR.sub[200]};
`

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.COLOR.sub[200]};
`

const ResetButton = styled(Button)`
	background-color: ${({ theme }) => theme.COLOR.sub[100]};
	width: 30%;
	${flexCenter}
	margin: 0
`

const S = {
	Wrapper,
	User,
	Content,
	CheckIn,
	Exercise,
	TodayTitle,
	TodayContent,
	StyledInput,
	StyledButton,
	Record,
	Time,
	TimeText,
	ResetButton,
}
