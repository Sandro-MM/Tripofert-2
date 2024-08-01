'use client'

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import { Input } from "@/components/ui/input"

import Image from "next/image";
import {DrawerClose} from "@/components/ui/drawer";
import React, {useState} from "react";
import {searchPlaceInterface} from "@/directions-functions/direction-functions";

type SearchTableProps = {
    data:[searchPlaceInterface];
    setChosenItem: React.Dispatch<React.SetStateAction<number | string | undefined>>;
};


const SearchTable : React.FC<SearchTableProps> = ({data, setChosenItem}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='!w-[80%] mx-[0px] min-[500px]:min-w-[500px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px] mb-6  bg-background/90' type="" placeholder="Search" />
            <Table className='!w-[100%] mx-[0px] min-[500px]:min-w-[500px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px]'>
                <TableBody className='w-full'>
                    {
                        filteredData.slice(0, 80).map((item, index) => (
                            <DrawerClose key={index} asChild>
                            <TableRow onClick={()=>setChosenItem({id: item.id, name: item.name, country: item.country, latitude: item.latitude, longitude: item.longitude},)} className='w-full' >
                                <TableCell className="font-medium w-1/3">{item.name}</TableCell>
                                <TableCell>{item.country}</TableCell>
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
