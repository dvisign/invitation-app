import MainSection from "@/components/section/Main";
import IntroText from "@/components/section/IntroText";
import Location from "@/components/section/Location";
import {WrapperStyles} from "./styles";

const Wrapper = () => {
  return (
    <WrapperStyles>
      <MainSection />
      <IntroText />
      <Location />
    </WrapperStyles>
  );
};

export default Wrapper;
