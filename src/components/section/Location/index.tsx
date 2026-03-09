import {Map, MapMarker} from "react-kakao-maps-sdk";
import {LocationWrapperStyles, MapContainer} from "./styles";

const Location = () => {
  const location = {lat: 36.98889759894559, lng: 127.82565696643323};
  const naver = () => {
    window.open(
      "http://map.naver.com/?menu=location&pinType=place&lat=36.98889759894559&lng=127.82565696643323&title=충주 중앙하이츠",
    );
  };
  const kakaoNavi = () => {
    // if (!is_Mobile) {
    //   window.open(
    //     `http://kko.to/${mapId}`,
    //     "PopupWin",
    //     "width=1160, height=600",
    //   );
    // } else {
    try {
      // @ts-expect-error: Kakao 전역 객체 타입 누락 무시
      window.Kakao.Navi.start({
        name: "충주 중앙하이츠",
        x: 127.82565696643323,
        y: 36.98889759894559,
        coordType: "wgs84",
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        // 조건문을 통과하면 여기서부터 e는 완벽한 Error 타입으로 추론됨
        alert(`오류: ${e.message}`);
      } else {
        // Error 객체가 아닌 다른 무언가가 던져졌을 때의 예외 처리
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
    // }
  };

  return (
    <LocationWrapperStyles>
      <h2>Location</h2>
      <p>
        충청북도 충주시 첨단산업4로 54
        <br /> 중앙하이츠 130동 1304호
      </p>
      <MapContainer>
        <Map
          center={location}
          style={{width: "100%", height: "100%"}}
          level={3}
          draggable={true}>
          <MapMarker position={location} />
        </Map>
      </MapContainer>
      <button onClick={naver}>naver</button>
      <button onClick={kakaoNavi}>kakaoNavi</button>
    </LocationWrapperStyles>
  );
};

export default Location;
