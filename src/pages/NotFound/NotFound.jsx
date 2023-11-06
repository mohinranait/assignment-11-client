import { Link, useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div className='flex items-center justify-center h-[80vh]'>
                <div>
                    <div>
                        <img className='w-[300px] lg:w-[600px]' src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x1462-azn7c8sp.png" alt="" />
                    </div>
                    <div className=' flex items-center justify-center gap-5'>
                        <Link to={"/"} className='px-5 py-3 rounded-md bg-purple-700 text-white'> Home </Link>
                        <button onClick={handleGoBack} className='px-5 py-3 rounded-md bg-primary text-white'> Go Back </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;