import styled from "@emotion/styled";

export const LocationWrapperStyles = styled.section`
  width: 100%;
  padding: 4rem 1rem 8rem 1rem;
  background-color: #fff;
  position: relative;
  > h2 {
    position: relative;
    text-align: center;
    font-family: "RIDIBatang";
    color: #42382a;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      background-color: #42382a;
      opacity: 0.5;
      height: 2px;
    }
  }
  > p {
    margin-top: 1rem;
    text-align: center;
    font-family: "RIDIBatang";
    word-break: keep-all;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3; /* 지도 비율을 4:3으로 안정적으로 고정 */
  background-color: #eee; /* 지도 로딩 전 회색 배경 */
  border: 1px solid #ddd;
  margin-top: 2rem;
`;
