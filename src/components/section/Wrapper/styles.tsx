import styled from "@emotion/styled";
import bgImage from "@/assets/images/background.png";

export const WrapperStyles = styled.main`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
