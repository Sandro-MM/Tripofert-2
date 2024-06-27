'use client'

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import { Input } from "@/components/ui/input"

import Image from "next/image";
import {DrawerClose} from "@/components/ui/drawer";
import {useState} from "react";




const SearchTable = ({data, setChosenItem}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='!w-[80%] mx-[0px] min-[500px]:min-w-[460px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px]  bg-background/90' type="" placeholder="Search" />
            <Table className='!w-[80%] mx-[0px] min-[500px]:min-w-[460px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px] mt-3'>
                <TableBody className='w-full'>
                    {
                        filteredData.map((item, index) => (
                            <DrawerClose key={index} asChild>
                            <TableRow onClick={()=>setChosenItem({name:item.name, id:item.id})} className='w-full' >
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
