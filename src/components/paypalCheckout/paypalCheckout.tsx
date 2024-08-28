import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {supabase} from "@/directions-functions/supabaseClient";
import {cities} from "@/directions-functions/direction-functions";

const PayPalCheckout = ({amount, orderData, onSubmit,validate}) => {



    function getVisitLocationsWithCityData(visitLocations) {
        return visitLocations?.map(location => {
            const cityData = cities.find(city => city.id === location.id);
            return {
                ...cityData,
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


    const  submit  = async (transactionId) => {
        console.log(dataObject)
        console.log(transactionId)
        onSubmit(transactionId, dataObject)
    };





    return (
        <PayPalScriptProvider options={{ clientId: "AZzPnuGXhV1z08hjwxyC00a86LGqPxI4n0laqXwfIEEwtXyaQ1oogQk6pnqdOmIix-zfhjhKle5GK02n" }}>
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
                                        currency_code: "USD",
                                        value: '0.1',
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
                    } catch (error) {
                        console.error('Error capturing PayPal order:', error);
                    }
                }}
                onError={(err) => {
                    console.error("PayPal Checkout error", err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckout;
