import React from "react";

export default function LocationStats(props) {
  const { geoData } = props;
  return geoData ? (
    <div className="ip-stats">
      <div className="ip-stats-item">
        <div className="ip-stats-item-title">ip address</div>
        <div className="ip-stats-item-text">{geoData.ip}</div>
      </div>
      <div className="ip-stats-item">
        <div className="ip-stats-item-title">location</div>
        <div className="ip-stats-item-text">{`${geoData.location.city}, ${geoData.location.region}`}</div>
      </div>
      <div className="ip-stats-item">
        <div className="ip-stats-item-title">timezone</div>
        <div className="ip-stats-item-text">{`UTC ${geoData.location.timezone}`}</div>
      </div>
      <div className="ip-stats-item">
        <div className="ip-stats-item-title">isp</div>
        <div className="ip-stats-item-text">{`UTC ${geoData.isp}`}</div>
      </div>
    </div>
  ) : null;
}
