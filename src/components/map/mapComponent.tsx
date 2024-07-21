import { useCallback, useEffect, useRef, useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap } from '@react-google-maps/api';
import CustomMarker from "@/components/map/CustomMarker";
import { cities } from "@/directions-functions/direction-functions";

// Utility functions for distance calculation
const toRad = (value) => value * Math.PI / 180;

const distanceBetween = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

// Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '600px',
    borderRadius: '15px',
};

// Default zoom level, can be adjusted
const defaultMapZoom = 14;

// Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
    mapId: "8e0a97af9386fef",
};

const MapComponent = ({ departure, destination }) => {
    const mapRef = useRef(null);
    const [directions, setDirections] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: (departure.latitude + destination.latitude) / 2, lng: (departure.longitude + destination.longitude) / 2 });
    const [directionsRequested, setDirectionsRequested] = useState(false);
    const [nearbyCities, setNearbyCities] = useState([]);
    const [waypoints, setWaypoints] = useState([]);
    const [selectedWaypoints, setSelectedWaypoints] = useState([]);

    const directionsCallback = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setDirections(response);
                setDirectionsRequested(true);

                // Extract route path
                const route = response.routes[0].overview_path;

                // Find nearby cities
                const nearby = cities.filter(city => {
                    const isNearRoute = route.some(point => distanceBetween(city.latitude, city.longitude, point.lat(), point.lng()) < 30);
                    const isNotDeparture = city.latitude !== departure.latitude || city.longitude !== departure.longitude;
                    const isNotDestination = city.latitude !== destination.latitude || city.longitude !== destination.longitude;
                    return isNearRoute && isNotDeparture && isNotDestination;
                });

                setNearbyCities(nearby);

                if (mapRef.current) {
                    const directionsRenderer = new google.maps.DirectionsRenderer({
                        map: mapRef.current,
                        directions: response,
                        suppressMarkers: true, // This hides the default markers
                    });

                    directionsRenderer.setMap(mapRef.current);
                    directionsRenderer.setDirections(response);
                }
            } else {
                console.error('Directions request failed due to ' + response.status);
            }
        }
    };

    const addWaypoint = (position, cityId) => {
        if (waypoints.length < 10) {
            setWaypoints([...waypoints, position]);
            setSelectedWaypoints([...selectedWaypoints, cityId]);
            setDirectionsRequested(false); // Trigger new directions request
        } else {
            console.log('Maximum of 10 waypoints reached.');
        }
    };

    const removeWaypoint = (position, cityId) => {
        setWaypoints(waypoints.filter(wp => wp.lat !== position.lat || wp.lng !== position.lng));
        setSelectedWaypoints(selectedWaypoints.filter(id => id !== cityId));
        setDirectionsRequested(false); // Trigger new directions request
    };

    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    useEffect(() => {
        const center = { lat: (departure.latitude + destination.latitude) / 2, lng: (departure.longitude + destination.longitude) / 2 };
        setMapCenter(center);
        setDirectionsRequested(false);
    }, [departure, destination]);

    useEffect(() => {
        if (!directionsRequested) {
            setDirections(null); // Clear previous directions to force re-render
        }
    }, [waypoints, directionsRequested]);

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={mapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
                onLoad={onLoad}
            >
                {directions && (
                    <DirectionsRenderer
                        options={{
                            directions,
                            suppressMarkers: true, // Hide default markers
                        }}
                    />
                )}
                {nearbyCities.map((city, index) => (
                    <CustomMarker
                        key={city.id + index}
                        map={mapRef.current}
                        position={{ lat: city.latitude, lng: city.longitude }}
                        label={city.name}
                        description={'hello today lorem ipsum very good map'}
                        isSelected={selectedWaypoints.includes(city.id)}
                        onAdd={() => addWaypoint({ lat: city.latitude, lng: city.longitude }, city.id)}
                        onRemove={() => removeWaypoint({ lat: city.latitude, lng: city.longitude }, city.id)}
                    />
                ))}
                {!directionsRequested && (
                    <DirectionsService
                        options={{
                            origin: { lat: departure.latitude, lng: departure.longitude },
                            destination: { lat: destination.latitude, lng: destination.longitude },
                            waypoints: waypoints.map(wp => ({ location: wp })),
                            travelMode: 'DRIVING',
                        }}
                        callback={directionsCallback}
                    />
                )}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
