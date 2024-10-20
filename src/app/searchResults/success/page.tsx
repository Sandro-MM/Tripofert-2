'use client'
import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import RouteBarComponent from "@/components/searchPageComponents/routeBarComponent";
import Link from "next/link";

export default function Success() {
    const [searchParams] = React.useState(useSearchParams());
    const [visitPlaces, setVisitPlaces] = useState([]);
    const [pickUpDate, setPickUpDate] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');

    useEffect(() => {
        const visitPlacesParam = searchParams.get('visit_places');
        const pickUpDateParam = searchParams.get('pick_up_date');
        const departureCityParam = searchParams.get('departure_city');
        const destinationCityParam = searchParams.get('destination_city');

        if (visitPlacesParam) {
            try {
                // Decode and parse the visit_places parameter
                const decodedPlaces = JSON.parse(decodeURIComponent(visitPlacesParam));
                setVisitPlaces(decodedPlaces);
            } catch (error) {
                console.error("Error parsing visit_places:", error);
            }
        }

        // Set other parameters
        setPickUpDate(decodeURIComponent(pickUpDateParam || ''));
        setDepartureCity(decodeURIComponent(departureCityParam || ''));
        setDestinationCity(decodeURIComponent(destinationCityParam || ''));
    }, [searchParams]);






    const [departure, setDeparture] = useState({
        name: searchParams.get('departureName') || '',
        country: searchParams.get('departureCountry') || '',

    });
    const [destination, setDestination] = useState({
        name: searchParams.get('destinationName') || '',
        country: searchParams.get('destinationCountry') || '',
    });



    return (
        <main className="relative w-full min-h-screen">
            <BackgroundVideo/>
            <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
                <ThemeSwitch/>
                <Link href={'/'}>
                    <Logo/>
                </Link>

                <div
                    className={'w-[calc(100%-32px)] max-w-[600px] h-[600px] bg-transparentSurface/90 backdrop-blur-sm rounded-[12px] border-border border-[1px] border-solid z-[999] p-6'}>
                    <div className={'flex justify-center items-center gap-2.5 flex-wrap'}>
                        <h3 className={'text-2xl min-w-[123px] font-semibold'}>YOUR TRIP</h3>
                        <h3 className={'text-2xl min-w-[169px] font-semibold'}>IS CONFIRMED</h3>
                    </div>

                        <div className={'mx-auto text-center my-6 text-lg'}>
                            Your reservation is placed. Our team will find driver for  you and contact you as soon as
                            possible!
                        </div>



                    <div className={'w-max mx-auto'}>
                        Thanks for Choosing US!
                    </div>
                    <div className={'mt-[10%] text-lg w-max mx-auto'}>Your Route:</div>
                    <RouteBarComponent points={visitPlaces} departure={departureCity} destination={destinationCity}/>
                </div>
            </div>
        </main>
    );
}
