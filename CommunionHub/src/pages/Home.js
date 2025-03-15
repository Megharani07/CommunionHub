import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Connecting People Across Faiths & Interests</h2>
      <p className="home-description">Connecting people of all faiths through events and community support.</p>
      <button className="cta-button">
        <Link to="/events">Explore Events</Link>
      </button>
    </div>
  );
}

export default Home;