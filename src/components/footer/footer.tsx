import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";

const Footer = () => {
    return (
        <footer className='w-full pt-4 px-4'>
            <div className='max-w-[1280px] w-full mx-auto sm:flex justify-between'>
                <div className='w-full hidden lg:block max-w-[250px] h-[50px]'>
                    <Link href="/">
                    <div className={'flex items-center'}>
                        <Image width={35} height={35} src={'/Logo.svg'} alt={'logo'}/>
                        <p className={'text-lg font-bold text-buttons'}>Tripofert</p>
                    </div>
                    </Link>
                </div>
                <div className='flex w-full max-w-[550px] justify-between child:text-header font-bold sm:text-lg'>
                    <div>
                        Company
                        <ul className='child:cursor-pointer child:sm:text-sm text-xs child:font-normal mt-6 child:my-4 flex gap-1'>
                            <Link href="/privacy">Privacy</Link>
                            <Link href="/legal">Legal</Link>
                            <Link href="/cookies">Cookies</Link>
                        </ul>
                    </div>
                <div>
                    Contact
                    <ul className='child:cursor-pointer child:sm:text-sm text-xs child:font-normal mt-6 child:my-4'>
                        <li>
                            <a href="mailto:tripofert@gmail.com">tripofert@gmail.com</a>
                        </li>
                        <li>
                            <a href="tel:+001031003123">+001031003123</a>
                        </li>
                    </ul>
                </div>
                <div>
                    More
                    <ul className=' text-xs  mt-6 '>
                        <Link href="/faq">
                        <li className={'font-normal my-4 cursor-pointer sm:text-sm'}>Help/FAQ</li>
                        </Link>
                        <Link href="/blogs">
                            <li className={'font-normal my-4 cursor-pointer sm:text-sm'}>Blog</li>
                        </Link>
                    </ul>
                </div>
            </div>
                <div className='w-full max-w-[230px] text-center mx-auto my-4'>
                    <div className='flex w-full justify-between mb-6 child:size-[49px] child:cursor-pointer'>
                        <a href="https://www.instagram.com/tripofert_/" target="_blank" rel="noopener noreferrer">
                            <Image src={'/Social.svg'} width={49} height={49} alt='instagram'/>
                        </a>
                        <a href="https://www.instagram.com/tripofert_/" target="_blank" rel="noopener noreferrer">
                            <Image src={'/fb.svg'} width={49} height={49} alt='facebook'/>
                        </a>
                        <a href="https://www.youtube.com/@Tripofert-s4n" target="_blank" rel="noopener noreferrer">
                            <Image src={'/youtu.svg'} width={49} height={49} alt='youtube'/>
                        </a>
                    </div>
                    Check out our Social Media!
                </div>
            </div>
            <div className='text-center py-[60px]'>
                All rights reserved Tripofert 2024
            </div>
        </footer>
    );
};

export default Footer;
