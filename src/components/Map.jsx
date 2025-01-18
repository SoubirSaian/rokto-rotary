import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapWithMarkers = () => {
  // Define the locations with latitude and longitude
  const locations = [
    { id: 1, name: "Location 1", position: { lat: 40.748817, lng: -73.985428 } }, // Example: New York
    { id: 2, name: "Location 2", position: { lat: 34.052235, lng: -118.243683 } }, // Example: Los Angeles
    { id: 3, name: "Location 3", position: { lat: 41.878113, lng: -87.629799 } }, // Example: Chicago
  ];

  // Map container style
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  // Default center for the map
  const center = { lat: 39.8283, lng: -98.5795 }; // Geographic center of the contiguous US

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={4} // Adjust zoom level as needed
      >
        {/* Render a Marker for each location */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithMarkers;
