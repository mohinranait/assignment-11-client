import {  IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";


const SocialLinks = () => {
    return (
        <>
            <ul className="flex flex-wrap items-center justify-center gap-2">
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-blue-700 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500 z-50 " href="#"> <IoLogoFacebook className="z-50" /> </a></li>
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-blue-700 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500 z-50 " href="#"> <IoLogoYoutube className="z-50" /></a></li>
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-blue-700 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500 z-50 " href="#"> <IoLogoLinkedin className="z-50" /></a></li>
                <li><a className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-blue-700 before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-500 z-50 " href="#"> <IoLogoTwitter className="z-50" /></a></li>
            </ul>
        </>
    );
};

export default SocialLinks;