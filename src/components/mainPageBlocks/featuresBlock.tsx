import Image from "next/image";
import ContactForm from "@/app/contact/contactForm";
import ScrollDownButton from "@/components/mainPageBlocks/scrollDown";

export default function FeaturesBlock() {
    return (
        <div className="w-full h-max">
            <div className='max-w-[1280px] w-[95%] mx-auto'>
              <ScrollDownButton/>
                <div
                    className='lg:text-7xl md:text-5xl text-3xl font-extrabold text-header text-center sm:max-w-[70%] mx-auto'>
                    Our Commitment to Excellence
                </div>
                <div className='sm:text-xl text-sm font-medium text-subText py-6 text-center sm:max-w-[60%] mx-auto'>Our
                    driver are dedicated to deliver the highest quality service possible and help you with all your
                    needs on the way!
                </div>
                <div className='flex flex-wrap mt-6 items-center gap-[5%] sm:mt-12 px-3 justify-between w-[98%]'>

                    <div className='child:flex child:items-center child:gap-6 min-[697px]:max-w-[50%] child:mb-6 child:sm:mb-8'>
                        <div>
                            <Image className='size-12 sm:size-[84px]' src='/door2door.svg' width={84}
                                   height={84} alt='door2door'/>
                            <div className='child:text-header'>
                                <h2 className='font-extrabold sm:text-2xl text-base  sm:pb-2 pb-1'>
                                    Door-to-Door Service
                                </h2>
                                <span className='font-normal text-sm text-subText'>
                                            We ensure comfort and convenience from your doorstep to your destination. You don't need to pay extra for taxi or public transport.
                                        </span>
                            </div>
                        </div>
                        <div>
                            <Image className='size-12 sm:size-[84px]' src='/bagage.svg' width={84}
                                   height={84} alt='bagage'/>
                            <div className='child:text-header'>
                                <h2 className='font-extrabold sm:text-2xl text-base  sm:pb-2 pb-1'>
                                    Help with all your luggage
                                </h2>
                                <span className='font-normal text-sm text-subText'>
                                            Our drivers will help you with handling your bags and keep them safe it you stop for sightseeing.
                                        </span>
                            </div>
                        </div>
                        <div>
                            <Image className='size-12 sm:size-[84px]' src='/car.svg' width={84}
                                   height={84} alt='door2door'/>
                            <div className='child:text-header'>
                                <h2 className='font-extrabold sm:text-2xl text-base  sm:pb-2 pb-1'>
                                    Safe and Comfortable Driving
                                </h2>
                                <span className='font-normal text-sm text-subText'>
                                            Sit back, relax, and enjoy a journey as our skilled professionals navigate the roads.
                                        </span>
                            </div>
                        </div>
                    </div>

                    <div className='relative sm:max-w-[40%] max-sm:max-w-[360px] min-[697px]:mr-auto max-[697px]:mx-auto min-w-[280px]'>


                        <div className={'max-w-[360px] flex flex-col !justify-start !items-start w-max'}>
                            <h2 className={'font-extrabold sm:text-2xl text-base  sm:pb-2 pb-1'}>Contact Us!</h2>
                            <ContactForm InputClassName={'min-[340px]:min-w-[271px]  min-[1097px]:min-w-[230px]  min-[1197px]:min-w-[271px] min-[300px]:min-w-[230px] min-[260px]:min-w-[200px]'} PhoneInputClassName={'!w-[calc(100%-132px)] min-[340px]:min-w-[144px] min-[1197px]:min-w-[144px] min-[1097px]:min-w-[90px] min-[300px]:min-w-[122px] min-[260px]:min-w-[92px]'}/>
                        </div>


                        {/*<div*/}
                        {/*    className='flex shadow-xl bg-surface2/70 rounded-full gap-4 py-3 px-4 items-center w-[240px] absolute top-[24px] left-[-32px] backdrop-blur-md'>*/}
                        {/*    <Image className='size-10' src='/user1.png' width={40} height={40}*/}
                        {/*           alt='user-image'/>*/}
                        {/*    <div>*/}
                        {/*              <span>*/}
                        {/*                  George Martinez*/}
                        {/*              </span>*/}
                        {/*        <div className='flex items-center gap-1 text-[12px]'>*/}
                        {/*            <Image className='mt-[-2px]' src='/star.svg' height={12} width={12}*/}
                        {/*                   alt='star'/>*/}
                        {/*            4.7*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<Image className='sm:max-w-[65%] max-h-[400px] min-w-[280px]' height={490} width={646}*/}
                        {/*       src='/img.png'*/}
                        {/*       alt='lugage-image'/>*/}
                        {/*<div*/}
                        {/*    className='flex shadow-xl bg-surface2/70 rounded-full gap-4 py-3 px-4 items-center w-[240px] absolute bottom-[10px] right-[-2%] sm:left-[24%] backdrop-blur-md'>*/}
                        {/*    <Image className='size-10' src='/user2.png' width={40} height={40}*/}
                        {/*           alt='user-image'/>*/}
                        {/*    <div>*/}
                        {/*              <span>*/}
                        {/*                  Tommy Peraz*/}
                        {/*              </span>*/}
                        {/*        <div className='flex items-center gap-1 text-[12px]'>*/}
                        {/*            <Image className='mt-[-2px]' src='/star.svg' height={12} width={12}*/}
                        {/*                   alt='star'/>*/}
                        {/*            4.9*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
