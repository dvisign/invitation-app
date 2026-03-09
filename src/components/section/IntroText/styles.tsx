import styled from "@emotion/styled";

export const IntroWrapperStyles = styled.section`
  width: 100%;
  padding: 8rem 1rem 5rem 1rem;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    background-color: #42382a;
    opacity: 0.5;
    height: 2px;
  }
  > p {
    text-align: center;
    font-family: "RIDIBatang";
    font-size: 1.2rem;
    line-height: 2.3rem;
    color: #42382a;
    word-break: keep-all;
  }
`;
