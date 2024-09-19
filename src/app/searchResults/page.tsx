"use client"
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchFilter from "@/components/searchPageComponents/searchFilter";
import {useRouter, useSearchParams} from 'next/navigation'
import React, {Suspense, useEffect, useState} from "react";
import {airports, cities, searchPlaceInterface} from "@/directions-functions/direction-functions";
import {MapProvider} from "@/components/map/mapProvider";
import RouteBarComponent from "@/components/searchPageComponents/routeBarComponent";
import dynamic from 'next/dynamic';
import Image from "next/image";

const citiesArray = cities;

const MapComponent = dynamic(() => import('@/components/map/mapComponent'), {
    ssr: false,
});

export default function Page({ params }) {
    const router = useRouter();

    const [searchParams] = React.useState(useSearchParams());

    const[departureId, setDepartureId]= useState(searchParams.get('departureId') || 0)
    const [destinationId, setDestinationId]= useState(searchParams.get('destinationId') || 0)

    useEffect(() => {
        console.log(departureId)
        // Find the matching departure and destination cities based on ids
        const foundDeparture = departureId.toString().startsWith('0')?airports.find(city => city.id === departureId.toString()):cities.find(city => city.id === +departureId);
        const foundDestination =  destinationId.toString().startsWith('0')?airports.find(city => city.id === destinationId.toString()):cities.find(city => city.id === +destinationId);

        // Set the departure and destination states
        if (foundDeparture) {
            setDeparture(foundDeparture)
            setMapDeparture(foundDeparture)
        };
        if (foundDestination) {
            setDestination(foundDestination)
            setMapDestination(foundDestination)
        };
    }, [departureId, destinationId]);

    const [departure, setDeparture] = useState<any>(null);
    const [destination, setDestination] = useState<any>(null);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [passengers, setPassengers] = useState<number | string | undefined>(searchParams.get('passengers'));
    const [mapDeparture, setMapDeparture] = useState<any>(null);
    const [mapDestination, setMapDestination] = useState<any>(null);
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
            <ThemeSwitch/>
            <div onClick={() => router.push('/')} className={'absolute left-4 top-1  items-center hidden xl:flex'}>
                <Image width={55} height={55} src={'./Logo.svg'} alt={'logo'}/>
                <p className={'text-2xl font-bold text-buttons'}>Tripofert</p>
            </div>
            { (departure && destination && mapDeparture && mapDestination) &&

                <>
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
                    <RouteBarComponent points={points} departure={mapDeparture.name} destination={mapDestination.name}/>
                    <MapProvider>
                        <MapComponent
                            departure={mapDeparture}
                            setPoints={setPoints}
                            setDistance={setDistance}
                            setDuration={setDuration}
                            destination={mapDestination}
                        />
                    </MapProvider>
                </>
            }

        </main>
    );
}
