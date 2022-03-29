import React, { useState } from "react";
import "./Slider.css";
import Toggle from "./Toggle";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, LightTheme } from "./Themes";
import icon from "./icon-check.svg";

function Slider() {
  const [pageVeiws, setPageVeiws] = useState("50");
  const [billingType, setBillingType] = useState("yearly");

  const billingTypeSwitcher = () => {
    billingType === "yearly"
      ? setBillingType("monthly")
      : setBillingType("yearly");
  };
  return (
    <ThemeProvider theme={billingType === "yearly" ? LightTheme : darkTheme}>
      <main>
        <div className="price">
          <p>{pageVeiws}K PAGEVIEWS</p>
          <p id="bold">
            $
            {parseInt(pageVeiws) < 100
              ? billingType === "yearly"
                ? "14"
                : "16"
              : billingType === "yearly"
              ? "18"
              : "24"}
          </p>
        </div>
        <div className="slideBlock">
          <div
            className="slideProgress"
            style={{ width: (parseInt(pageVeiws) / 200) * 100 + "%" }}
          ></div>
          <input
            onChange={(e) => setPageVeiws(e.target.value)}
            type="range"
            name="price"
            id="price"
            min="1"
            max="200"
          />
        </div>
        <div className="billing">
          <p>Monthly Billing</p>
          <div onClick={billingTypeSwitcher}>
            <Toggle />
          </div>
          <p>Yearly Billing</p>
          <small>25% discount</small>
        </div>
        <div className="line"></div>
        <div className="perks">
          <div className="left">
            <div>
              <img src={icon} alt="" /> unlimited websites
            </div>
            <div>
              <img src={icon} alt="" /> 100% data ownership
            </div>
            <div>
              <img src={icon} alt="" /> Email reports
            </div>
          </div>
          <div className="right">
            <button>Start my trial</button>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default Slider;
