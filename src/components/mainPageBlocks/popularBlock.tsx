import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import React from "react";
export default function PopularBlock() {


    const data = [
        {
            country:'Spain',
            city:'Madrid',
            img:'/madrid-s.png',
            desc:'Vibrant capital of Spain, renowned for its culture, history, architecture, and lively atmosphere.'
        },
        {
            country:'Portugal',
            city:'Lisbon',
            img:'/lisbon-s.jpg',
            desc:'Portugal\'s coastal gem, known for its historic charm and warm hospitality.'
        },
        {
            country:'France',
            city:'Paris',
            img:'/paris-sm.png',
            desc:'Iconic city of lights, synonymous with romance, art, fashion, and exquisite cuisine.'
        },
        {
            country:'Spain',
            city:'Valencia',
            img:'/valencia-s.jpg',
            desc:'Valencia is home to one of the most famous Spanish festivals, Las Fallas.'
        }
    ]


    return (
        <div className="w-full h-max sm:pt-[120px] pt-[60px] lg:pb-[30px] pb-[200px]">
            <div className='max-w-[1280px] w-full mx-auto'>
                <div className='text-xl px-[5%] font-medium text-buttons py-6 text-center pointer-events-none'>
                    Plan A Trip
                </div>
                <div
                    className='lg:text-7xl px-[5%] md:text-5xl text-3xl font-extrabold text-header text-center sm:max-w-[80%] mx-auto pointer-events-none'>
                    Popular Destinations
                </div>
                <div className='sm:text-xl px-[5%] text-sm font-medium text-subText py-6 text-center sm:max-w-[60%] mx-auto pointer-events-none'>Our
                    Choose your starting point and destination, and discover the best routes and attractions along the way.
                </div>
                <div className='mt-6 w-full  sm:mt-12 relative'>
                    <div className='child:mb-6 w-full child:sm:mb-8'>
                    <Image className='w-full max-h-[710px] max-w-[880px]' src={'/eu-map.svg'} width={2500} height={2500} alt='europe-map'/>
                        <div  className=' absolute top-4  right-0 w-full max-w-[700px]'>
                            <Carousel opts={{loop:true}}  className='w-full px-2 max-w-[700px]' orientation="vertical">
                                <CarouselContent  className='w-full max-w-[700px] lg:h-[650px] h-[450px]'>
                                    {
                                        data.map((item, index) => (
                                    <CarouselItem key={index} className='w-full max-w-[646px] lg:my-2  mx-auto pointer-events-none'>
                                        <div
                                            className='w-full max-w-[646px] flex rounded-[40px] lg:h-[190px] h-[130px] bg-bg backdrop-blur-sm'>
                                            <Image className='lg:w-[204px] w-[145px] lg:h-[190px] h-[130px] rounded-[40px]' src={item.img} width={300} height={300} alt={item.city}/>
                                            <div className='lg:p-6 p-2 ml-4'>
                                                <h2 className='font-medium lg:text-base text-xs text-subText'>{item.country}</h2>
                                                <h3 className='md:text-[28px] font-bold'>{item.city}</h3>
                                                <h4 className={'font-normal text-subText lg:text-base text-sm'}>{item.desc}</h4>
                                            </div>

                                        </div>
                                    </CarouselItem>
                                        ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
