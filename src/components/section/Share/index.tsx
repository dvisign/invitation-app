import {useCallback} from "react";

import {RiKakaoTalkFill} from "react-icons/ri";

import {ShareWrapper} from "./styles";

const Share = () => {
  const onSendLink = useCallback(() => {
    const content = {
      title:
        "저희 아버님께서 칠순을 맞이하셨습니다. 평소 베풀어주신 사랑과 은혜에 감사드리며\n조촐하게나마 축하의 잔치를 마련했습니다.\n다들 바쁘시겠지만 우리 가족 모두 함께하는 자리가 되었으면 합니다. :)",
      description: "",
      imageUrl: "https://invitation-app-theta.vercel.app/share.jpg",
      link: {
        mobileWebUrl: "https://invitation-app-theta.vercel.app/",
        webUrl: "https://invitation-app-theta.vercel.app/",
      },
      imageWidth: 800,
      imageHeight: 800,
    };
    const buttons = {
      title: "청첩장 보기",
      link: {
        mobileWebUrl: "https://invitation-app-theta.vercel.app/",
        webUrl: "https://invitation-app-theta.vercel.app/",
      },
    };
    // @ts-expect-error: Kakao 전역 객체 타입 누락 무시
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: content,
      buttons: [buttons],
    });
  }, []);
  return (
    <ShareWrapper id="share_section" className="pb-5">
      <div>
        <button id="kakaoShereBtn" onClick={() => onSendLink()}>
          <span id="kakaoShareIcons">
            <RiKakaoTalkFill />
          </span>
          <span id="kakaoShareText">카카오톡 공유하기</span>
        </button>
      </div>
    </ShareWrapper>
  );
};
export default Share;
