// src/components/section/Main/index.tsx
import { forwardRef } from "react";
import {
	MainSectionStyles,
	BrightWrapperStyles,
	BrightContentStyles,
} from "./styles";

// <HTMLElement, Record<...>> 부분을 <HTMLElement> 하나로만 축소
const MainSection = forwardRef<HTMLElement>((_, ref) => {
	return (
		<MainSectionStyles ref={ref}>
			<BrightWrapperStyles>
				<BrightContentStyles>
					<div className="text-wrapper">
						<h1>
							박흠수 아버님
							<br />
							고희연에 초대합니다.
						</h1>
						<p>2026.3.21(토) 오후 12:00</p>
					</div>
				</BrightContentStyles>
			</BrightWrapperStyles>
		</MainSectionStyles>
	);
});

MainSection.displayName = "MainSection";

export default MainSection;
