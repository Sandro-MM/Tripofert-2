'use client'


import {Controller, useForm} from "react-hook-form";
import {useState} from "react";
import {useToast} from "@/hooks/use-toast";
import {supabase} from "@/directions-functions/supabaseClient";
import Link from "next/link";
import {ToastAction} from "@/components/ui/toast";
import {Input} from "@/components/ui/input";
import DropdownPhoneCodes from "@/components/dropdown-phone-codes";
import {Textarea} from "@/components/ui/textarea";
import {Spinner} from "@/components/ui/spinner";

export default function ContactForm({
                                        InputClassName ='min-[500px]:min-w-[400px] min-[400px]:min-w-[320px] min-[340px]:min-w-[290px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px]',
                                        PhoneInputClassName ='!w-[calc(100%-132px)] min-[500px]:min-w-[265px] min-[400px]:min-w-[210px] min-[340px]:min-w-[182px] min-[300px]:min-w-[122px] min-[260px]:min-w-[92px]'
    }) {
    const { control,register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    const [loading, seLoading] = useState<boolean>(false);
    const { toast } = useToast()
    const onSubmit = async (data) => {
        seLoading(true);
        const { data: response, error } = await supabase.from('contact_table').insert([
            {
                full_name: data.fullName || '',
                email: data.email || '',
                company_name: data.companyName || '',
                phone_number: `${data.phoneNumber + data.phoneCode}` || '',
                message: data.message || '',
            },
        ]);
        if (error) {
            console.error('Error adding data:', error);
            seLoading(false)
        } else {
            toast({
                title: "Message send",
                description: "Our Team will response soon!",
                action:  <Link href="/"><ToastAction  altText="Got it!">Got it!</ToastAction></Link>
            })
            console.log('Data added:', data);
            seLoading(false)
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'py-6 mx-auto w-max'}>

            <div className={'items-center justify-center gap-6 min-[1115px]:flex'}>
                <div className={'max-w-[643px] max-[1115px]:mx-auto'}>
                    <div>
                        <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Full name</div>
                        <Input
                            className={`!w-[100%] mx-[0px] bg-background/90 ${InputClassName}`}
                            type="" placeholder={'Full name'}
                            {...register('fullName', {required: 'Full name is required'})}/>
                        {errors.fullName &&
                            <p className="text-red-500 text-xs mt-[1px]">{errors.fullName.message.toString()}</p>}
                    </div>


                    <div>
                        <div className={'text-sm font-medium ml-[2px] mb-[2px] w-max mt-3'}>Phone Number
                        </div>
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
                                className={` ${PhoneInputClassName} mx-[0px]     bg-background/90 absolute right-0 top-0`}
                                type="" placeholder={'Phone Number'}
                                {...register('phoneNumber')}/>
                        </div>
                        {(errors.phoneNumber || errors.phoneCode) &&
                            <p className="text-red-500 text-xs mt-[1px]">Phone number is required</p>}

                    </div>
                </div>
                <div className={'max-w-[643px] max-[1115px]:mx-auto'}>
                    <div>
                        <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Email address</div>
                        <Input
                            className={`!w-[100%] mx-[0px] ${InputClassName}  bg-background/90`}
                            type="" placeholder={'Email address'}
                            {...register('email', {required: 'Email is required'})}
                        />
                        {(errors.email) &&
                            <p className="text-red-500 text-xs mt-[1px]">{errors.email.message.toString()}</p>}
                    </div>
                    <div className={'mt-3'}>
                        <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Company Name</div>
                        <Input
                            className={`!w-[100%] mx-[0px] ${InputClassName}   bg-background/90`}
                            type="" placeholder={'Company Name'}
                            {...register('companyName',)}/>
                        {errors.companyName &&
                            <p className="text-red-500 text-xs mt-[1px]">{errors.companyName.message.toString()}</p>}
                    </div>
                </div>
            </div>
            <div className={'min-[1115px]:max-w-[836px] max-w-[643px] mx-auto mt-3'}>
                <div className={'text-sm font-medium ml-[2px] mb-[2px]'}>Your Message</div>
                <Textarea
                    placeholder={'Message'}
                    className={`!w-[100%] mx-[0px] ${InputClassName}   bg-background/90`}
                    {...register('message', {required: 'Please leave a message'})}/>
                {errors.message &&
                    <p className="text-red-500 text-xs mt-[1px]">{errors.message.message.toString()}</p>}
            </div>

            <div className={'mx-auto w-max pt-6'}>
                <button disabled={loading} type={"submit"}
                        className='ml-9  h-16 w-32 bg-buttons rounded-xl flex justify-center items-center text-center text-base max-[1115px]:mt-8 max-[1115px]:mx-auto text-buttonsText font-semibold px-9'>
                    {
                        loading ? <Spinner/> : <p>Contact!</p>
                    }
                </button>
            </div>

        </form>
    )
}
