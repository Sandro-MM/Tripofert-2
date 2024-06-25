'use client'

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import { Input } from "@/components/ui/input"

import Image from "next/image";
import {DrawerClose} from "@/components/ui/drawer";




const SearchTable = ({data}) => {
    return (
        <div>
            <Input className='!w-[80%] mx-[0px] min-[500px]:min-w-[460px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px]  bg-background/90' type="" placeholder="Search" />
            <Table className='!w-[80%] mx-[0px] min-[500px]:min-w-[460px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px] mt-3'>
                <TableBody className='w-full'>
                    {
                        data.map((item, index)=>(
                            <DrawerClose key={index} asChild>
                            <TableRow className='w-full' >
                                <TableCell className="font-medium w-1/3">{item.name}</TableCell>
                                <TableCell>{item.countryName}</TableCell>
                                <TableCell className='p-0 w-7 h-7'>
                                    <Image
                                        src="/direction-left.svg"
                                        width={28}
                                        height={28}
                                        alt="select"/>
                                </TableCell>
                            </TableRow>
                            </DrawerClose>
                        ))
                    }

                </TableBody>
            </Table>

        </div>

    );
};

export default SearchTable;
