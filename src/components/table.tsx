'use client'

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import { Input } from "@/components/ui/input"

import Image from "next/image";
import {DrawerClose} from "@/components/ui/drawer";
import React, {useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

type SearchTableProps = {
    data:any;
    setChosenItem: any;
    airportData: any;
};


const SearchTable : React.FC<SearchTableProps> = ({data, setChosenItem, airportData}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const combinedData = [...data, ...airportData]

    const filteredData = combinedData.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const nameMatches = item.name.toLowerCase().startsWith(lowerCaseSearchTerm);
        const abbreviationMatches = item.abbreviation && item.abbreviation.toLowerCase().startsWith(lowerCaseSearchTerm);
        return nameMatches || abbreviationMatches;
    });

    const [searchAirPortTerm, setSearchAirPortTerm] = useState('');

    const filteredAirPortData = airportData.filter(item => {
        const lowerCaseSearchTerm = searchAirPortTerm.toLowerCase();
        const nameMatches = item.name.toLowerCase().startsWith(lowerCaseSearchTerm);
        const abbreviationMatches = item.abbreviation && item.abbreviation.toLowerCase().startsWith(lowerCaseSearchTerm);
        return nameMatches || abbreviationMatches;
    });

    return (
        <div>
            <Tabs defaultValue="places">
                <TabsContent value="places">
            <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='!w-[80%] mx-[0px] min-[500px]:min-w-[500px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px] mb-3  bg-background/90' type="" placeholder="Search" />
                </TabsContent>

                <TabsContent value="airports">
                    <Input
                        value={searchAirPortTerm}
                        onChange={(e) => setSearchAirPortTerm(e.target.value)}
                        className='!w-[80%] mx-[0px] min-[500px]:min-w-[500px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px] mb-3 bg-background/90' type="" placeholder="Search" />
                </TabsContent>



                <div className={'mx-auto w-max mb-6'}>
                    <TabsList>
                        <TabsTrigger value="places">Places</TabsTrigger>
                        <TabsTrigger value="airports">Airports</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="places">
            <Table className='!w-[100%] mx-[0px] min-[500px]:min-w-[500px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px]'>
                <TableBody className='w-full'>
                    {
                        filteredData.slice(0, 80).map((item, index) => (
                            <DrawerClose key={index} asChild>
                            <TableRow onClick={()=>setChosenItem({id: item.id, name: item.name, country: item.country, latitude: item.latitude, longitude: item.longitude},)} className='w-full' >
                                <TableCell className="font-medium w-1/3">{item.name}</TableCell>
                                <TableCell>{item?.abbreviation}  {item.country}</TableCell>
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
                </TabsContent>
                <TabsContent value="airports">
                    <Table className='!w-[100%] mx-[0px] min-[500px]:min-w-[500px] min-[400px]:min-w-[380px] min-[340px]:min-w-[300px] min-[300px]:min-w-[260px] min-[260px]:min-w-[220px]'>
                        <TableBody className='w-full'>
                            {
                                filteredAirPortData.slice(0, 80).map((item, index) => (
                                    <DrawerClose key={index} asChild>
                                        <TableRow onClick={()=>setChosenItem({id: item.id, name: item.name, country: item.country, latitude: item.latitude, longitude: item.longitude},)} className='w-full' >
                                            <TableCell className="font-medium w-1/3">{item.name}</TableCell>
                                            <TableCell>{item?.abbreviation}  {item.country}</TableCell>
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
                </TabsContent>
            </Tabs>
        </div>

    );
};

export default SearchTable;
