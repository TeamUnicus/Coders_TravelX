import "./App.css";

import Appheader from "./Home/header";
import Welcome from "./Home/welcome";
import MainCarosel from "./Home/mainCarosel";
import ButtonCarosel from "./Home/buttonCarosel";
import CardCarosel from "./Home/cardCarosel";

function App() {
  return (
    <>
      <Appheader></Appheader>
      <Welcome></Welcome>
      <MainCarosel></MainCarosel>
      <ButtonCarosel></ButtonCarosel>
      <CardCarosel></CardCarosel>
    </>
  );
}

export default App;
