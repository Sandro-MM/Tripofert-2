"use client"
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchFilter from "@/components/searchPageComponents/searchFilter";
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {searchPlaceInterface} from "@/directions-functions/direction-functions";
import MapComponent from "@/components/map/mapComponent";
import {MapProvider} from "@/components/map/mapProvider";

export default function Page({params}) {
    const searchParams = useSearchParams()
    const departureId = searchParams.get('departureId')
    const [departure, setDeparture] = useState<searchPlaceInterface>({"id": +searchParams.get('departureId'), "name": searchParams.get('departureName'), "country": searchParams.get('departureCountry'), "latitude": +searchParams.get('departureLatitude'), "longitude": +searchParams.get('departureLongitude')});
    const [destination, setDestination] = useState<searchPlaceInterface>({"id": +searchParams.get('destinationId'), "name": searchParams.get('destinationName'), "country": searchParams.get('destinationCountry'), "latitude": +searchParams.get('destinationLatitude'), "longitude": +searchParams.get('destinationLongitude')});
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [passengers, setPassengers] = useState<number | string | undefined>(searchParams.get('passengers'));
    const [mapDeparture, setMapDeparture] = useState<searchPlaceInterface>(departure)
    const [mapDestination, setMapDestination] = useState<searchPlaceInterface>(destination)
    const parseDateFromQuery = (dateString) => {
        if (!dateString) return undefined;

        // Decode the URI component
        const decodedDate = decodeURIComponent(dateString);

        // Create a new Date object
        const dateObject = new Date(decodedDate);

        // Check if the date is valid
        if (!isNaN(dateObject)) {
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
            <ThemeSwitch />
            <SearchFilter setMapDeparture={setMapDeparture} setMapDestination={setMapDestination} departure={departure} destination={destination} setDeparture={setDeparture} setDestination={setDestination} date={date} setDate={setDate} passengers={passengers} setPassengers={setPassengers} />
            <MapProvider>
                <MapComponent departure={mapDeparture} destination={mapDestination} />
            </MapProvider>
        </main>
    );
}
