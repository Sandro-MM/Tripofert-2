'use client';

import React from 'react';

export default function ScrollDownButton() {
    const handleScrollDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div onClick={handleScrollDown}
             className='text-xl font-medium text-buttons py-2 text-center cursor-pointer'>
            Contact
        </div>
    );
}