'use client'

import { useEffect, useRef, useState } from 'react';
import {addMonths, format} from "date-fns";
import DrawerOpen from "@/components/drawer open";
import Image from "next/image";
import SearchTable from "@/components/table";
import {Calendar} from "@/components/ui/calendar";
import {DrawerClose} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import Counter from "@/components/counter";
import { Checkbox } from "@/components/ui/checkbox";
import {cities, getCitiesInRange} from "@/directions-functions/direction-functions";
import { useRouter } from 'next/navigation';


export default function SearchFilter({departure, setDeparture, destination,setDestination,date,setDate, passengers, setPassengers, setMapDeparture,setMapDestination,}) {
    const router = useRouter();
    const [showSearch, setShowSearch] = useState(false);
    const [hasChangedOnce, setHasChangedOnce] = useState(false);

    useEffect(() => {
        if (hasChangedOnce) {
            setShowSearch(true);
        } else {
            setHasChangedOnce(true);
        }
    }, [departure, destination]);




    const departureData = cities;
    const [destinationDataFiltered, setDestinationDataFiltered] = useState<any>();

    const handleSearch = () => {
        console.log(123)
        if (!departure || !destination || !date || !passengers || !/^[1-7]$/.test(passengers.toString())) {
            console.error("Invalid search criteria");
            return;
        }


        setMapDeparture(departure)
        setMapDestination(destination)

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

        const queryString = new URLSearchParams(queryParams).toString();
        const searchRoute = `/searchResults?${queryString}`;

        // Navigate to the search results page
        router.push(searchRoute);
    };


    useEffect(() => {
        if (departure) {
            console.log("Departure city:", departure);
            const result = getCitiesInRange(departure.latitude, departure.longitude, 800, cities);
            console.log("Filtered cities:", result);
            setDestinationDataFiltered(result);
        }
    }, [departure]);


    const displayDate = (item: any) => {
        if (item instanceof Date) {
            return format(item, 'dd MMM');
        } else {
            return item;
        }
    };

    const [carType, setCarType] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        const numPassengers = typeof passengers === 'string' ? parseInt(passengers, 10) : passengers;

        if (!isNaN(numPassengers)) {
            if (numPassengers < 5 && !checked) {
                setCarType('Sedan');
            } else if (numPassengers >= 5) {
                setCarType('Minivan');
                setChecked(false)
            }  else if (numPassengers < 5 && checked) {
                setCarType('Premium Sedan')
            }
        } else {
            setCarType('');
        }
    }, [passengers]);



    return (
        <div
            className='max-w-[1080px] w-[95%] bg-grayBg border border-border lg:px-10 px-4 py-6 rounded-3xl mx-auto mt-8 items-center justify-center   gap-9'>
            <div
                className='child:flex  child:md:gap-9 child:gap-5 child:flex-nowrap flex items-center justify-center gap-9 flex-wrap'>
                <div className='justify-around child:max-sm:w-1/2 max-sm:w-full'>
                    <DrawerOpen disable={false}
                                trigger={<div className={'flex cursor-pointer lg:w-[150px] md:w-[136px]'}>
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
                                </div>} title={'Pick-up'} subtitle={'Your location'}
                                content={<SearchTable setChosenItem={setDeparture} data={departureData}/>}/>


                    <DrawerOpen disable={departure.id === null}
                                trigger={<div className={'flex lg:w-[200px] cursor-pointer md:w-[178px]'}>
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
                                </div>} title={'Destination'} subtitle={'Where are you going?'}
                                content={<SearchTable setChosenItem={setDestination} data={destinationDataFiltered}/>}/>
                </div>
                <div className='justify-around child:max-sm:w-1/2 max-sm:w-full'>

                    <DrawerOpen disable={false}
                                trigger={<div className={'flex cursor-pointer  lg:w-[120px] md:w-[110px]'}>

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
                                    onSelect={(date) => (setDate(date))}
                                    className="rounded-md border bg-background/90"
                                />
                            </div>
                            <DrawerClose asChild>
                                <Button className={'w-[200px] h-[40px] text-lg mt-5'}>Choose</Button>
                            </DrawerClose>

                        </div>

                    }/>
                    <DrawerOpen disable={false}
                                trigger={<div className={'flex lg:w-[186px] cursor-pointer md:w-[162px]'}>
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
                                </div>} title={'Passengers'} subtitle={'How many?'}
                                content={<Counter count={passengers} setCount={setPassengers}/>}/>
                </div>
            </div>
            <div
                className='child:flex child:md:gap-9 child:gap-5 child:flex-nowrap flex items-center flex-col justify-center gap-3 flex-wrap mt-8'>
                <div className='lg:text-2xl md:text-xl text-base  text-header font-semibold'>Car details</div>

                <div>
                    <Image className='h-[60px] w-[128px]'
                           src={carType === 'Sedan' ? '/sedan-eco.png' : carType === 'Minivan' ? '/van2.png' : '/sedan-premium.png'}
                           width={128} height={60} alt={'cartype'}/>
                    <div>
                        <div
                            className='lg:text-base text-sm text-subText md:font-normal font-light flex flex-col justify-center'>Car
                            type: {carType}</div>
                        <div> Comparable to a {passengers} passengers
                        </div>
                    </div>

                </div>
                {
                    +passengers < 5 &&
                    <div><Checkbox
                        className='cursor-pointer'
                        checked={checked}
                        onCheckedChange={(checked) => {
                            if (carType === 'Premium Sedan') {
                                setCarType('Sedan')
                                setChecked(false)
                            } else {
                                setCarType('Premium Sedan')
                                setChecked(true)
                            }
                        }}
                    />
                        <label
                            htmlFor="terms2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        > Upgrade to premium class
                        </label>
                    </div>

                }

                <div className='mx-auto  h-16 w-[70%] bg-buttons rounded-xl text-base text-buttonsText font-semibold px-9 py-5 mt-8'>
                    <div className='w-full text-center'> Book a trip for</div>
                </div>
            </div>
            <div className='flex w-full mt-4 justify-center'>
                <div onClick={()=> console.log('buy')}
                     className='ml-9  h-16 w-[80%] bg-buttons rounded-xl text-center text-base max-[1115px]:mt-8 max-[1115px]:mx-auto text-buttonsText font-semibold px-9 py-5'>
                    Order for
                </div>
                {
                    showSearch &&
                    <div onClick={handleSearch} className='ml-9  h-16 w-32  border-border rounded-xl text-center text-base border bg-bg/90 max-[1115px]:mt-8 max-[1115px]:mx-auto text-header font-semibold px-9 py-5'>
                        Search
                    </div>
                }

            </div>

        </div>
    );
}