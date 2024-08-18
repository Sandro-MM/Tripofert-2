'use client';

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function Dropdown({placeholder, data, left}) {




    return (
        <>
            <Select>
                <SelectTrigger className={`w-[180px] bg-background/90 !w-[22%] mx-[0px] min-[500px]:min-w-[126px] min-[400px]:min-w-[102px] min-[340px]:min-w-[90px] min-[300px]:min-w-[70px] min-[260px]:min-w-[60px]  mb-3 !absolute top-0 ${left}`}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {/*<SelectLabel>Fruits</SelectLabel>*/}
                        {data.map((item, index) => (
                            <SelectItem key={index} value={item}>{item}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}
