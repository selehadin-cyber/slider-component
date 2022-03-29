import React from "react";
import "./App.css";
// @ts-ignore
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <header>
        <img src="../images/bg-pattern.svg" alt="circles" />
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card
      required.</p>
      </header>
      <Slider />
      
      {/*  /month Monthly Billing Yearly Billing 25% discount
  Unlimited websites 100% data ownership Email reports Start my trial*/}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://selehadin.xyz">Selehadin A.</a>.
      </div>
    </div>
  );
}

export default App;
