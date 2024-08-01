"use client"
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchFilter from "@/components/searchPageComponents/searchFilter";
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {searchPlaceInterface} from "@/directions-functions/direction-functions";
import MapComponent from "@/components/map/mapComponent";
import {MapProvider} from "@/components/map/mapProvider";
import RouteBarComponent from "@/components/searchPageComponents/routeBarComponent";

export default function Page({params}) {
    const searchParams = useSearchParams()
    const departureId = searchParams.get('departureId')
    const [departure, setDeparture] = useState<searchPlaceInterface>({"id": +searchParams.get('departureId'), "name": searchParams.get('departureName'), "country": searchParams.get('departureCountry'), "latitude": +searchParams.get('departureLatitude'), "longitude": +searchParams.get('departureLongitude')});
    const [destination, setDestination] = useState<searchPlaceInterface>({"id": +searchParams.get('destinationId'), "name": searchParams.get('destinationName'), "country": searchParams.get('destinationCountry'), "latitude": +searchParams.get('destinationLatitude'), "longitude": +searchParams.get('destinationLongitude')});
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [passengers, setPassengers] = useState<number | string | undefined>(searchParams.get('passengers'));
    const [mapDeparture, setMapDeparture] = useState<searchPlaceInterface>(departure)
    const [mapDestination, setMapDestination] = useState<searchPlaceInterface>(destination)
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
    }, [searchParams.get('date')]);

    const id = params.data
    return (
        <main className="relative w-full min-h-screen">
            <ThemeSwitch/>
            <SearchFilter setMapDeparture={setMapDeparture} setMapDestination={setMapDestination} departure={departure}
                          destination={destination} setDeparture={setDeparture} setDestination={setDestination}
                          date={date} setDate={setDate} passengers={passengers} setPassengers={setPassengers} distance={distance} points={points}/>

            <RouteBarComponent points={points} departure={mapDeparture.name} destination={mapDestination.name}/>
            <MapProvider>
                <MapComponent departure={mapDeparture} setPoints={setPoints} setDistance={setDistance}
                              setDuration={setDuration} destination={mapDestination}/>
            </MapProvider>
        </main>
    );
}
