'use client';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';
import {Spinner} from "@/components/ui/spinner";
const libraries = ['places', 'drawing', 'geometry'];
export function MapProvider({ children }: { children: ReactNode }) {

    // const test = 'AIzaSyDaS2UHnLtpquY4hupwPoDlvYrCiOGg1QM'
    const prod = 'AIzaSyBr1rXP2OwtxCKz8LeSwPmjLSUZdWoyeBI'

    const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: prod as string,
        libraries: libraries as Libraries,
    });

    if(loadError) return (
        <div className='w-full h-full min-h-[400px] flex items-center justify-center mt-8'>
            <p>Encountered error while loading google maps</p>
        </div>
    )
    if (!scriptLoaded) return (
        <div className='w-full h-full min-h-[400px] flex items-center justify-center mt-8'>
            <Spinner size={160}/>
        </div>
    )


    return children;
}
