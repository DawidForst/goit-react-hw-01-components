import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

import markerIcon from "./marker-icon.png";
import markerShadow from "./marker-shadow.png";

L.Icon.Default.prototype.options.iconUrl = markerIcon;
L.Icon.Default.prototype.options.shadowUrl = markerShadow;

export const Map = ({ city }) => {
  const [position, setPosition] = useState([0, 0]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const zoomLevel = 13;

  useEffect(() => {
    const geocodeCity = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            city
          )}&key=69e31738cd98482d8c52238bddb048e7`
        );
        const data = await response.json();
        const firstResult = data.results[0];
        if (firstResult) {
          const { lat, lng } = firstResult.geometry;
          setPosition([lat, lng]);
          setIsDataLoaded(true);
        }
      } catch (error) {
        console.error("Błąd podczas geokodowania miasta:", error);
      }
    };

    geocodeCity();
  }, [city]);

  return (
    <>
      {isDataLoaded ? (
        <MapContainer
          center={position}
          zoom={zoomLevel}
          scrollWheelZoom={false}
          className="map-container"
          key={position.toString()}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </>
  );
};

export default Map;