import ThemeSwitch from "@/components/themeSwitchButton";
import Logo from "@/components/logo";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Questions from "@/app/faq/questions";
import PolicySection from "@/app/faq/policySection";

export default function FaxPage() {

    return(
        <div>
            <ThemeSwitch />
            <Link href={'/'}> <Logo/></Link>
            <div className={'text-2xl font-semibold w-max mx-auto mb-8 mt-12'}>
                Frequently asked question
            </div>
            <Questions/>
            <PolicySection/>
            <div className={'absolute bottom-0 w-full'}>
                <Footer/>
            </div>

        </div>

    )
}
