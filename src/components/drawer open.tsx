'use client'

import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";

const DrawerOpen = ({trigger , title , subtitle, content }) => {
    return (
        <Drawer>
            <DrawerTrigger>{trigger}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>{subtitle}</DrawerDescription>
                </DrawerHeader>
               <div className={'mx-auto'}>
                   {content}
               </div>
                <DrawerFooter>

                    <DrawerClose>

                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    );
};

export default DrawerOpen;
