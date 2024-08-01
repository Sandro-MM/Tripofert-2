import { cities } from "@/directions-functions/direction-functions";

export default function RouteBarComponent({ departure, destination, points }) {
    // Function to get city name by ID
    const getCityNameById = (id) => {
        const city = cities.find((city) => city.id === id);
        return city ? city.name : "Unknown";
    };

    return (
        <div className='flex w-full flex-wrap gap-1 gap-y-4 justify-center my-6 items-center'>
            <div className='text-lg font-semibold'>{departure}</div>
            <div className='w-8 h-[1.5px] bg-subText rounded-3xl'></div>

            {points &&
                points.map((point, index) => (
                    <div className = {'flex gap-1 justify-center items-center'} key={index}>
                        <div className='w-max text-center py-1 px-2 bg-buttons rounded-xl'>
                            <div className='font-medium'>{getCityNameById(point.id)}</div>
                            <div className='text-xs text-subText'>{point.visitTime} min</div>
                        </div>
                        <div className='w-8 h-[1.5px] bg-subText rounded-3xl'></div>
                    </div>
                ))}
            <div className='text-lg font-semibold'>{destination}</div>
        </div>
    );
}
