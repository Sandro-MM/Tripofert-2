import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Questions from "@/app/faq/questions";
import PolicySection from "@/app/faq/policySection";
import {Spinner} from "@/components/ui/spinner";

export default function FaxPage() {

    return(
        <div className={'min-h-screen flex flex-col'}>
            <ThemeSwitch />
            <Logo/>
            <div className={'text-2xl font-semibold w-max mx-auto mb-8 mt-[88px]'}>
                Frequently asked question
            </div>
            <Questions/>
            <PolicySection/>
            <div className={'mx-auto w-max mt-8'}>
            <Link href="/contact">
                <button type={"submit"}
                        className='ml-9  h-16 w-42 bg-buttons rounded-xl flex justify-center items-center text-center text-base max-[1115px]:mt-8 max-[1115px]:mx-auto text-buttonsText font-semibold px-9'>
                    Contact Us Directly!
                </button>
            </Link>
            </div>
            <div className={'w-full mt-auto'}>
                <Footer/>
            </div>
        </div>

    )
}
