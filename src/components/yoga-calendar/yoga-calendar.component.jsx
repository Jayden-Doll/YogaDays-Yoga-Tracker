import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Calendar } from "react-calendar";

import { Wrapper } from "./yoga-calendar.styles";

const YogaCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const parsedLocalStorageData = JSON.parse(
    localStorage.getItem("PAGE_DATA_STORE")
  );

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
        showNeighboringMonth={false}
        view="month"
        calendarType="US"
        maxDate={currentDate}
        showFixedNumberOfWeeks={true}
        value={selectedDate}
        tileClassName={({ date }) => {
          const result = Object.entries(parsedLocalStorageData);

          const makeNewDate = () => {
            return date.getDate().toLocaleString().replaceAll("/", "");
          };

          const newDate = makeNewDate();
          if (result.find((x) => x[1].VIDEO_STATUS)) {
            console.log(result);
          }
        }}
      />
    </Wrapper>
  );
};

export default YogaCalendar;
