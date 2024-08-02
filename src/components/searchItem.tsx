'use client';
import Image from 'next/image'
import DrawerOpen from "@/components/drawer open";
import SearchTable from "@/components/table";
import {Calendar} from "@/components/ui/calendar";
import {useEffect, useState} from "react";
import {addMonths, format } from 'date-fns';
import {DrawerClose} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import Counter from "@/components/counter";

import {cities, getCitiesInRange, searchPlaceInterface} from "@/directions-functions/direction-functions";
import { useRouter } from 'next/navigation';
import {Spinner} from "@/components/ui/spinner";

const SearchItem = () => {
    const router = useRouter();
    const [date, setDate] = useState<Date | undefined>();
    const [passengers, setPassengers] = useState<number | string | undefined>('How many?');
    const [departure, setDeparture] = useState<searchPlaceInterface>({ name: 'Your location', id: null});
    const [destination, setDestination] = useState<searchPlaceInterface>({ name:'Your Destination', id: null});
    const [loading, seLoading] = useState<boolean>(false);

    const departureData = cities;
    const [destinationDataFiltered, setDestinationDataFiltered] = useState<any>();




    useEffect(() => {
        if (departure) {
            // console.log("Departure city:", departure);
            const result = getCitiesInRange(departure.latitude, departure.longitude, 800, cities);
            // console.log("Filtered cities:", result);
            setDestinationDataFiltered(result);
            setDestination({ name:'Your Destination', id: null})
        }
    }, [departure]);


    const handleSearch = () => {
        if (!departure || !destination || !date || !passengers || !/^[1-7]$/.test(passengers.toString())) {
            console.error("Invalid search criteria");
            return;
        }

        seLoading(true)

        const queryParams = {
            departureId: departure.id,
            departureName: departure.name,
            departureLatitude: departure.latitude,
            departureLongitude: departure.longitude,
            departureCountry: departure.country,
            destinationId:  destination.id,
            destinationName: destination.name,
            destinationLatitude:  destination.latitude,
            destinationLongitude:  destination.longitude,
            destinationCountry:  destination.country,
            date: date,
            passengers: passengers.toString(),
        };
        const stringifiedQueryParams = Object.fromEntries(
            Object.entries(queryParams).map(([key, value]) => [key, String(value)])
        );

        const queryString = new URLSearchParams(stringifiedQueryParams).toString();
        const searchRoute = `/searchResults?${queryString}`;

        // Navigate to the search results page
        router.push(searchRoute);
    };



    const displayDate = (item: any) => {
        if (item instanceof Date) {
            return format(item, 'dd MMM');
        } else {
            return item;
        }
    };


    return (
        <div
            className='max-w-[1080px] w-[95%] bg-background/80 backdrop-blur-[1px] border border-border lg:px-10 px-4 py-6 rounded-3xl mx-auto my-[35vh] items-center justify-center   gap-9 min-[1115px]:flex child:cursor-pointer'>
            <div className='child:flex child:md:gap-9 child:gap-5 child:flex-nowrap flex items-center justify-center gap-9 flex-wrap '>
                <div className='justify-around child:max-sm:w-1/2 max-sm:w-full'>
                    <DrawerOpen  disable={false} trigger={<div className={'flex lg:w-[150px] md:w-[136px]'}>
                        <Image
                            // className='max-md:hidden'
                            src="/arrow.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Pick-up</h2>
                            <span
                                className='lg:text-base md:text-sm text-subText text-[12px]  md:font-normal font-light'>{departure.name}</span>
                        </div>
                    </div>} title={'Pick-up'} subtitle={'Your location'} content={<SearchTable setChosenItem={setDeparture} data={departureData}/>}/>


                    <DrawerOpen disable={departure.id === null}  trigger={<div className={'flex lg:w-[200px] md:w-[178px]'}>
                        <Image
                            // className='max-md:hidden'
                            src="/arrow.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Destination</h2>
                            <span
                                className='lg:text-base  md:text-sm text-[12px] text-subText  md:font-normal font-light'> {destination.name} </span>
                        </div>
                    </div>} title={'Destination'} subtitle={'Where are you going?'} content={<SearchTable setChosenItem={setDestination} data={destinationDataFiltered}/>}/>
                </div>
                <div className='justify-around child:max-sm:w-1/2 max-sm:w-full'>

                    <DrawerOpen disable={false} trigger={<div className={'flex lg:w-[120px] md:w-[110px]'}>

                        <Image
                            // className='max-md:hidden'
                            src="/calendar.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Date</h2>
                            <span
                                className='lg:text-base  md:text-sm text-subText text-[12px] md:font-normal font-light'>{displayDate(date) || 'Add date'}</span>
                        </div>
                    </div>} title={'Date'} subtitle={'Select date'} content={
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <Calendar
                                    fromDate={new Date()}
                                    toDate={addMonths(new Date(), 3)}
                                    mode="single"
                                    selected={date}
                                    onSelect={(date)=>(setDate(date))}
                                    className="rounded-md border bg-background/90"
                                />
                            </div>
                            <DrawerClose asChild>
                                <Button className={'w-[200px] h-[40px] text-lg mt-5'}>Choose</Button>
                            </DrawerClose>

                        </div>

                    }/>
                    <DrawerOpen disable={false} trigger={<div className={'flex lg:w-[186px] md:w-[162px]'}>
                        <Image
                            // className='max-md:hidden'
                            src="/person.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Passengers</h2>
                            <span
                                className='lg:text-base md:text-sm text-subText text-[12px] md:font-normal font-light'>{passengers}</span>
                        </div>
                    </div>} title={'Passengers'} subtitle={'How many?'} content={<Counter count={passengers} setCount={setPassengers}/>}/>
                </div>
            </div>
            <button disabled={loading}  onClick={handleSearch}
                  className='ml-9  h-16 w-32 bg-buttons rounded-xl flex justify-center items-center text-center text-base max-[1115px]:mt-8 max-[1115px]:mx-auto text-buttonsText font-semibold px-9 py-5'>
                {
                    loading?<Spinner/>:<p>Search</p>
                }
            </button>
        </div>
    );
};

export default SearchItem;
