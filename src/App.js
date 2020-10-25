import React, { useEffect } from "react";
import appState from "./hooks/state";
import IpAddressInput from "./components/IpAddressInput";
import LocationMap from "./components/LocationMap";

import BackgroundBlue from "./assets/pattern-bg.png";

function App() {
  const {
    geoData,
    handleGeoDataRequest,
    ipAddress,
    setIpAddress,
    hasError,
    isLoading,
  } = appState();

  useEffect(() => {
    handleGeoDataRequest();
  }, [ipAddress]);

  console.log("JSON.stringify(geoData)", JSON.stringify(geoData));

  return (
    <div className="container">
      <IpAddressInput
        geoData={geoData}
        setIpAddress={setIpAddress}
        hasError={hasError}
        isLoading={isLoading}
      />
      <div className="ip-bg">
        <img src={BackgroundBlue} alt="blue background"></img>
      </div>
      {geoData && (
        <LocationMap
          lat={geoData.location.lat}
          lng={geoData.location.lng}
          zoom={16}
        />
      )}
    </div>
  );
}

export default App;
