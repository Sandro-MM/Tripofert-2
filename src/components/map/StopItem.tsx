import React, { useState } from 'react';

const StopItem = ({ position, label, onAdd, onRemove, description, isSelected, image }) => {
    const [localCount, setLocalCount] = useState(0);

    const handleLocalAdd = () => {
        if (localCount < 4) {
            setLocalCount(localCount + 1);
        }
    };

    const handleLocalRemove = () => {
        if (localCount > 0) {
            setLocalCount(localCount - 1);
        }
    };

    const handleUpdate = () => {
        if (localCount > 0) {
            onAdd(position, localCount);
        } else {
            onRemove(position);
        }
    };

    return (
        <div className={`relative w-full my-[40px] max-w-[1080px] h-[430px] rounded-[1.5rem] mx-auto ${isSelected ? 'selected-marker' : ''}`}>
            <img className="object-cover w-full rounded-[1.5rem] h-full" src={image} alt="img" />

            <div className={`absolute top-0 left-0 w-1/3 h-full rounded-[1.5rem] backdrop-blur-sm ${isSelected ? 'bg-buttons/70' : 'bg-bg/70'}`}>
                <div className="text-2xl font-bold mt-8 w-full text-center" style={{ fontWeight: 'bold' }}>{label}</div>
                <div className="text-[15px] tracking-tighter font-normal px-4 mt-8 w-full text-center" style={{ marginTop: '10px' }}>{description}</div>
                <div className="flex items-center justify-center gap-8 absolute bottom-4 left-0 w-full">
                    <button
                        className={`font-medium text-2xl leading-8 bg-[#00Afff] w-8 h-8 rounded-full ${localCount === 4 ? 'hidden' : 'block'}`}
                        onClick={handleLocalAdd}>+
                    </button>
                    <button className="font-medium text-2xl leading-8 bg-purple-500 w-24 h-8 rounded-full"
                            onClick={handleUpdate}>
                        {localCount > 0 ? `Update (${localCount})` : 'Remove Item'}
                    </button>
                    <button
                        className={`font-medium text-2xl leading-8 w-8 bg-grayBg h-8 rounded-full ${localCount === 0 ? 'hidden' : 'block'}`}
                        onClick={handleLocalRemove}>-
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopItem;