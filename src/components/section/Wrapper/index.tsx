import { useEffect, useRef, useState } from "react";
import MainSection from "@/components/section/Main";
import IntroText from "@/components/section/IntroText";
import Location from "@/components/section/Location";
import Share from "@/components/section/Share";
import { WrapperStyles } from "./styles";

const Wrapper = () => {
	const [isShareVisible, setIsShareVisible] = useState(false);
	const observerTarget = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// MainSection이 화면에서 벗어나면(!isIntersecting) Share 노출 상태를 true로 변경
				setIsShareVisible(!entry.isIntersecting);
			},
			{ threshold: 0 }, // 타겟이 0% 보일 때, 즉 완전히 화면에서 사라질 때 트리거
		);

		if (observerTarget.current) {
			observer.observe(observerTarget.current);
		}

		// 컴포넌트 언마운트 시 메모리 누수를 막기 위해 관찰 종료 (안정성 제어)
		return () => observer.disconnect();
	}, []);
	return (
		<WrapperStyles>
			<MainSection ref={observerTarget} />
			<IntroText />
			<Location />
			{isShareVisible && <Share />}
		</WrapperStyles>
	);
};

export default Wrapper;
