import { Route, Routes } from "react-router";

import Day from "./routes/day/day.component";
import Home from "./routes/home/home.component";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/day" element={<Day />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
