import {useCallback} from "react";

import {RiKakaoTalkFill} from "react-icons/ri";

import {ShareWrapper} from "./styles";

const Share = () => {
  const onSendLink = useCallback(() => {
    const content = {
      title:
        "저희 두 사람이 하나되려 합니다.\n여러분의 축복이 더해진다면\n더욱 눈부신 날이 될 것 같습니다.",
      description: "",
      imageUrl:
        "https://invitation-theta.vercel.app/img/invitation/3/3_main.jpg",
      link: {
        mobileWebUrl: "https://invitation-theta.vercel.app/invitation/3",
        webUrl: "https://invitation-theta.vercel.app/invitation/3",
      },
      imageWidth: 800,
      imageHeight: 800,
    };
    const buttons = {
      title: "청첩장 보기",
      link: {
        mobileWebUrl: "https://invitation-theta.vercel.app/invitation/3",
        webUrl: "https://invitation-theta.vercel.app/invitation/3",
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
