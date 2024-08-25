import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {undefined} from "zod";

const PayPalCheckout = ({amount}) => {
    return (
        <PayPalScriptProvider options={{ clientId: "AZzPnuGXhV1z08hjwxyC00a86LGqPxI4n0laqXwfIEEwtXyaQ1oogQk6pnqdOmIix-zfhjhKle5GK02n" }}>
            <PayPalButtons
                className={'bg-transparent'}
                style={{color:'silver'}}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "USD",
                                    value: amount, // Set the total amount here
                                },
                            },
                        ]
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const transactionId = details.id; // Catching the transaction ID here
                        alert(`Transaction completed by ${details.payer.name.given_name}. Transaction ID: ${transactionId}`);
                        console.log("Transaction ID:", transactionId);
                    });
                }}
                onError={(err) => {
                    console.error("PayPal Checkout error", err);
                    // Handle error here
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckout;
