import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
        <div className={'absolute left-4 top-1 flex items-center'}>
            <Image width={55} height={55} src={'/Logo.svg'} alt={'logo'}/>
            <h1 className={'text-2xl font-bold text-buttons'}>Tripofert</h1>
        </div>
        </Link>
    );
};

export default Logo;
