'use client'

import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";

type DrawerOpenProps = {
    trigger: any;
    title: string;
    subtitle: string;
    content: any;
    disable: boolean;
};


const DrawerOpen: React.FC<DrawerOpenProps> = ({trigger , title , subtitle, content, disable}) => {
    return (
        <Drawer>
            <DrawerTrigger disabled={disable === true}>{trigger}</DrawerTrigger>
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
