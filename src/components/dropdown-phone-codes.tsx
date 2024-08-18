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
import {mobileNumberCodes} from "@/directions-functions/mobile-number-codes";

export default function DropdownPhoneCodes() {

    const data = mobileNumberCodes



    return (
        <>
            <Select>
                <SelectTrigger className=" bg-background/90 mx-[0px] min-[500px]:w-[126px] min-[400px]:w-[102px] w-[102px]  mb-3 !absolute top-0">
                    <SelectValue placeholder={'Code'}  />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {data.map((item, index) => (
                                <SelectItem key={index} value={item.id.toString()} >
                                    {item.code}  {item.flag}
                                </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}
