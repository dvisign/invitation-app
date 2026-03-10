import { IntroWrapperStyles } from "./styles";
import flower from "@/assets/images/flower.png";

const IntroText = () => {
	return (
		<IntroWrapperStyles>
			<p>
				저희 아버님께서 칠순을 맞이하셨습니다. 평소 베풀어주신 사랑과 은혜에
				감사드리며,
			</p>
			<p style={{ margin: "1.5rem 0" }}>
				조촐하게나마 가족식사 모임 자리를 마련했습니다.
			</p>
			<p>
				다들 바쁘시겠지만 우리 가족 모두 함께하는 자리가 되었으면 합니다. :)
			</p>
			<img src={flower} style={{ display: "block", width: "100%" }} />
		</IntroWrapperStyles>
	);
};

export default IntroText;
