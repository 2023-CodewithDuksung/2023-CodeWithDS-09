import styled from 'styled-components'

function Intermediate() {
	return (
		<Box1>
			<Box2>
				운동 전에 충분한 워밍업과 스트레칭을 잊지 말고, 정확한 자세와
				순차적인 운동이 중요합니다. 단기간에 복근을 만들기는 어렵지만
				꾸준한 노력과 훈련으로 점차 결과를 얻을 수 있을 것입니다.
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>1. 쿼드 스트레칭</Title>
					<ContentBox>
						<Content>
							무릎을 구부리고 한 발의 발목을 손으로 잡아당깁니다.
							반대 손으로 균형을 잡아주며 다리 뒷면의 근육을
							스트레칭합니다. 15-20초 유지한 후 반대쪽도
							수행합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/BhQimqvU1tM?si=vS3X5AQyfIwt7VrR"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>2. 바벨 스쿼트</Title>
					<ContentBox>
						<Content>
							바벨 스쿼트는 하체 근육을 강화하는 대표적인
							운동으로, 바벨을 어깨에 올려서 스쿼트 동작을 하는
							것입니다. 반드시 올바른 자세로 실시하세요.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/fy9URmTqNio?si=uPFdMZLlYFDHKo21"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>3. 바벨로우</Title>
					<ContentBox>
						<Content>
							바벨로우는 등과 하체 근육을 강화하는데 도움을 주는
							운동으로, 앞으로 숙인 상태에서 바벨을 들어 올린 후
							내리는 동작을 반복합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/5g1qCph_el4?si=C5PO6CHa4ZIJxm2K"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>4. 사이드 플랭크</Title>
					<ContentBox>
						<Content>
							옆으로 누워 팔꿈치와 발목을 바닥에 대고 옆으로 몸을
							일직선으로 유지합니다. 한쪽 옆구리 근육을 사용하여
							몸을 지탱합니다. 한쪽 옆을 유지한 후 반대쪽도
							수행합니다.{' '}
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/fHJA-x1bh58?si=JCxipeIjuZQCElrk"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>5. 숄더 스트레칭</Title>
					<ContentBox>
						<Content>
							한 팔을 가슴 앞으로 뻗어주고 다른 팔로 팔꿈치를
							잡아당깁니다. 어깨 근육을 스트레칭합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/kvE_1FIJusM?si=Z9_h-RtHB3j5xfWD"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
		</Box1>
	)
}

const Box1 = styled.div`
	margin: 40px 18px 150px 18px;
`

const Box2 = styled.div`
	margin-bottom: 40px;
`

const MachineContainer = styled.div``

const Title = styled.h1`
	font-size: x-large;
`

const ContentBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`

const Content = styled.span`
	font-size: 14px;
	padding: 10px;
`

const VideoContainer = styled.div``

export default Intermediate
