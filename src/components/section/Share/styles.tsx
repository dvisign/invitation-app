import styled from "@emotion/styled";

export const ShareWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  #kakaoShereBtn {
    background: #fee500;
    border-top: 1px solid #191919;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #191919;
    width: 100%;
    padding: 0.5rem;
    #kakaoShareIcons {
      padding-top: 0.2rem;
      font-size: 1.6rem;
      margin-right: 1rem;
    }
    #kakaoShareText {
      font-weight: 800;
      font-size: 1rem;
    }
  }
`;
