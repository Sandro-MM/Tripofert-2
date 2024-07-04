'use client'





import {FiMinus, FiPlus} from "react-icons/fi";
import {Button} from "@/components/ui/button";
import {DrawerClose} from "@/components/ui/drawer";
import {Input} from "@/components/ui/input";
import {useEffect} from "react";

const Counter = ({count, setCount}) => {

    useEffect(() => {
        if (typeof count === 'string') {
            setCount(1);
        }
    }, []);

    const decrementCount = () => {
        setCount((prevCount) => {
            const newCount = prevCount === '' ? 1 : prevCount;
            return Math.max(newCount - 1, 1);
        });
    };

    const incrementCount = () => {
        setCount((prevCount) => {
            const newCount = prevCount === '' ? 1 : prevCount;
            return Math.min(newCount + 1, 7);
        });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            const numericValue = parseInt(value, 10);
            setCount(isNaN(numericValue) ? '' : Math.min(numericValue, 7));
        }
    };

    return (
        <div>
            <div className='flex gap-6 items-center justify-center'>
                <Button onClick={decrementCount} className={'size-11 p-0'}>
                    <FiMinus
                        size={30}
                    />
                </Button>
                <Input       onChange={handleInputChange} value={count} className='w-[60px] !h-[44px] text-center text-2xl'/>
                <Button onClick={incrementCount} className={'size-11 p-0'}>
                    <FiPlus
                        size={30}
                    />
                </Button>
            </div>
            <DrawerClose asChild>
                <Button  className={'w-[200px] h-[40px] text-lg mt-8'}>
                    Select
                </Button>
            </DrawerClose>

        </div>

    );
};

export default Counter;
