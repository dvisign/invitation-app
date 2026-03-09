import MainSection from "@/components/section/Main";
import IntroText from "@/components/section/IntroText";
import Location from "@/components/section/Location";
import Share from "@/components/section/Share";
import {WrapperStyles} from "./styles";

const Wrapper = () => {
  return (
    <WrapperStyles>
      <MainSection />
      <IntroText />
      <Location />
      <Share />
    </WrapperStyles>
  );
};

export default Wrapper;
