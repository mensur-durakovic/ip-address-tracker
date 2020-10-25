import React from "react";

export default function LocationStats(props) {
  const { geoData, loading, hasError } = props;

  if (loading) {
    return <div className="ip-stats">Loading...</div>;
  } else if (hasError) {
    return (
      <div className="ip-stats-error">
        Oops, an error has occurred! Please input IP address in correct format
      </div>
    );
  }

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
