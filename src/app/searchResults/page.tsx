"use client"
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchFilter from "@/components/searchPageComponents/searchFilter";
import {useSearchParams} from 'next/navigation'
import React, {Suspense, useEffect, useState} from "react";
import {searchPlaceInterface} from "@/directions-functions/direction-functions";
import {MapProvider} from "@/components/map/mapProvider";
import RouteBarComponent from "@/components/searchPageComponents/routeBarComponent";
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/map/mapComponent'), {
    ssr: false,
});

export default function Page({ params }) {
    const [searchParams] = React.useState(useSearchParams());
    const [departure, setDeparture] = useState<searchPlaceInterface>({
        id: +searchParams.get('departureId') || 0,
        name: searchParams.get('departureName') || '',
        country: searchParams.get('departureCountry') || '',
        latitude: +searchParams.get('departureLatitude') || 0,
        longitude: +searchParams.get('departureLongitude') || 0
    });
    const [destination, setDestination] = useState<searchPlaceInterface>({
        id: +searchParams.get('destinationId') || 0,
        name: searchParams.get('destinationName') || '',
        country: searchParams.get('destinationCountry') || '',
        latitude: +searchParams.get('destinationLatitude') || 0,
        longitude: +searchParams.get('destinationLongitude') || 0
    });
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [passengers, setPassengers] = useState<number | string | undefined>(searchParams.get('passengers'));
    const [mapDeparture, setMapDeparture] = useState<searchPlaceInterface>(departure);
    const [mapDestination, setMapDestination] = useState<searchPlaceInterface>(destination);
    const [duration, setDuration] = useState<any>(undefined);
    const [distance, setDistance] = useState<any>(undefined);
    const [points, setPoints] = useState<any>(undefined);

    const parseDateFromQuery = (dateString: string): Date | undefined => {
        if (!dateString) return undefined;
        const decodedDate = decodeURIComponent(dateString);
        const dateObject = new Date(decodedDate);
        if (!isNaN(dateObject.getTime())) {
            return dateObject;
        } else {
            console.error("Invalid date format");
            return undefined;
        }
    };

    useEffect(() => {
        if (searchParams.get('date')) {
            const parsedDate = parseDateFromQuery(searchParams.get('date'));
            setDate(parsedDate);
        }
    }, [searchParams]);

    const id = params.data;

    return (
        <main className="relative w-full min-h-screen">
            <ThemeSwitch />
            <SearchFilter
                setMapDeparture={setMapDeparture}
                setMapDestination={setMapDestination}
                departure={departure}
                destination={destination}
                setDeparture={setDeparture}
                setDestination={setDestination}
                date={date}
                setDate={setDate}
                passengers={passengers}
                setPassengers={setPassengers}
                distance={distance}
                points={points}
            />
            <RouteBarComponent points={points} departure={mapDeparture.name} destination={mapDestination.name} />
            <MapProvider>
                <MapComponent
                    departure={mapDeparture}
                    setPoints={setPoints}
                    setDistance={setDistance}
                    setDuration={setDuration}
                    destination={mapDestination}
                />
            </MapProvider>
        </main>
    );
}
