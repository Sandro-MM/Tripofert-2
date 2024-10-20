import React, {useState, useRef, useCallback} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import Image from "next/image";
import {useDebouncedCallback} from "use-debounce";

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
    const [center, setCenter] = useState(initialRegion);
    const [addressValue, setAddressValue] = useState(null);
    const mapRef = useRef(null);
    const centerTimeoutRef = useRef(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBr1rXP2OwtxCKz8LeSwPmjLSUZdWoyeBI',
        libraries: ['places'],
    });

    const reverseGeocode = async (lat, lng) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBr1rXP2OwtxCKz8LeSwPmjLSUZdWoyeBI`
            );
            const data = await response.json();
            if (data.status === 'OK' && data.results.length > 0) {
                const address = data.results[0].formatted_address;
                setAddressValue(address);
                onLocationSelect({ lat, lng, address });
            } else {
                console.error('Address not found');
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    const handleMapIdle = useCallback(() => {
        if (centerTimeoutRef.current) {
            clearTimeout(centerTimeoutRef.current);
        }

        centerTimeoutRef.current = setTimeout(() => {
            if (mapRef.current) {
                const center = mapRef.current.getCenter();
                if (center) {
                    const lat = center.lat();
                    const lng = center.lng();
                    console.log('Map center:', lat, lng); // Debug log
                    reverseGeocode(lat, lng);
                }
            }
        }, 1000);
    }, []);

    const handleMapLoad = (map) => {
        mapRef.current = map;
        setCenter(initialRegion); // Set initial center on load
    };

    const handlePlaceSelect = async (place) => {
        try {
            const results = await geocodeByAddress(place.label);
            const { lat, lng } = await getLatLng(results[0]);
            setAddressValue(place.label);
            onLocationSelect({ lat, lng, address: place.label });
            onLocationSelect({ lat, lng, address: place.label });
            moveMarkerAnimate(lat, lng);
        } catch (error) {
            console.error('Error handling place selection:', error);
        }
    };

    const moveMarkerAnimate = async (lat, lng) => {
        // Ensure the map reference is available
        if (mapRef.current) {

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
                    apiKey="AIzaSyBr1rXP2OwtxCKz8LeSwPmjLSUZdWoyeBI"
                    selectProps={{
                        value: addressValue,
                        onChange: (value) => {handlePlaceSelect(value); console.log(value)},
                        placeholder:addressValue
                    }}
                />
            </div>
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={center}
                zoom={13}
                onIdle={handleMapIdle}
                onLoad={handleMapLoad}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false,
                }}
            >
            </GoogleMap>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/marker.svg" width={50} height={50} alt="marker" />
            </div>
        </div>
    );
};

export default MapPicker;
