'use client';
import Image from 'next/image'
import DrawerOpen from "@/components/drawer open";
import SearchTable from "@/components/table";

const SearchItem = () => {
    return (
        <div
            className='max-w-[1080px] w-[95%] bg-background/80 border border-border lg:px-10 px-4 py-6 rounded-3xl mx-auto my-[35vh] items-center justify-center   gap-9 min-[1115px]:flex child:cursor-pointer'>
            <div className='child:flex child:md:gap-9 child:gap-5 child:flex-nowrap flex items-center justify-center gap-9 flex-wrap '>
                <div className='justify-around child:max-sm:w-1/2 max-sm:w-full'>
                    <DrawerOpen trigger={<div className={'flex'}>
                        <Image
                            // className='max-md:hidden'
                            src="/arrow.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Pick-up</h2>
                            <span
                                className='lg:text-base md:text-sm text-subText text-[10px]  md:font-normal font-light'>Your location</span>
                        </div>
                    </div>} title={'Pick-up'} subtitle={'Your location'} content={<SearchTable data={[{name:'madrid', countryName:'spain'}, {name:'barcelona', countryName:'spain'}]}/>}/>


                    <DrawerOpen trigger={<div className={'flex'}>
                        <Image
                            // className='max-md:hidden'
                            src="/arrow.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Destination</h2>
                            <span
                                className='lg:text-base  md:text-sm text-[10px] text-subText  md:font-normal font-light'>Where are you going?</span>
                        </div>
                    </div>} title={'Destination'} subtitle={'Where are you going?'} content={undefined}/>
                </div>
                <div className='justify-around child:max-sm:w-1/2 max-sm:w-full'>

                    <DrawerOpen trigger={<div className={'flex'}>

                        <Image
                            // className='max-md:hidden'
                            src="/calendar.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Date</h2>
                            <span
                                className='lg:text-base  md:text-sm text-subText text-[10px] md:font-normal font-light'>Add date</span>
                        </div>
                    </div>} title={'Date'} subtitle={'Add date'} content={undefined}/>
                    <DrawerOpen trigger={<div className={'flex'}>
                        <Image
                            // className='max-md:hidden'
                            src="/person.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"/>
                        <div className='ml-3 text-left'>
                            <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold'>Passengers</h2>
                            <span
                                className='lg:text-base md:text-sm text-subText text-[10px] md:font-normal font-light'>How many?</span>
                        </div>
                    </div>} title={'Passengers'} subtitle={'How many?'} content={undefined}/>
                </div>
            </div>
            <div
                className='ml-9  h-16 w-32 bg-buttons rounded-xl text-center text-base max-[1115px]:mt-8 max-[1115px]:mx-auto text-buttonsText font-semibold px-9 py-5'>
                Search
            </div>
        </div>
    );
};

export default SearchItem;
