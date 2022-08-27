import React from "react";
import logo from "./logo.svg";
import "./App.css";
import cardDetails from "./dummyData.json";
import UserCard, { IUserCardProps } from "./components/UserCard";

function App() {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  console.log(activeCard);
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
        {activeCard === null ? (
          cardDetails.map((details, i) => (
            <div key={i} onClick={() => setActiveCard(i)}>
              <UserCard {...details} />
            </div>
          ))
        ) : (
          <UserCard {...cardDetails[activeCard]} expanded />
        )}
      </div>
    </div>
  );
}

export default App;
