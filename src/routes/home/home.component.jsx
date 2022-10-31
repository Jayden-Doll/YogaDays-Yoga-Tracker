import { useEffect, useContext } from "react";

import YogaCalendar from "../../components/yoga-calendar/yoga-calendar.component";
import LocalStorageContext from "../../contexts/local-storage.context";

import { Wrapper, PageDecoration } from "./home.styles";

const Home = () => {
  const localStorage = window.localStorage;

  const { pageData, setPageData } = useContext(LocalStorageContext);

  const storageCheck = () => {
    localStorage.setItem("PAGE_DATA_STORE", pageData);
    console.log("Set local storage for first time");
  };

  useEffect(() => {
    setPageData(localStorage.getItem("PAGE_DATA_STORE"));
    if (!localStorage.getItem("PAGE_DATA_STORE")) {
      storageCheck();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <PageDecoration />
      <YogaCalendar />
    </Wrapper>
  );
};

export default Home;
