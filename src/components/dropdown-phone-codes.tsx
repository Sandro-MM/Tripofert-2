'use client';

import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {mobileNumberCodes} from "@/directions-functions/mobile-number-codes";
import {Input} from "@/components/ui/input";

export default function DropdownPhoneCodes({ value, onChange, name }) {
    const data = mobileNumberCodes;
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = data.filter(item =>
        item.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Select value={value} onValueChange={onChange} name={name}>
            <SelectTrigger className="bg-background/90 mx-0 min-[500px]:w-[126px] min-[400px]:w-[102px] w-[102px] mb-3 !absolute top-0">
                <SelectValue placeholder="Code" />
            </SelectTrigger>
            <SelectContent>
                {/* Search input */}
                <div className="p-2">
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search code..."
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <SelectGroup>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <SelectItem key={index} value={item.id.toString()}>
                                {item.code} {item.flag}
                            </SelectItem>
                        ))
                    ) : (
                        <div className="p-2 text-center">No results found</div>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
