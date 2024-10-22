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
import {Controller, useForm, useWatch} from "react-hook-form";
import PaypalCheckout from "@/components/paypalCheckout/paypalCheckout";
import {addDataToDatabase, supabase} from "@/directions-functions/supabaseClient";
import {mobileNumberCodes} from "@/directions-functions/mobile-number-codes";
import {cities} from "@/directions-functions/direction-functions";
import {Spinner} from "@/components/ui/spinner";

export default function Checkout({trigger, departureLat, departureLng,amount,orderData,dissabled}) {
    const [location, setLocation] = useState('Choose location');



    const handleLocationSelect = (locationData) => {
        const { lat, lng, address } = locationData;
        setLocation(address);
        console.log(`Latitude: ${lat}, Longitude: ${lng}, Address: ${address}`);
    };


    const { control,register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    const [isFormValid, setIsFormValid] = useState(false);

   useEffect(() => {
        setIsFormValid(isValid);
    }, [isValid]);

    function getCodeFromId(id) {
        const country = mobileNumberCodes.find(item => item.id === Number(id));
        return country ? country.code : '';
    }



    const formData = useWatch({
        control,
    });




    const phoneCodeId = useWatch({
        control,
        name: 'phoneCode',
    });

    const phoneCode = getCodeFromId(phoneCodeId);




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


    const dataCustomer = {
        customer_name:formData?.fullName,
        phone_number:`${phoneCode}${formData?.phoneNumber}`,
        email:formData?.email,
        birth_day:`${formData?.birthDay} ${formData?.birthMonth} ${formData?.birthYear}`,
        pick_up_time:formData?.pickUpTime,
    }

    const  onSubmit  = async (transactionId, dataObject) => {
        const { data, error } = await supabase
            .from('order_list')
            .insert([
                {
                    ...dataCustomer,
                    ...dataObject,
                    transaction_id:transactionId,
                    pick_up_address:location,
                    flight_number:formData?.flight_number?.toString(),

    }
            ]);

        if (error) {
            console.error('Error adding data:', error);
        } else {
            console.log('Data added:', data);
        }
    };


    const  onSubmits  = async (data) => {
        console.log(data)
    }


    return (
       <div>
           <DrawerOpen disable={dissabled}
                       trigger={trigger} title={'Checkout'} subtitle={'Please fill information below'} content={
               <div className={'w-max h-[calc(100vh-180px)] flex flex-col'}>


                   <form onSubmit={handleSubmit(onSubmits)}>
                       <div>
                           <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Full name</div>
                           <Input
                               className='!w-[70%] mx-[0px] min-[500px]:min-w-[400px] min-[400px]:min-w-[320px] min-[340px]:min-w-[290px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px]   bg-background/90'
                               type="" placeholder={'Full name'}
                               {...register('fullName', {required: 'Full name is required'})}/>
                           {errors.fullName &&
                               <p className="text-red-500 text-xs mt-[1px]">{errors.fullName.message.toString()}</p>}
                       </div>


                       <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max mt-3'}>Phone Number</div>
                       <div className={'relative h-9'}>
                           <Controller
                               name="phoneCode"
                               control={control}
                               rules={{required: 'phoneCode required'}}
                               render={({field}) => (
                                   <DropdownPhoneCodes
                                       value={field.value}
                                       onChange={field.onChange}
                                       name={field.name}
                                   />
                               )}
                           />
                           <Input
                               className='!w-[22%] mx-[0px] min-[500px]:min-w-[265px] min-[400px]:min-w-[210px] min-[340px]:min-w-[182px] min-[300px]:min-w-[122px] min-[260px]:min-w-[92px]    bg-background/90 absolute right-0 top-0'
                               type="" placeholder={'Phone Number'}
                               {...register('phoneNumber', {required: 'Phone Number is required'})}/>
                       </div>
                       {(errors.phoneNumber || errors.phoneCode) &&
                           <p className="text-red-500 text-xs mt-[1px]">Phone number is required</p>}

                       <div className={'text-sm font-medium ml-[2px] mb-[2px] mt-3 w-max'}>Date of birth</div>
                       <div className={'relative'}>
                           <Input
                               className='!w-[22%] mx-[0px] min-[500px]:min-w-[126px] min-[400px]:min-w-[102px] min-[340px]:min-w-[90px] min-[300px]:min-w-[70px] min-[260px]:min-w-[60px]  bg-background/90'
                               type="" placeholder={'DD'}
                               {...register('birthDay', {required: 'required', min: 1, max: 31})}/>


                           <Controller
                               name="birthMonth"
                               control={control}
                               rules={{required: ' '}}
                               render={({field}) => (
                                   <Dropdown
                                       placeholder={'MM'}
                                       data={months}
                                       left={'left-[34%]'}
                                       value={field.value}
                                       onChange={field.onChange}
                                       name={field.name}
                                   />
                               )}
                           />
                           <Input
                               className='!w-[22%] mx-[0px] min-[500px]:min-w-[126px] min-[400px]:min-w-[102px] min-[340px]:min-w-[90px] min-[300px]:min-w-[70px] min-[260px]:min-w-[60px]  bg-background/90 absolute right-0 top-0'
                               type="" placeholder={'YYYY'}
                               {...register('birthYear', {required: 'field required'})}/>

                       </div>
                       {(errors.birthYear || errors.birthMonth || errors.birthDay) &&
                           <p className="text-red-500 text-xs mt-[1px]">Date of birth is required</p>}

                       <div>
                           <div className={'text-sm font-medium mt-3 ml-[2px] mb-[2px]'}>Email address</div>
                           <Input
                               className='!w-[70%] mx-[0px] min-[500px]:min-w-[400px] min-[400px]:min-w-[320px] min-[340px]:min-w-[290px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px]  bg-background/90'
                               type="" placeholder={'Email address'}
                               {...register('email', {required: 'Email is required'})}
                           />
                           {(errors.email) &&
                               <p className="text-red-500 text-xs mt-[1px]">{errors.email.message.toString()}</p>}
                       </div>

                       <div className={'text-base font-medium ml-[2px] mt-3 mb-[8px] w-max'}>Pick Up details</div>
                       <div className={'flex justify-between'}>
                           <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max'}>Pick Up Time</div>
                           <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max'}>Pick Up Location</div>
                       </div>

                       <div className={'relative h-9'}>
                           <Controller
                               name="pickUpTime"
                               control={control}
                               rules={{required: 'Pick up time required'}}
                               render={({field}) => (
                                   <Dropdown
                                       left={'left-0'} placeholder={'Time'} data={time}
                                       value={field.value}
                                       onChange={field.onChange}
                                       name={field.name}
                                   />
                               )}
                           />


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
                                       <MapPicker initialRegion={{lat: departureLat, lng: departureLng}}
                                                  onLocationSelect={handleLocationSelect}/>
                                       <DialogClose asChild>
                                           <Button type="button">
                                               Set
                                           </Button>
                                       </DialogClose>
                                   </DialogHeader>
                               </DialogContent>
                           </Dialog>
                       </div>
                       {(errors.pickUpTime) &&
                           <p className="text-red-500 text-xs mt-[1px]">{errors.pickUpTime.message.toString()}</p>}

                       {
                           (orderData?.departure?.id && typeof orderData.departure.id === 'string' && orderData.departure.id.startsWith('0')) && (
                               <div>
                                   <div className="text-sm mt-3 font-medium ml-[2px] mb-[2px] w-max">Enter Your Flight Number</div>
                                   <Input
                                       className="!w-[70%] mx-[0px] min-[500px]:min-w-[400px] min-[400px]:min-w-[320px] min-[340px]:min-w-[290px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px] bg-background/90"
                                       type=""
                                       placeholder="Flight Number"
                                       {...register('flight_number')}
                                   />
                               </div>
                           )
                       }

                       {
                           amount && <div
                               className={'text-header font-semibold text-lg my-[8px]'}>  {orderData?.departure.name} → {orderData?.destination.name} <br/>  Total: {amount.toString()}€</div>
                       }
                       <div className={'w-full'}>
                           {isFormValid && (location !=='Choose location') ? (
                               <PaypalCheckout amount={amount} orderData={orderData}
                                                onSubmit={onSubmit} validate={handleSubmit}/>
                           ) : (
                               <button className={'w-full'} type='submit'>
                                   <Spinner className={'mx-auto'} size={70}/>
                                   Please fill information to continue
                               </button>

                           )}
                       </div>
                   </form>
               </div>
           }/>
       </div>
    );
}
