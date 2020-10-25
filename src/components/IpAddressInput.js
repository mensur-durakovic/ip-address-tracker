import React, { useState } from "react";
import ArrowImage from "../assets/icon-arrow.svg";
import LocationStats from "./LocationStats";

export default function IpAddressInput(props) {
  const [userIpAddress, setUserIpAddress] = useState("");
  const { geoData, setIpAddress, hasError, loading } = props;

  return (
    <div className="ip">
      <div className="ip-container">
        <h1 className="ip-title">IP Address Tracker</h1>
        <form className="ip-input-group">
          <input
            name="ipAddress"
            id="ipAddress"
            title="ip address input"
            aria-label="Ip Address Input"
            className="ip-input"
            type="text"
            placeholder="Search for any IP address"
            autoComplete="off"
            disabled={loading}
            onChange={(e) => setUserIpAddress(e.target.value)}
          ></input>
          <div
            className="ip-input-icon"
            onClick={() => setIpAddress(userIpAddress)}
          >
            <img src={ArrowImage} alt="arrow"></img>
          </div>
        </form>
        <LocationStats
          geoData={geoData}
          loading={loading}
          hasError={hasError}
        />
      </div>
    </div>
  );
}
