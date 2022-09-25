import { useParams } from "react-router";

import { Title, Wrapper } from "./day.styles";

const Day = () => {
  const { day } = useParams();
  const pageDate = day.replaceAll("-", "/");

  return (
    <div>
      <Wrapper>
        <Title>{`${pageDate}`}</Title>
      </Wrapper>
    </div>
  );
};

export default Day;
