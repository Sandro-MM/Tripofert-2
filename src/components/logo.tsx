import Image from "next/image";

const Logo = () => {
    return (
        <div className={'absolute left-4 top-1 flex items-center'}>
            <Image width={55} height={55} src={'/Logo.svg'} alt={'logo'}/>
            <h1 className={'text-2xl font-bold text-buttons'}>Tripofert</h1>
        </div>
    );
};

export default Logo;
