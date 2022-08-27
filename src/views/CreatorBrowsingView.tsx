import React from "react";
import logo from "../logo.svg";
import "./CreatorBrowsingView.css";
import cardDetails from "../dummyData.json";
import CreatorCard from "../components/CreatorCard";

function CreatorBrowsingView() {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  return (
    <div
      className="creator-browsing-view"
      onClick={() => activeCard !== null && setActiveCard(null)}
    >
      <div className="creator-browsing-view-header">
        <img src={logo} className="creator-browsing-view-logo" alt="logo" />
      </div>
      <div className="creator-browsing-view-list">
        {cardDetails.map((details, i) => (
          <div key={i} onClick={() => setActiveCard(i)}>
            <CreatorCard
              {...details}
              expanded={activeCard === i}
              faded={activeCard !== null && activeCard !== i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorBrowsingView;
