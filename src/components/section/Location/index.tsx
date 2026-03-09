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
    //   try {
    //     Kakao.Navi.start(locations);
    //   } catch (e) {
    //     alert("알수없는 오류가 발생했습니다.");
    //   }
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
      {
        // @ts-expect-error: Kakao SDK 글로벌 객체 타입 누락
        Kakao.Navi ? "있음" : "없음"
      }
    </LocationWrapperStyles>
  );
};

export default Location;
