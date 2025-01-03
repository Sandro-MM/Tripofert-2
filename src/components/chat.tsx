import Script from 'next/script';

const Chat = () => {
    return (
        <>
            <Script
                id="tawk-to-script"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                        (function () {
                            const s1 = document.createElement("script");
                            const s0 = document.getElementsByTagName("script")[0];
                            s1.async = true;
                            s1.src = 'https://embed.tawk.to/676edac5af5bfec1dbe340ab/1ig4gd5id';
                            s1.charset = 'UTF-8';
                            s1.setAttribute('crossorigin', '*');
                            s0.parentNode.insertBefore(s1, s0);
                        })();
                    `,
                }}
            />
        </>
    );
};

export default Chat;



