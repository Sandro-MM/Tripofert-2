'use client'





import {FiMinus, FiPlus, FiPlusCircle, FiPlusSquare} from "react-icons/fi";
import {Button} from "@/components/ui/button";
import {DrawerClose} from "@/components/ui/drawer";

const Counter = () => {
    return (
        <div>
            <div>
                <Button className={'size-11 p-0'}>
                    <FiMinus
                        size={30}
                    />
                </Button>
                <Button className={'size-11 p-0'}>
                    <FiPlus
                        size={30}
                    />
                </Button>
            </div>
            <DrawerClose asChild>
                <Button className={'w-[200px] h-[40px] text-lg mt-5'}>
                    Select
                </Button>
            </DrawerClose>

        </div>

    );
};

export default Counter;
