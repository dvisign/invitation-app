import styled from "@emotion/styled";
import parents from "@/assets/images/parents.png";
import card from "@/assets/images/card.png";

export const MainSectionStyles = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${parents});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const BrightWrapperStyles = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  background-image: url(${card});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:
    0 0 80px 40px rgba(255, 255, 255, 0.8),
    0 20px 60px 20px rgba(217, 187, 187, 0.3);
`;

export const BrightContentStyles = styled.div`
  width: 100%;
  padding-bottom: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > .text-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    > h1 {
      font-family: "RIDIBatang";
      font-size: calc(1rem + 1vw);
      line-height: 1.8rem;
      color: #42382a;
      margin-bottom: 1.5rem;
    }
    > p {
      margin-bottom: 1rem;
      font-family: "RIDIBatang";
      font-size: 1rem;
      color: #42382a;
      line-height: 1.3rem;
    }
  }
`;
