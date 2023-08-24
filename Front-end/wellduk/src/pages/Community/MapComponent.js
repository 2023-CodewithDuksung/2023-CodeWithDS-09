import React, { Component } from 'react'

class MapComponent extends Component {
	componentDidMount() {
		// 카카오 지도 코드를 여기에 넣으세요
		// ...
	}

	render() {
		return (
			<>
				<div class="map_wrap">
					<div
						id="map"
						style="width:100%;height:100%;position:relative;overflow:hidden;"
					></div>

					<div id="menu_wrap" class="bg_white">
						<div class="option">
							<div>
								<form onsubmit="searchPlaces(); return false;">
									키워드 :{' '}
									<input
										type="text"
										value="이태원 맛집"
										id="keyword"
										size="15"
									/>
									<button type="submit">검색하기</button>
								</form>
							</div>
						</div>
						<hr />
						<ul id="placesList"></ul>
						<div id="pagination"></div>
					</div>
				</div>
			</>
		)
	}
}

export default MapComponent
