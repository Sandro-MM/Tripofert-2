import React from 'react';

const StopItem = ({ position, label, onAdd, onRemove, description, isSelected, image }) => {
    return (
        <div className={`relative w-full my-[40px] max-w-[1080px] h-[400px] rounded-[1.5rem] mx-auto ${isSelected ? 'selected-marker' : ''}`}>
    <img className="object-cover w-full rounded-[1.5rem] h-full" src={image} alt="img" />

            <div className={`absolute top-0 left-0 w-1/3  h-full rounded-[1.5rem]  backdrop-blur-sm ${isSelected ? 'bg-buttons/70' : 'bg-bg/70'}`}>
                <div className="" style={{fontWeight: 'bold'}}>{label}</div>
                <div className="" style={{marginTop: '10px'}}>{description}</div>
                <div className="" style={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
                    <button className={`font-medium text-2xl leading-8 bg-[#00Afff] w-8 h-8 rounded-full ${isSelected ? 'hidden' : 'block'}`} onClick={() => onAdd(position)}>+</button>
                    <div className=" ">60 min stop for $60</div>
                    <button className={`font-medium text-2xl leading-8 bg-[#00Afff] w-8 h-8 rounded-full ${isSelected ? 'block' : 'hidden'}`} onClick={() => onRemove(position)}>-</button>
                </div>
            </div>
        </div>
    );
};

export default StopItem;
