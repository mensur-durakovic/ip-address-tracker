import React, { useState } from "react";
import ArrowImage from "../assets/icon-arrow.svg";
import LocationStats from "./LocationStats";

export default function IpAddressInput(props) {
  const [userIpAddress, setUserIpAddress] = useState("");
  const { geoData, setIpAddress } = props;

  return (
    <div className="ip">
      <div className="ip-container">
        <h1 className="ip-title">IP Address Tracker</h1>
        <div className="ip-input-group">
          <input
            className="ip-input"
            type="text"
            onChange={(e) => setUserIpAddress(e.target.value)}
          ></input>
          <div
            className="ip-input-icon"
            onClick={() => setIpAddress(userIpAddress)}
          >
            <img src={ArrowImage} alt="arrow"></img>
          </div>
        </div>
        <LocationStats geoData={geoData} />
      </div>
    </div>
  );
}
