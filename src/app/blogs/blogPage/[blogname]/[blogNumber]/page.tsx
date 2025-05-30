'use client'
import {usePathname, useRouter} from 'next/navigation'
import React from "react";
import {blogsData} from "@/directions-functions/blogs-data";
import Logo from "@/components/logo";
import ThemeSwitch from "@/components/themeSwitchButton";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Head from 'next/head';
function Page({params}) {
    const router = useRouter();
    const pathname = usePathname()
    const segments = pathname.split('/')
    const blogName = segments[3]
    const id = segments[4]

    const blog = blogsData[id]
    const structuredData = {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "image": [blog.img],
        "author": {
            "@type": "Person",
            "name": blog.author
        },
        "datePublished": blog.datePosted,
        "description": blog.postText[0].text,
    };

   if (blog) return (
        <>
            <Head>
                <title>{blog.title} - Tripofert</title>
                <meta name="description" content={blog.postText[0].text}/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
                />
            </Head>
            <div className={'mb-[90px]'}>

                    <Logo/>

                <ThemeSwitch />
            <div className={'mt-20 mb-[90px] max-w-[1280px] w-[90%] mx-auto h-max'}>
                <div
                    className={'w-max py-[3px] px-[7.5px] bg-buttons rounded-[4.5px] text-buttonsText text-[12.5px] leading-[15px] font-medium'}>{blog?.category}</div>
                <div
                    className={'mt-[12px] lg:text-[27px] sm:text-[18px] text-sm leading-[16px] sm:leading-[20px]  md:text-[20px] text-header md:leading-[23px] lg:leading-[30px] tracking-tight font-semibold'}>{blog?.title}</div>
                <div className={'my-[8px] sm:my-[18px]  flex gap-[9px] items-center'}>
                    <Image src={blog?.author?.avatar} width={27} height={27} alt={'author-image'}/>
                    <div className={'flex flex-wrap gap-x-[15px] gap-y-[3px]'}>
                        <div
                            className={'text-[12px] leading-[15px] font-medium lg:text-[12px] tracking-tight text-subText'}>{blog?.author?.name}</div>
                        <div
                            className={'text-[12px] leading-[15px] font-medium lg:text-[12px] tracking-tight text-subText'}>{blog?.datePosted}</div>
                    </div>

                </div>
                <Image className={'w-full max-w-[1280px] max-h-[631px] rounded-[9px]'} width={1280} height={400}
                       src={blog?.img} alt={'blog-image'}/>

                <div className={'mt-6'}>
                    {blog?.postText.map((item, index) => (
                        <div key={index}>
                            {
                                item?.title &&
                                    <div className={'my-6 font-semibold sm:text-lg text-base text-header'}>
                                        {item?.title}
                                    </div>
                            }
                            {
                                item?.text &&
                                <div className={'mb-6 font-normal sm:text-[15px] text-sm text-blogtext leading-6'}>
                                    {item?.text}
                                </div>
                            }
                            {
                                item?.quotes &&
                                <div className={'my-6 p-6 bg-buttons text-buttonsText rounded-[9px] text-lg italic'}>
                                    {item?.quotes}
                                </div>
                            }
                            {
                                item?.img &&
                                <Image className={'w-full my-6 max-w-[1280px] max-h-[631px] rounded-[9px]'} width={1280} height={400}
                                       src={item?.img} alt={'blog-image'}/>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Page;
