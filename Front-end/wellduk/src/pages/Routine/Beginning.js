import styled from 'styled-components'

function Beginning() {
	return (
		<Box1>
			<Box2>
				충분한 휴식과 영양소가 포함된 식단도 중요합니다. 단백질 섭취를
				늘리고 적절한 탄수화물과 지방을 섭취하는 것이 좋습니다. 또한,
				몸을 활발하게 움직이면서 꾸준한 운동 습관을 가지고 있어야 원하는
				결과를 얻을 수 있습니다.
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>1. 대퇴근 스트레칭</Title>
					<ContentBox>
						<Content>
							한 발을 손으로 잡고 다리를 뒤로 당기는 동작을
							수행합니다. 다리의 앞쪽 근육을 스트레칭합니다.
							15-20초 유지한 후 반대쪽도 동일하게 수행합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/n42A7X2HFQQ?si=RaQjOaHgXEtcMffP"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>2. 레그 프레스</Title>
					<ContentBox>
						<Content>
							레그 프레스 기계를 사용하여 다리의 대퇴 근육과
							엉덩이 근육을 강화하는 운동입니다. 의자에 앉아
							다리를 밀어 올려주는 동작을 반복합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/EV0F_3S7Sks?si=l8r9Jkvn4OqNg1VC"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>3. 체스트 프레스</Title>
					<ContentBox>
						<Content>
							체스트 프레스 기계를 활용하여 가슴 근육을 강화하는
							운동입니다. 손잡이를 푸쉬하면서 가슴을 압축시키는
							동작을 반복합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/sLXwpjmQUnE?si=Lg6j8YnXqdbjnVlY"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>4. 햄스트링 스트레칭</Title>
					<ContentBox>
						<Content>
							한 다리를 앞으로 내밀고 발을 디딜고, 다리 뒤쪽
							근육을 손으로 잡아당깁니다. 상체를 앞으로 숙이면서
							햄스트링을 스트레칭합니다. 15-20초 유지한 후
							반대쪽도 수행합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/ppPQgmgpafM?si=Qa6ueUp1GmEJX1rG"
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
	margin: 150px 18px 150px 18px;
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

export default Beginning
