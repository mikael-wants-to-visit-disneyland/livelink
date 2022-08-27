import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cardDetails from "./dummyData.json";
import UserCard from "./components/UserCard";

function App() {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  return (
    <div
      className="usercard-view"
      onClick={() => activeCard !== null && setActiveCard(null)}
    >
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="usercard-list">
        {cardDetails.map((details, i) => (
          <div key={i} onClick={() => setActiveCard(i)}>
            <UserCard
              {...details}
              expanded={activeCard === i}
              hidden={activeCard !== null && activeCard !== i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
