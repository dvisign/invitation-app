import {
	MainSectionStyles,
	BrightWrapperStyles,
	BrightContentStyles,
} from "./styles";

const MainSection = () => {
	return (
		<MainSectionStyles>
			<BrightWrapperStyles>
				<BrightContentStyles>
					<div className="text-wrapper">
						<h1>
							박흠수 아버지
							<br />
							고희연에 초대합니다.
						</h1>
						<p>2026.3.21(토) 오후 12:00</p>
						{/* <p>
              충청북도 충주시 첨단산업4로 54
              <br /> 중앙하이츠 130동 1304호
            </p> */}
					</div>
				</BrightContentStyles>
			</BrightWrapperStyles>
		</MainSectionStyles>
	);
};

export default MainSection;
