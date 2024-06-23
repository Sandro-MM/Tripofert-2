const BackgroundVideo = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <video className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2" autoPlay loop muted>
                <source src="/11969278_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
