'use client'
import { useEffect } from "react";

interface MessengerChatProps {
    pageId: string;
    themeColor?: string;
    loggedInGreeting?: string;
    loggedOutGreeting?: string;
}

const MessengerChat: React.FC<MessengerChatProps> = ({
                                                         pageId,
                                                         themeColor = "#0084ff",
                                                         loggedInGreeting = "Hi! How can we help you?",
                                                         loggedOutGreeting = "Hi! How can we help you?",
                                                     }) => {
    useEffect(() => {
        const loadMessengerSDK = () => {
            if (window.FB) {
                window.FB.XFBML.parse();
                return;
            }

            window.fbAsyncInit = function () {
                window.FB.init({
                    xfbml: true,
                    version: "v17.0",
                });
            };

            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            script.async = true;
            document.body.appendChild(script);
        };

        loadMessengerSDK();

        return () => {
            const script = document.getElementById("facebook-jssdk");
            if (script) {
                script.remove();
            }
        };
    }, []);

    return (
        <>
            <div id="fb-root"></div>
            <div
                className="fb-customerchat"
                data-attribution="setup_tool"
                data-page_id={pageId}
                data-theme_color={themeColor}
                data-logged_in_greeting={loggedInGreeting}
                data-logged_out_greeting={loggedOutGreeting}
            ></div>
        </>
    );
};

export default MessengerChat;
