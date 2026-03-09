import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {LocationWrapperStyles, MapContainer} from "./styles";

const Location = () => {
  const [loading, error] = useKakaoLoader({
    appkey: "a64558d99894639bccef41457792c4d7",
  });
  const location = {lat: 37.74913611, lng: 128.8784972};
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
          level={3} // 지도의 확대 레벨 (숫자가 작을수록 확대됨)
          draggable={true} // 모바일에서 터치로 이동 가능하게
        >
          <MapMarker position={location} />
        </Map>
      </MapContainer>
    </LocationWrapperStyles>
  );
};

export default Location;
