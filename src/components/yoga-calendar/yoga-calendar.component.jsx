import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Calendar } from "react-calendar";

import { DateStatus, Status, Wrapper } from "./yoga-calendar.styles";

const YogaCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const checkTime = () => {
    const newDate = new Date();
    if (currentDate !== newDate) {
      setCurrentDate(newDate);
    }
  };

  const navigate = useNavigate();

  const navigateToDayPage = useCallback(
    (selectedDate) =>
      navigate(`day/${selectedDate.toLocaleDateString().replaceAll("/", "-")}`),
    [navigate]
  );

  const onClickDayHandler = (selectedDate) => {
    setSelectedDate(selectedDate);
    setTimeout(navigateToDayPage(selectedDate), 500);
  };

  useEffect(() => {
    setCurrentDate(currentDate);
    setInterval(checkTime, 1000);

    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Calendar
        onChange={onClickDayHandler}
        showNeighboringMonth="false"
        view="day"
        calendarType="US"
        maxDate={currentDate}
        showFixedNumberOfWeeks={true}
        value={selectedDate}
      />
      <DateStatus>
        <Status>Current Date: {currentDate.toDateString()}</Status>
        <Status>Selected Date: {selectedDate.toDateString()}</Status>
      </DateStatus>
    </Wrapper>
  );
};

export default YogaCalendar;
