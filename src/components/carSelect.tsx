import Image from "next/image";

const CarSelect = ({setCarType, passengerCount, selected}) => {
    return (
        <div className={'q'}>
            <button  className={`flex gap-6 w-full rounded-md px-2 my-3 ${selected==='Sedan'?'bg-buttons':''}`} disabled={passengerCount > 4} onClick={() => setCarType('Sedan')}>
                <Image className='h-[60px] w-[128px] aspect-square'
                       src={'/sedan-eco.png'}
                       width={128} height={60} alt={'cartype'}/>
                <div>
                    <div
                        className='lg:text-base mt-2 text-sm w-max text-subText md:font-normal font-light flex flex-col justify-start'>Sedan
                    </div>
                    <div className='lg:text-base w-max text-sm md:font-normal font-light flex flex-col justify-start'> Up to 4 passengers
                    </div>
                </div>

            </button>
            <button className={`flex gap-6 w-full rounded-md px-2 my-3 ${selected==='Premium Sedan'?'bg-buttons':''}`} disabled={passengerCount > 4} onClick={() => setCarType('Premium Sedan')}>
                <Image className='h-[60px] w-[128px] aspect-square'
                       src={'/sedan-premium.png'}
                       width={128} height={60} alt={'cartype'}/>
                <div>
                    <div
                        className='lg:text-base mt-2 w-max text-sm text-subText md:font-normal font-light flex flex-col justify-start'>Premium Sedan
                    </div>
                    <div className='lg:text-base w-max text-sm md:font-normal font-light flex flex-col justify-start'> Up to 4 passengers
                    </div>
                </div>

            </button>
            <button className={`flex gap-6 w-full rounded-md px-2 my-3 ${selected==='Minivan'?'bg-buttons':''}`} onClick={() => setCarType('Minivan')}>
                <Image className='h-[60px] w-[128px] aspect-square'
                       src={'/van2.png'}
                       width={128} height={60} alt={'cartype'}/>
                <div>
                    <div
                        className='lg:text-base mt-2 w-max text-sm text-subText md:font-normal font-light flex flex-col justify-start'>Minivan
                    </div>
                    <div className='lg:text-base w-max text-sm md:font-normal font-light flex flex-col justify-start'>Up to 8 passengers
                    </div>
                </div>

            </button>
        </div>
    );
};

export default CarSelect;
