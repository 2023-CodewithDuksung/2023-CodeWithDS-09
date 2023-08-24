import styled from 'styled-components'

function High() {
	return (
		<Box1>
            <Box2>
            손흥민처럼 강력한 다리를 만들기 위해서는 높은 강도와 꾸준한 훈련이 필요합니다. 운동 전에 워밍업과 스트레칭을 제대로 해주고, 틈틈이 복습하며 자신의 능력에 맞게 조절하여 훈련하시면 좋습니다.
            </Box2>
			<Box2>
				<MachineContainer>
					<Title>1. 크런치</Title>
					<ContentBox>
						<img
							src="/img/running-machine.png"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
                        등을 매트에 붙이고 무릎을 구부려 발을 바닥에 대고 눕습니다. 손을 머리 뒤로 얹거나 가슴 위에 교차시킵니다. 복부 근육을 사용하여 상체를 약 45도 정도 올립니다. 어깨 끝까지 올라가는 것이 아니라 복부의 수축을 느끼면서 운동합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
                        src="https://www.youtube.com/embed/gGHkMSIjM4g?si=XiyH-lUmrDhSpurW" 						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
			<Box2>
				<MachineContainer>
					<Title>2. 사이클</Title>
					<ContentBox>
						<img
							src="/img/cycle.jpeg"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
							사이클은 유산소 운동기구 중 하나로, 자전거를 타고
							주행하는 동작을 모방하여 유산소 및 심폐 지구력
							운동을 할 수 있는 기구입니다. 사이클 운동은 하체
							근육을 주로 사용하며, 전신 근육과 심폐 기능을
							향상시키는 데 도움을 줍니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
						src="https://www.youtube.com/embed/sqC5a78NfQw"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
            <Box2>
				<MachineContainer>
					<Title>3. 카프 레이즈</Title>
					<ContentBox>
						<img
							src="/img/cycle.jpeg"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
                        스텝 위에 서서 발 뒤꿈치를 내리고 올리는 동작을 반복합니다. 종아리 근육을 강화합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
                        src="https://www.youtube.com/embed/OHp56zqYn6U?si=OkQvEfnH_mtWsuXi" 						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
            <Box2>
				<MachineContainer>
					<Title>4. 드레곤 플라이</Title>
					<ContentBox>
						<img
							src="/img/cycle.jpeg"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
                        매트에 누워 다리를 아래로 내리고 다시 올리는 동작을 반복합니다. 복부와 하체 근육을 함께 강화합니다.
						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
                        src="https://www.youtube.com/embed/V0drUJeJ900?si=z6GQzuhscd7El38m"						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</VideoContainer>
			</Box2>
            <Box2>
				<MachineContainer>
					<Title>5. 이내근 스트레칭</Title>
					<ContentBox>
						<img
							src="/img/cycle.jpeg"
							style={{
								width: '140px',
								height: '140px',
								borderRadius: '20px',
							}}
						/>
						<Content>
                        다리를 벌리고 몸을 한쪽으로 숙이는 동작을 수행합니다. 내전근을 스트레칭합니다. 15-20초 유지한 후 반대쪽도 동일하게 수행합니다.						</Content>
					</ContentBox>
				</MachineContainer>
				<VideoContainer>
					<iframe
						width="354"
						height="198"
                        src="https://www.youtube.com/embed/FMOISIlhLEY?si=JBf2GO6EwXDiDe5D"						title="YouTube video player"
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
	margin: 20px 18px 150px 18px;
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

export default High