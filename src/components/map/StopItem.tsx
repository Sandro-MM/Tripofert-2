import React, { useState } from 'react';
import {priceMap} from "@/directions-functions/direction-functions";

const StopItem = ({ position, label, onAdd, onRemove, description, isSelected, image, time }) => {
    const [localCount, setLocalCount] = useState(30);

    const handleLocalAdd = () => {
        if (localCount < 240) {
            setLocalCount(localCount + 30);
        }
    };

    const handleLocalRemove = () => {
        if (localCount > 30) {
            setLocalCount(localCount - 30);
        }
    };

    const addItem = () => {
            onAdd(localCount);
    };

    const removeItem = () =>{
        onRemove(position);
    }

    const calculateLocalPrice = (count) => {

        return priceMap[count] || 0;
    };


    return (
        <div className={`relative w-full my-[40px] max-w-[1080px] h-[430px] rounded-[1.5rem] mx-auto ${isSelected ? 'selected-marker' : ''}`}>
            <img className="object-cover w-full rounded-[1.5rem] h-full" src={image} alt="img" />

            <div className={`absolute top-0 left-0 w-1/3 min-w-[240px] h-full rounded-[1.5rem] backdrop-blur-sm ${isSelected ? 'bg-buttons/70' : 'bg-bg/70'}`}>
                <div className="text-2xl font-bold mt-8 w-full text-center" style={{ fontWeight: 'bold' }}>{label}</div>
                <div className="text-[15px] tracking-tighter font-normal px-4 mt-8 w-full text-center" style={{ marginTop: '10px' }}>{description}</div>

                     <div className="absolute bottom-[70px] w-full text-center" >{time?time:localCount} min stop for {time?calculateLocalPrice(time):calculateLocalPrice(localCount)}€</div>

                <div className="flex items-center justify-center gap-8 absolute bottom-4 left-0 w-full">
                    <div className='size-8'>
                    { !time &&
                        <button
                            className={`font-medium text-2xl leading-8 bg-[#00Afff] w-8 h-8 rounded-full ${localCount === 240 ? 'hidden' : 'block'}`}
                            onClick={handleLocalAdd}>+
                        </button>
                    }
                    </div>
                    {
                        time ? <button
                            className="w-[95px] h-[36px] leading-[36px] rounded-[8px] px-[12px] bg-grayBg text-[18px] font-medium"
                            onClick={removeItem}>
                            Remove
                        </button> : <button
                            className="w-[95px] h-[36px] leading-[36px] rounded-[8px] px-[12px] bg-[#00Afff] text-[18px] font-medium"
                            onClick={addItem}>
                            Add
                        </button>
                    }
                    <div className='size-8'>
                    { !time &&
                    <button
                        className={`size-8 font-medium text-grayBg text-2xl leading-8 bg-header rounded-full ${localCount === 30 ? 'hidden' : 'block'}`}
                        onClick={handleLocalRemove}>-
                    </button>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StopItem;
