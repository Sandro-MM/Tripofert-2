'use client'
import React from "react";
import Image from "next/image";

export default function DialogOpen({isOpen, setIsOpen}) {

    return (

        <>
            { isOpen &&
                <div
                    className={'absolute min-[724px]:w-[120%] w-full h-[640px] bg-transparentSurface rounded-[12px] border-border border-[1px] border-solid top-[40px] min-[724px]:left-[-10%] left-0 z-[999] p-6'}>
                    <div className={'flex justify-center items-center gap-2.5 flex-wrap'}>
                        <h3 className={'text-2xl min-w-[220px]'}>Transaction Failed</h3>
                        <h3 className={'text-2xl min-w-[197px]'}> Please Try Again</h3>
                    </div>

                    <Image className={'mx-auto mt-[20%]'} width={130} height={130} src={'/error-o 1.png'} alt={'logo'}/>


                    <div onClick={()=> setIsOpen(false)}  className='cursor-pointer h-16 w-[160px] bg-buttons rounded-xl text-center text-base absolute bottom-8 left-[calc(50%-80px)] text-buttonsText font-semibold px-9 py-5 flex justify-center items-center'>
                        OK
                    </div>
                </div>
            }
        </>


    );
}
