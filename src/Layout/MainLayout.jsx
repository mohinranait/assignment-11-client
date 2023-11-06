
import {  Link, Outlet } from "react-router-dom";
import {  HiMiniXMark } from "react-icons/hi2";
import Header from "../shared/Header/Header";
import { useState } from "react";
import Logo from "../components/Logo";

import SocialLinks from "../components/SocilaLinks/SocialLinks";
import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer/Footer";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
    const {user,logout} = useAuth();
    const [isToggle, setIsToggle] = useState(false);

    const toggleMobileMenu = () => {
        setIsToggle(!isToggle)
    }

    const handleLogout = async () => {
        await logout();
    }


    return (
        <>

            <Header toggleMobileMenu={toggleMobileMenu} /> 
         
            <Outlet />
            <Toaster />

            <Footer />


            <div className="lg:hidden">
                <div className="opacityDiv hidden w-full z-40 h-full backdrop-blur-lg bg-black bg-opacity-40 fixed top-0 left-0  "></div>
                <div  className={`w-[70%]  z-[100] transition-all duration-500 bg-white h-screen fixed left-0 top-0 overflow-y-auto ${isToggle ? 'translate-x-0':'-translate-x-[100%]'} `}>
                    <div>
                        <ul className="px-4 py-3 space-y-5 flex flex-col">
                            <li className="flex items-center justify-between">
                                <Logo />
                                <span onClick={toggleMobileMenu} className="cursor-pointer text-gray-700 hover:bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center">
                                    <HiMiniXMark />
                                </span>
                            </li>
                            <li>
                                <p className="text-gray-500">Histudy is a education website template. You can customize all.</p>
                            </li>
                            <li>
                                <p className="text-gray-500 text-base flex mb-2 items-center gap-x-2"> 
                                    <span><i className="far fa-envelope"></i></span>
                                    <span>example@gmail.com</span>
                                </p>
                                <p className="text-gray-500 text-base flex items-center gap-x-2"> 
                                    <span><i className="fas fa-phone-alt"></i></span>
                                    <a href="tel:01728068200" className="text-base">01728068200</a>
                                </p>
                            </li>
                            <li className="flex-grow">
                                <ul>
                                    <li className="border-b border-gray-200"><Link to={'/'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">Home</Link></li>
                                    <li className="border-b border-gray-200"><Link to={'/assignment'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">Assignments</Link></li>
                                    <li className="border-b border-gray-200"><Link to={'/all-submited'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">All Submited</Link></li>
                                    <li className="border-b border-gray-200"><Link to={'/dashboard/assignment-lists'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">My assignment</Link></li>
                                    <li className="border-b border-gray-200"><Link to={'/dashboard/my-submition'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">My submited</Link></li>
                                    {
                                        user?.email ? <> <li className="border-b border-gray-200"><button onClick={handleLogout} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">Logout</button></li></> : <>
                                            <li className="border-b border-gray-200"><Link to={'/login'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">Login</Link></li>
                                            <li className="border-b border-gray-200"><Link to={'/register'} className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 ">Register</Link></li>
                                        </>
                                    }
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <Link to={'/dashboard/create-assignment'} className="w-full inline-block text-center  rounded-[50px] p-[3px] group  bg-gradient-to-l from-pink-600 to-blue-600 hover:text-white">
                                    <span className="w-full h-full inline-block  py-3 bg-white rounded-3xl group-hover:bg-gradient-to-l group-hover:from-pink-600 group-hover:to-blue-600 font-bold transition-all duration-500">Create assignment</span>
                                </Link>
                            </li>
                            <li>
                                <SocialLinks />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};


export default MainLayout;