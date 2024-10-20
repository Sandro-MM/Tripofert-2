'use client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function Dropdown({ placeholder, data, value, onChange, name, left }) {
    return (
        <Select value={value} onValueChange={onChange} name={name}>
            <SelectTrigger className={`w-[180px] bg-background/90 !w-[22%] mx-[0px] min-[500px]:min-w-[126px] min-[400px]:min-w-[102px] min-[340px]:min-w-[90px] min-[300px]:min-w-[70px] min-[260px]:min-w-[60px] mb-3 !absolute top-0 ${left}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data.map((item, index) => (
                        <SelectItem key={index} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
