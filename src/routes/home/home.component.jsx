import YogaCalendar from "../../components/yoga-calendar/yoga-calendar.component";

import { Wrapper, PageDecoration } from "./home.styles";

const Home = () => {
  return (
    <Wrapper>
      <PageDecoration />
      <YogaCalendar />
    </Wrapper>
  );
};

export default Home;
