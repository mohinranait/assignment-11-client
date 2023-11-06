const LoadingSpin = () => {
    return (
        <>
            <div className='fixed bg-white z-[9999] top-0 left-0 bottom-0 right-0 h-screen flex items-center justify-center'>
                <div>
                    <div>
                        <span className="loading loading-spinner text-primary loading-lg"></span>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default LoadingSpin;