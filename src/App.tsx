import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cardDetails from "./dummyData.json";
import UserCard, { IUserCardProps } from "./components/UserCard";

function App() {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#FDEFE6",
        paddingTop: "50px",
      }}
      onClick={() => activeCard !== null && setActiveCard(null)}
    >
      <img src={logo} className="logo" alt="logo" />
      <div style={{ display: "flex", flexDirection: "column", width: "77%" }}>
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
