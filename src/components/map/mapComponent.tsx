import { useCallback, useEffect, useRef, useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, Marker } from '@react-google-maps/api';
import CustomMarker from "@/components/map/CustomMarker";
import { cities } from "@/directions-functions/direction-functions";
import DestinationDepartureMarker from "@/components/map/DestinationDepartureMarker";
import { FiMap , FiList  } from "react-icons/fi";
import StopItem from "@/components/map/StopItem";
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

const defaultMapContainerStyle = {
    width: '95%',
    maxWidth: '1080px',
    marginLeft: 'auto',
    marginTop: '16px',
    marginRight: 'auto',
    height: '600px',
    borderRadius: '1.5rem',
};

const defaultMapZoom = 14;

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
    mapId: "ab333b49f1c59e6c",
};

const MapComponent = ({ departure, destination, setDistance, setDuration, setPoints }) => {
    const [mapKey, setMapKey] = useState(Date.now());
    const mapRef = useRef(null);
    const directionsRendererRef = useRef(null);
    const [directions, setDirections] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: (departure.latitude + destination.latitude) / 2, lng: (departure.longitude + destination.longitude) / 2 });
    const [directionsRequested, setDirectionsRequested] = useState(false);
    const [nearbyCities, setNearbyCities] = useState([]);
    const [waypoints, setWaypoints] = useState([]);
    const [selectedWaypoints, setSelectedWaypoints] = useState([]);
    const [showMap, setShowMap] = useState(false);

    const directionsCallback = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setDirections(response);
                setDistance(response.routes[0].legs[0].distance)
                setDuration(response.routes[0].legs[0].duration)
                setDirectionsRequested(true);

                const route = response.routes[0].overview_path;
                const nearby = cities.filter(city => {
                    const isNearRoute = route.some(point => distanceBetween(city.latitude, city.longitude, point.lat(), point.lng()) < 30);
                    const isNotDeparture = city.latitude !== departure.latitude || city.longitude !== departure.longitude;
                    const isNotDestination = city.latitude !== destination.latitude || city.longitude !== destination.longitude;
                    return isNearRoute && isNotDeparture && isNotDestination;
                }).map(city => ({ ...city, visitTime: 0 }));

                // Calculate distance from departure and sort nearby cities
                const calculateDistance = (lat1, lon1, lat2, lon2) => {
                    const R = 6371; // Radius of the Earth in km
                    const dLat = (lat2 - lat1) * Math.PI / 180;
                    const dLon = (lon2 - lon1) * Math.PI / 180;
                    const a =
                        0.5 - Math.cos(dLat)/2 +
                        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                        (1 - Math.cos(dLon))/2;
                    return R * 2 * Math.asin(Math.sqrt(a));
                };

                const sortedNearby = nearby.sort((a, b) => {
                    const distanceA = calculateDistance(departure.latitude, departure.longitude, a.latitude, a.longitude);
                    const distanceB = calculateDistance(departure.latitude, departure.longitude, b.latitude, b.longitude);
                    return distanceA - distanceB;
                });

                setNearbyCities(sortedNearby);

                if (directionsRendererRef.current) {
                    directionsRendererRef.current.setDirections(response);
                } else {
                    directionsRendererRef.current = new google.maps.DirectionsRenderer({
                        map: mapRef.current,
                        directions: response,
                        suppressMarkers: true,
                    });
                }
            } else {
                console.error('Directions request failed due to ' + response.status);
            }
        }
    };

    const addWaypoint = (position, cityId, visitTime) => {
        if (waypoints.length < 10) {
            setWaypoints([...waypoints, position]);
            setSelectedWaypoints([...selectedWaypoints, { id: cityId, visitTime }]);
            setDirectionsRequested(false);
        } else {
            console.log('Maximum of 10 waypoints reached.');
        }
    };

    const removeWaypoint = (position, cityId) => {
        setWaypoints(waypoints.filter(wp => wp.lat !== position.lat || wp.lng !== position.lng));
        setSelectedWaypoints(selectedWaypoints.filter(waypoint => waypoint.id !== cityId));
        setDirectionsRequested(false);
    };

    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    useEffect(() => {
        setMapCenter({ lat: (departure.latitude + destination.latitude) / 2, lng: (departure.longitude + destination.longitude) / 2 });
        setMapKey(Date.now());  // Update the key to force remount

        setDirections(null);
        setNearbyCities([]);
        setWaypoints([]);
        setSelectedWaypoints([]);
        setDirectionsRequested(false);
    }, [departure, destination]);

    const findVisitTime = (cityId) => {
        const waypoint = selectedWaypoints.find(waypoint => waypoint.id === cityId);
        return waypoint ? waypoint.visitTime : null; // Return null or a default value if not found
    };

    useEffect(() => {
        if (!directionsRequested) {
            setDirections(null);
        }

        if (directionsRendererRef.current) {
            directionsRendererRef.current.setMap(null);
            directionsRendererRef.current = null;
        }
    }, [waypoints, directionsRequested]);

    return (
        <div className="w-full">
            <div className="flex w-[95%] max-w-[1080px] mx-auto gap-4 justify-end items-center mt-4">
                <FiList size={30} onClick={() => setShowMap(false)} />
                <FiMap size={30} onClick={() => setShowMap(true)} />
                <FiMap size={30} onClick={() => console.log(directions.routes[0].legs[0])} />

            </div>

            <div style={{ display: showMap ? 'block' : 'none' }}>
                <GoogleMap
                    key={mapKey}  // Use unique key to force remount
                    mapContainerStyle={defaultMapContainerStyle}
                    center={mapCenter}
                    zoom={defaultMapZoom}
                    options={defaultMapOptions}
                    onLoad={onLoad}
                >
                    <DestinationDepartureMarker
                        map={mapRef.current}
                        image={"/madrid-m.jpg"}
                        label={departure.name}
                        position={{ lat: departure.latitude, lng: departure.longitude }}
                        description={'Description of departure'}
                        Pointclass={'departure-point'}
                    />
                    <DestinationDepartureMarker
                        map={mapRef.current}
                        image={"/madrid-m.jpg"}
                        label={destination.name}
                        position={{ lat: destination.latitude, lng: destination.longitude }}
                        description={'Description of destination'}
                        Pointclass={'destination-point'}
                    />
                    {directions && (
                        <DirectionsRenderer
                            options={{
                                directions,
                                suppressMarkers: true,
                            }}
                        />
                    )}
                    {nearbyCities.map((city, index) => (
                        <CustomMarker
                            key={city.id + index}
                            map={mapRef.current}
                            position={{ lat: city.latitude, lng: city.longitude }}
                            label={city.name}
                            time={findVisitTime(city.id)}
                            image={"/madrid-m.jpg"}
                            description={'Description of city'}
                            isSelected={selectedWaypoints.some(waypoint => waypoint.id === city.id)}
                            onAdd={(visitTime) => addWaypoint({ lat: city.latitude, lng: city.longitude }, city.id, visitTime)}
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

            {!showMap && (
                <div className='w-full max-w-[1080px] mx-auto'>
                    {nearbyCities.map((city, index) => (
                        <StopItem
                            time={findVisitTime(city.id)}
                            key={city.id + index}
                            position={{ lat: city.latitude, lng: city.longitude }}
                            label={city.name}
                            image={"/madrid-m.jpg"}
                            description={'Description of city'}
                            isSelected={selectedWaypoints.some(waypoint => waypoint.id === city.id)}
                            onAdd={(visitTime) => addWaypoint({ lat: city.latitude, lng: city.longitude }, city.id, visitTime)}
                            onRemove={() => removeWaypoint({ lat: city.latitude, lng: city.longitude }, city.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MapComponent;
