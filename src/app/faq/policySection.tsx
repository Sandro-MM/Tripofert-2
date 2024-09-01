import { TbMapPinCancel } from "react-icons/tb";
import { PiPawPrintFill } from "react-icons/pi";
import { PiHandCoinsFill } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { IoMdResize } from "react-icons/io";
import { BsSuitcase2Fill } from "react-icons/bs";
import { GiSuitcase } from "react-icons/gi";
import { GrPaypal } from "react-icons/gr";

export default function PolicySection () {
    return (

        <div
            className={'min-[760px]:flex p-[12px] justify-center items-center w-max mx-auto gap-6 mt-12 child:min-w-[320px] child:max-w-[320px]'}>

            <div>

                <div className={'text-sm h-[120px]'}>
                    <div className={'flex justify-start items-center gap-3 my-2'}>
                        <TbMapPinCancel size={30}/>
                        <div className={'text-base font-medium'}>
                            Cancellation policy
                        </div>
                    </div>
                    We understand that travel plans can change, which is why we don't charge a fee for cancellations
                    made up to 48 hours before departure. email or call us for cancellation.
                </div>

                <div className={'text-sm'}>
                    <div className={'flex justify-start items-center gap-3 my-2'}>
                        <PiPawPrintFill size={30}/>
                        <div className={'text-base font-medium'}>
                            Pets
                        </div>
                    </div>
                    Pets are allowed (and loved)! We just need to know beforehand. Animals are allowed, you just have to
                    notify before booking.
                </div>

                <div className={'text-sm'}>
                    <div className={'flex justify-start items-center gap-3 my-2'}>
                        <PiHandCoinsFill size={30}/>
                        <div className={'text-base font-medium'}>
                            Tips
                        </div>
                    </div>
                    Gratuity isn’t included or required, but if you really enjoyed your trip, you can show your driver your appreciation with an optional tip (10% is sufficient).
                </div>

            </div>


            <div>
                <div className={'text-sm '}>
                    <div className={'flex justify-start items-center gap-3 my-2'}>
                        <FaChildren size={30}/>
                        <div className={'text-base font-medium'}>
                            Children
                        </div>
                    </div>
                    If you travel with children, it is important to request a seat adapted to their age and size of
                    child. Email us after Booking
                </div>





                <div className={'text-sm '}>
                    <div className={'flex justify-start items-center gap-3 my-2'}>
                        <IoMdResize size={30}/>
                        <div className={'text-base font-medium'}>
                            Luggage
                        </div>
                    </div>
                    <div className={'flex justify-start items-center gap-4'}>
                        <BsSuitcase2Fill size={28}/>
                        <div className={'child:text-[10px]'}>
                            <div>Big luggage</div>
                            <div> 29x21x11 inches</div>
                            <div> 74x53x28 cm</div>
                        </div>
                        <GiSuitcase size={28}/>
                        <div className={'child:text-[10px]'}>
                            <div>Small luggage</div>
                            <div>22x14x9 inches</div>
                            <div>56x36x23 cm</div>
                        </div>
                    </div>

                    Each passenger is allowed to have one checked bag and one carry on. If you’re traveling with more
                    bags or oversized luggage, please email us after booking.
                </div>


                <div className={'text-sm'}>
                    <div className={'flex justify-start items-center gap-3 my-2'}>
                        <GrPaypal size={20}/>
                        <div className={'text-base font-medium'}>
                            Payment methods
                        </div>
                    </div>
                    We accept only Paypal payment method
                </div>
            </div>


        </div>
    );
};

