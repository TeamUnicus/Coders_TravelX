import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Locations from "./Locations";
import "./BottomCard.css";
import BottomCard from "./BottomCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Locations></Locations>

      <div className="row">
        <BottomCard
          title="Rolls Roys Jet"
          contentImage="src\assets\superx1.png"
        >
          <p className="mode-luxury-train">
            Mode--&gt;Luxury Jet
            <br />
            Price--&gt;3499$
            <br />
            Journey Time--&gt; 17 hours
          </p>
        </BottomCard>
        <BottomCard title="Super X Train" contentImage="src\assets\superx2.png">
          <p className="mode-luxury-train">
            Mode--&gt;Luxury Train
            <br />
            Price--&gt;999$
            <br />
            Journey Time--&gt; 47 hours
          </p>
        </BottomCard>
        <BottomCard
          title="Boeng Aero Ship"
          contentImage="src\assets\superx3.png"
        >
          <p className="mode-luxury-train">
            Mode--&gt;Luxury Ship
            <br />
            Price--&gt;1999$
            <br />
            Journey Time--&gt; 27 hours
          </p>
        </BottomCard>
        <BottomCard
          title="Rolls Roys Jet"
          contentImage="src\assets\superx1.png"
        >
          <p className="mode-luxury-train">
            Mode--&gt;Luxury Jet
            <br />
            Price--&gt;3499$
            <br />
            Journey Time--&gt; 17 hours
          </p>
        </BottomCard>
      </div>
    </>
  );
}

export default App;
