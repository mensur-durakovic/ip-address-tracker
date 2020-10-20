import React from "react";
import MarkerIcon from "../assets/icon-location.svg";
import { Map, TileLayer, Marker } from "react-leaflet";

import L from "leaflet";

export default function LocationMap(props) {
  const { lat, lng, zoom } = props;
  const position = [lat, lng];

  const pointerIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconRetinaUrl: MarkerIcon,
  });

  return (
    <div className="location-map">
      {lat && lng && (
        <Map center={position} zoom={zoom} zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={pointerIcon}></Marker>
        </Map>
      )}
    </div>
  );
}
