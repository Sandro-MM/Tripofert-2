import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function ArticlesPreviewBlock() {


    const data = [
        {
            country:'Spain',
            city:'Madrid',
            img:'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/madrid.jpg',
            desc:'Vibrant capital of Spain, renowned for its culture, history, architecture, and lively atmosphere.',
            link:'/blogs/blogPage/ultimate_madrid_travel_guide/0'
        },
        {
            country:'Spain',
            city:'Barcelona',
            img:'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_3/barcelona.jpg',
            desc:'Barcelona is a vibrant city famous for Gaudí’s architecture.',
            link:'/blogs/blogPage/ultimate_barcelona_travel_guide/1'
        },
        {
            country:'France',
            city:'Paris',
            img:'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_2/paris.jpg',
            desc:'Iconic city of lights, synonymous with romance, art, fashion, and exquisite cuisine.',
            link:'/blogs/blogPage/ultimate_lisbon_travel_guide/3'
        },
        {
            country:'Spain',
            city:'Valencia',
            img:'https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/img_4/Valencia%20.jpg',
            desc:'Valencia is home to one of the most famous Spanish festivals, Las Fallas.',
            link:'/blogs'
        }
    ]





    return (
        <div className="w-full h-max sm:pt-[120px] lg:pb-[100px] pb-[200px]">
            <div className='max-w-[1280px] w-full mx-auto'>
                <div className='text-xl px-[5%] font-medium text-buttons py-6 text-center pointer-events-none'>
                    Admire sights
                </div>
                <div
                    className='lg:text-7xl px-[5%] md:text-5xl text-3xl font-extrabold text-header text-center sm:max-w-[80%] mx-auto pointer-events-none'>
                    Choose Your Stops On The Way
                </div>
                <div className='sm:text-xl px-[5%] text-sm font-medium text-subText py-6 text-center sm:max-w-[60%] mx-auto pointer-events-none'>
                    Select from various sights and attractions along your route to enhance your travel experience.
                </div>
                <div className='mt-6 w-full  sm:mt-12 relative'>
                    <div className=' w-full flex flex-wrap gap-[32px] max-sm:px-4 sm:pl-[32px]'>
                        {
                            data.map((item, index) => (
                                <div
                                    className='max-w-[628px] rounded-[40px] max-h-[575px] w-full sm:w-[calc(50%-32px)] relative group hover:max-h-[650px] transition-all duration-300'
                                    key={index}>
                                    <Image className='h-full rounded-[40px]' src={item.img} height={700} width={700}
                                           alt={item.city}/>
                                    <div className='absolute max-[400px]:bottom-[20px] bottom-[40px] w-full'>
                                        <div
                                            className='mx-auto w-[90%] flex group-hover:block group-hover:pt-[24px] items-center group-hover:bg-bg/70 group-hover:backdrop-blur-[1.5px] justify-center bg-bg/30 backdrop-blur-[0.5px] max-[400px]:h-[80px] group-hover:max-[400px]:h-[180px] max-sm:h-[122px] group-hover:max-sm:h-[260px] max-[800px]:h-[80px] group-hover:max-[800px]:h-[180px] max-lg:h-[100px] group-hover:max-lg:h-[200px] max-lg:rounded-[28px] h-[122px] group-hover:h-[260px] max-[800px]:rounded-[20px] max-h-[122px] group-hover:max-h-[260px] rounded-[40px]'>
                                            <div
                                                className='xl:text-[28px] group-hover:pl-[24px] max-xl:sm:text-[2.2vw] text-[5.3vw] w-max h-max text-header font-semibold pointer-events-none'>
                                                {item.city},{item.country}
                                            </div>
                                            <div
                                                className='hidden group-hover:block w-[90%] mx-auto xl:text-[16px] max-xl:sm:text-[1.5vw] text-[3vw] h-max text-header  transition-opacity duration-300 mb-[20px] mt-[8px] text-left pointer-events-none'>
                                                {item.desc}
                                            </div>
                                            <div className='absolute bottom-[20px] w-full mx-auto'>
                                                <Link href={item.link}>
                                                    <div
                                                        className='hidden group-hover:flex mx-auto w-[90%] bg-buttons max-[400px]:h-[30px] max-sm:h-[60px] max-[800px]:h-[40px] max-lg:h-[40px] max-lg:rounded-[4px] h-[60px] max-[800px]:rounded-[5px] max-h-[60px] rounded-[10px] items-center justify-center cursor-pointer'>
                                                        <div className='text-header w-max h-max text-lg font-semibold pointer-events-none'>
                                                            Read More
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Link href="/blogs">
                <div className='border border-border w-[180px] h-[64px] bg-bg/40   mx-auto mt-[40px] rounded-[10px] py-[20px] text-center cursor-pointer font-semibold'>Read More</div>
                </Link>
            </div>
        </div>
    )
}
