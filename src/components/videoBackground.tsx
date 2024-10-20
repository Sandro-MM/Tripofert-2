const BackgroundVideo = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
            <video
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted

            >
                <source src="https://splfsymwvlirktdoogdb.supabase.co/storage/v1/object/public/background/12177245_2560_1440_30fps.mp4?t=2024-09-21T14%3A19%3A49.170Z" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
