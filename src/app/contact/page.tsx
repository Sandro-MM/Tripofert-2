'use client'
import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import Footer from "@/components/footer/footer";
import ContactForm from "@/app/contact/contactForm";
export default function Contact() {



    return (
        <>
            <BackgroundVideo/>
            <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
                <ThemeSwitch/>
                <Logo/>


                <div
                    className='max-w-[1080px] w-max bg-background/80 backdrop-blur-[1px] border border-border px-6 pt-6 rounded-3xl mx-auto my-[35vh]'>
                    <h2 className='lg:text-2xl md:text-xl sm:text-base text-xs text-header font-semibold text-center'>Contact Us
                        Directly</h2>


                    <ContactForm/>


                </div>

            </div>
            <div className="relative w-full mt-[100vh] z-20  bg-bg/90 backdrop-blur-sm">

                <Footer/>
            </div>
        </>
    )
}
