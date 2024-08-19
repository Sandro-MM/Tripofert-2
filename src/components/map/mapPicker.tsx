import React, { useState, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

type Library =
    | "core"
    | "maps"
    | "places"
    | "geocoding"
    | "routes"
    | "marker"
    | "geometry"
    | "elevation"
    | "streetView"
    | "journeySharing"
    | "drawing"
    | "visualization";

 type Libraries = Library[];

const libraries:Library[] = ["places"];

const MapPicker = ({ onLocationSelect, initialRegion }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [addressValue, setAddressValue] = useState(null);
    const mapRef = useRef<google.maps.Map | null>(null);


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDaS2UHnLtpquY4hupwPoDlvYrCiOGg1QM',
        libraries,
    });

    const reverseGeocode = async (lat, lng) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDaS2UHnLtpquY4hupwPoDlvYrCiOGg1QM`
            );
            const data = await response.json();
            if (data.status === 'OK' && data.results.length > 0) {
                const address = data.results[0].formatted_address;
                setAddressValue(address);
                setSelectedLocation({ lat, lng, address });
                onLocationSelect({ lat, lng, address });
            } else {
                console.error('Address not found');
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    const handlePlaceSelect = async (place) => {
        try {
            const results = await geocodeByAddress(place.label);
            const { lat, lng } = await getLatLng(results[0]);
            setAddressValue(place.label);
            setSelectedLocation({ lat, lng, address: place.label });
            onLocationSelect({ lat, lng, address: place.label });
            moveMarkerAnimate(lat, lng);
        } catch (error) {
            console.error('Error handling place selection:', error);
        }
    };

    const handleMapClick = async (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        await moveMarkerAnimate(lat, lng);
    };
    const moveMarkerAnimate = async (lat, lng) => {
        // Ensure the map reference is available
        if (mapRef.current) {
            // Smoothly pan the map to the new coordinates
            mapRef.current.panTo({ lat, lng });

            // Optionally, you can adjust the zoom level here
            mapRef.current.setZoom(15);

            // Additional small delay before reverse geocoding, if needed
            await new Promise((resolve) => setTimeout(resolve, 300));
        }

        // Perform reverse geocoding
        await reverseGeocode(lat, lng);
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="relative">
            <div className="p-4 z-1">
                <GooglePlacesAutocomplete
                    apiKey="YOUR_GOOGLE_MAPS_API_KEY"
                    selectProps={{
                        value: addressValue,
                        onChange: handlePlaceSelect,
                        placeholder: 'Search for a location',
                    }}
                />
            </div>
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={initialRegion}
                zoom={13}
                onClick={handleMapClick}
                onLoad={(map: google.maps.Map) => {
                    mapRef.current = map;
                }}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false,
                }}
            >
                {selectedLocation && (
                    <Marker
                        position={{
                            lat: selectedLocation.lat,
                            lng: selectedLocation.lng,
                        }}
                        icon={{
                            url: 'marker.svg', // Replace with your image URL
                            scaledSize: new window.google.maps.Size(50, 50),
                        }}
                    />
                )}
            </GoogleMap>
        </div>
    );
};

export default MapPicker;
