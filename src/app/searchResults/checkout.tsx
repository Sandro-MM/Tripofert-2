'use client';


import DrawerOpen from "@/components/drawer open";
import {Input} from "@/components/ui/input";
import Dropdown from "@/components/dropdown";
import DropdownPhoneCodes from "@/components/dropdown-phone-codes";
import MapPicker from "@/components/map/mapPicker";
import {useEffect, useState} from "react";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

export default function Checkout({trigger, departureLat, departureLng}) {
    const [location, setLocation] = useState('Choose location');

    const handleLocationSelect = (locationData) => {
        const { lat, lng, address } = locationData;
        setLocation(address);
        console.log(`Latitude: ${lat}, Longitude: ${lng}, Address: ${address}`);
    };


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const time = [
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "0:00",
        "0:30",
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30",
        "4:00",
        "4:30",
        "5:00",
        "5:30",
        "6:00",
        "6:30",
        "7:00",
        "7:30",
        "8:00",
        "8:30",
    ];


    return (
       <div>
           <DrawerOpen disable={false}
                       trigger={trigger} title={'Checkout'} subtitle={'Please fill information below'} content={
               <div className={'w-max h-[calc(100vh-140px)] flex flex-col'}>
                   <div>
                       <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Full name</div>
                       <Input
                           className='!w-[70%] mx-[0px] min-[500px]:min-w-[400px] min-[400px]:min-w-[320px] min-[340px]:min-w-[290px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px] mb-3  bg-background/90'
                           type="" placeholder={'Full name'}></Input>
                   </div>
                   <div>
                       <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Email address</div>
                       <Input
                           className='!w-[70%] mx-[0px] min-[500px]:min-w-[400px] min-[400px]:min-w-[320px] min-[340px]:min-w-[290px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px] mb-3  bg-background/90'
                           type="" placeholder={'Email address'}></Input>
                   </div>
                   <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max'}>Date of birth</div>
                   <div className={'relative'}>
                       <Input
                           className='!w-[22%] mx-[0px] min-[500px]:min-w-[126px] min-[400px]:min-w-[102px] min-[340px]:min-w-[90px] min-[300px]:min-w-[70px] min-[260px]:min-w-[60px]  mb-3  bg-background/90'
                           type="" placeholder={'DD'}></Input>
                       <Dropdown left={'left-[34%]'} placeholder={'MM'} data={months}/>
                       <Input
                           className='!w-[22%] mx-[0px] min-[500px]:min-w-[126px] min-[400px]:min-w-[102px] min-[340px]:min-w-[90px] min-[300px]:min-w-[70px] min-[260px]:min-w-[60px]  mb-3  bg-background/90 absolute right-0 top-0'
                           type="" placeholder={'YYYY'}></Input>

                   </div>
                   <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max'}>Phone Number</div>
                   <div className={'relative h-12'}>
                       <DropdownPhoneCodes/>
                       <Input
                           className='!w-[22%] mx-[0px] min-[500px]:min-w-[265px] min-[400px]:min-w-[210px] min-[340px]:min-w-[182px] min-[300px]:min-w-[122px] min-[260px]:min-w-[92px]  mb-3  bg-background/90 absolute right-0 top-0'
                           type="" placeholder={'Phone Number'}></Input>

                   </div>


                   <div className={'text-base font-medium ml-[2px] mb-[8px] w-max'}>Pick Up details</div>
                   <div className={'flex justify-between'}>
                       <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max'}>Pick Up Time</div>
                       <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max'}>Pick Up Location</div>
                   </div>

                   <div className={'relative h-12'}>
                       <Dropdown left={'left-0'} placeholder={'Time'} data={time}/>


                       <Dialog>
                           <DialogTrigger>
                               <Input
                                   className='!w-[22%] mx-[0px] min-[500px]:min-w-[265px] min-[400px]:min-w-[210px] min-[340px]:min-w-[182px] min-[300px]:min-w-[122px] min-[260px]:min-w-[92px] mb-3 bg-background/90 absolute right-0 top-0'
                                   type="text"
                                   placeholder={'Pick Up Location'}
                                   value={location}
                                   readOnly
                               />
                           </DialogTrigger>
                           <DialogContent>
                               <DialogHeader>
                                   <DialogTitle>Set Address</DialogTitle>
                                   <DialogDescription>{location}</DialogDescription>
                                   <MapPicker initialRegion={{ lat: departureLat, lng: departureLng }} onLocationSelect={handleLocationSelect} />
                                   <DialogClose asChild>
                                       <Button  type="button">
                                           Set
                                       </Button>
                                   </DialogClose>
                               </DialogHeader>
                           </DialogContent>
                       </Dialog>
                   </div>
               </div>
           }/>
       </div>
    );
}
