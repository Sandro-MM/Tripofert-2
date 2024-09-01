const BackgroundVideo = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
            <video
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted

            >
                <source src="https://videos.pexels.com/video-files/27590232/12177245_2560_1440_30fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
