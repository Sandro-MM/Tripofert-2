import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import {blogsData} from "@/directions-functions/blogs-data";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Head from 'next/head';

const Blogs = () => {

    const blogs = blogsData


    return (
        <>
            <Head>
                <title>Travel Blogs - Tripofert</title>
                <meta name="description" content="Read engaging travel blogs on Tripofert, where you’ll find tips, guides, and inspiration for your next journey." />
            </Head>

        <div>
            <Link href="/">
                <Logo/>
            </Link>
            <ThemeSwitch />
            <div className={'mt-20 mb-[90px] max-w-[1280px] w-[95%] mx-auto h-max'}>
                <Link href={`/blogs/blogPage?id=${blogsData[0].id}`}>
                <div className={'w-full max-h-[701px] relative mx-auto cursor-pointer'}>
                    <Image className={'w-full max-w-[1280px] max-h-[631px] rounded-[9px]'} width={1280} height={400}
                           src={blogsData[0].img} alt={'blog-image'}/>
                    <div
                        className={'absolute max-w-[448px] sm:max-h-[228px] max-h-max bg-transparentSurface border border-border border-solid w-1/2 h-full left-[5%] bottom-[-8%] rounded-[9px] p-[16px] sm:p-[30px]'}>

                        <div
                            className={'w-max py-[3px] px-[7.5px] bg-buttons rounded-[4.5px] text-buttonsText text-[10.5px] leading-[15px] font-medium'}>{blogsData[0].category}</div>
                        <div
                            className={'mt-[12px] lg:text-[27px] sm:text-[18px] text-sm leading-[16px] sm:leading-[20px]  md:text-[20px] text-header md:leading-[23px] lg:leading-[30px] tracking-tight font-semibold'}>{blogsData[0].title}</div>
                        <div className={'mt-[8px] sm:mt-[18px] flex gap-[9px] items-center'}>
                            <Image src={blogsData[0].author.avatar} width={27} height={27} alt={'author-image'}/>
                            <div className={'flex flex-wrap gap-x-[15px] gap-y-[3px]'}>
                                <div
                                    className={'text-[10.5px] leading-[15px] font-medium lg:text-[12px] tracking-tight text-subText'}>{blogsData[0].author.name}</div>
                                <div
                                    className={'text-[10.5px] leading-[15px] font-medium lg:text-[12px] tracking-tight text-subText'}>{blogsData[0].datePosted}</div>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
                <div className={' text-[18px]  text-header  mt-12 sm:mt-20 sm:mb-6  mb-3 tracking-tight font-semibold'}>Latest
                    Blogs
                </div>
                <div className={'w-full flex gap-[15px] flex-wrap justify-center'}>
                    {blogsData.slice(1).map((item, index) => (
                        <Link href={`/blogs/blogPage?id=${item.id}`}>
                        <div
                            className={'bg-transparentSurface cursor-pointer w-full max-w-[320px] min-[585px]:max-w-[270px]   rounded-[9px] h-[366px] border border-border border-solid px-[13.5px] py-[12px]'}
                            key={index}>
                            <Image className={'w-full min-[585px]:max-w-[270px] max-w-full max-h-[180px] rounded-[9px]'}
                                   width={400} height={200} src={item.img} alt={'blog-image'}/>
                            <div className={'mt-[18px]'}>
                                <div
                                    className={'w-max py-[3px] px-[7.5px] bg-buttons rounded-[4.5px] text-buttonsText text-[10.5px] leading-[15px] font-medium'}>{item.category}</div>
                                <div
                                    className={'mt-[12px] text-[18px]  text-header  tracking-tight font-semibold'}>{item.title}</div>
                                <div className={'mt-[8px] sm:mt-[10px] flex gap-[9px] items-center'}>
                                    <Image src={blogsData[0].author.avatar} width={27} height={27}
                                           alt={'author-image'}/>
                                    <div className={'flex flex-wrap gap-x-[15px] gap-y-[3px]'}>
                                        <div
                                            className={'text-[10.5px] leading-[15px] font-medium lg:text-[12px] tracking-tight text-subText'}>{item.author.name}</div>
                                        <div
                                            className={'text-[10.5px] leading-[15px] font-medium lg:text-[12px] tracking-tight text-subText'}>{item.datePosted}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Blogs;
