'use client'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {cities} from "@/directions-functions/direction-functions";
import {useState} from "react";
import DialogOpen from "@/components/dialogOpen";
import {useRouter} from "next/navigation";

const PayPalCheckout = ({amount, orderData, onSubmit,validate}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    function getVisitLocationsWithCityData(visitLocations) {
        return visitLocations?.map(location => {
            const cityData = cities.find(city => city.id === location.id);
            return {
                ...cityData,
                visitTime: location.visitTime,
            };
        });
    }

    function getVisitLocationsWithCityName(visitLocations) {
        return visitLocations?.map(location => {
            const cityData = cities.find(city => city.id === location.id);
            return {
                name: cityData.name,
                visitTime: location.visitTime,
            };
        });
    }


    const dataObject = {
        created_at:new Date(),
        pick_up_date:orderData.date,
        departure_city:orderData.departure,
        destination_city:orderData.destination,
        car_type:orderData.carType,
        passenger_count:orderData.passengersCount,
        visit_places:getVisitLocationsWithCityData(orderData.visitLocations)
    }
    const querryObject = {
        pick_up_date: orderData.date,
        departure_city: orderData.departure.name,
        destination_city: orderData.destination.name,
        car_type: orderData.carType,
        passenger_count: orderData.passengersCount,
        visit_places: JSON.stringify(getVisitLocationsWithCityName(orderData.visitLocations)), // Serialize visit_places
    };


    const  submit  = async (transactionId) => {
        console.log(dataObject)
        console.log(transactionId)
        onSubmit(transactionId, dataObject)
    };





    return (
        <PayPalScriptProvider options={{ clientId: "ARGLK0LP2HLeFpyJ4qWiTWlW4kseeCM1fVDPz_pBmBSgk2mzDd9-wngtNjihTrFawZtmr_5R4GOcv8Yq" }}>
            <PayPalButtons
                className={'bg-transparent'}
                style={{color:'silver'}}
                createOrder={async (data, actions) => {
                    const isValid = validate(() => true)(); // Adjust validation logic as needed
                    if (!isValid) {
                        console.error("Form validation failed");
                        return;
                    } else {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: "EUR",
                                        value: amount,
                                    },
                                },
                            ]
                        });
                    }
                }}
                onApprove={async (data, actions) => {
                    try {
                        const details = await actions.order.capture();
                        const transactionId = details.id;
                        console.log('PayPal approved:', details);
                        await submit(transactionId);
                        const stringifiedQueryParams = Object.fromEntries(
                            Object.entries(querryObject).map(([key, value]) => [key, encodeURIComponent(value)])
                        );
                        const queryString = new URLSearchParams(stringifiedQueryParams).toString();
                        const successRoute = `/searchResults/success?${queryString}`;
                        router.push(successRoute);
                    } catch (error) {
                        console.error('Error capturing PayPal order:', error);
                        setIsOpen(true)
                    }
                }}
                onError={(err) => {
                    console.error("PayPal Checkout error", err);
                    setIsOpen(true)
                }}
            />
            <DialogOpen isOpen={isOpen} setIsOpen={setIsOpen}/>
        </PayPalScriptProvider>
    );
};

export default PayPalCheckout;
