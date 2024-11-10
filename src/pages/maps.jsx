import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
    const mapStyles = {
        height: "70vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 40.7128,  // Default latitude (New York City)
        lng: -74.0060  // Default longitude
    };

    const [currentLocation, setCurrentLocation] = React.useState(defaultCenter);

    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Location Map</h1>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={currentLocation}
                >
                    <Marker position={currentLocation} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Maps;