import { useState } from "react";
import axios from "axios";

const useAppState = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [geoData, setGeoData] = useState(null);
  const [ipAddress, setIpAddress] = useState(null); //set users public ip address as default

  const handleGeoDataRequest = () => {
    setLoading(true);
    setError(false);

    let requestUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEOIPIFY_API_KEY}`;
    requestUrl += ipAddress ? `&ipAddress=${ipAddress}` : "";

    axios
      .get(requestUrl)
      .then((response) => setGeoData(response.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    /*     setGeoData(jsonData);
    setLoading(false);
    setError(false); */
  };

  return {
    geoData,
    handleGeoDataRequest,
    hasError,
    ipAddress,
    isLoading,
    setIpAddress,
  };
};

export default useAppState;
