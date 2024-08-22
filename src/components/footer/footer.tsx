import Image from "next/image";

const Footer = () => {
    return (
        <footer className='w-full pt-4 px-4'>
            <div className='max-w-[1280px] w-full mx-auto sm:flex justify-between'>
            <div className='w-full hidden lg:block max-w-[250px] h-[50px]'>
as
            </div>
            <div className='flex w-full max-w-[550px] justify-between child:text-header font-bold sm:text-lg'>
                <div>
                    Company
                    <ul className='child:cursor-pointer child:sm:text-sm text-xs child:font-normal mt-6 child:my-4'>
                        <li>About</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div>
                    Contact
                    <ul className='child:cursor-pointer child:sm:text-sm text-xs child:font-normal mt-6 child:my-4'>
                        <li>tripofert@gmail.com</li>
                        <li>+001031003123</li>
                    </ul>
                </div>
                <div>
                    More
                    <ul className='child:cursor-pointer child:sm:text-sm text-xs child:font-normal mt-6 child:my-4'>
                        <li>Help/FAQ</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
                <div className='w-full max-w-[230px] text-center mx-auto my-4'>
                <div className='flex w-full justify-between mb-6 child:size-[49px] child:cursor-pointer'>
                    <Image src={'/Social.svg'} width={49} height={49} alt='instagram'/>
                    <Image src={'/fb.svg'} width={49} height={49} alt='facebook'/>
                    <Image src={'/youtu.svg'} width={49} height={49} alt='youtube'/>

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
