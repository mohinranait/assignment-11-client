
import {  Outlet } from "react-router-dom";
import {  HiMiniXMark } from "react-icons/hi2";
import Header from "../shared/Header/Header";
import { useState } from "react";
import Logo from "../components/Logo";

import SocialLinks from "../components/SocilaLinks/SocialLinks";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    
    const [isToggle, setIsToggle] = useState(false);

    const toggleMobileMenu = () => {
        setIsToggle(!isToggle)
    }


    return (
        <>

         <Header toggleMobileMenu={toggleMobileMenu} /> 
         
            <Outlet />
            <Toaster />

            <footer className="bg-white">
                <div className="py-20">
                    <div className="container px-5 lg:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:grid-cols-12">
                            <div className="col-span-1 lg:col-span-4">
                                <ul className="space-y-5">
                                    <li>
                                       <Logo />
                                    </li>
                                    <li>
                                        <p className="text-gray-500">We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
                                    </li>
                                    <li className="flex justify-start">
                                        <SocialLinks />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <ul className="space-y-3">
                                    <li className="text-xl text-dark font-extrabold ">Useful Links</li>
                                    <li>
                                        <ul className="space-y-2">
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Marketplace</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">University</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Blogs</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">FAQ</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">About Us</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <ul className="space-y-3">
                                    <li className="text-xl text-dark font-extrabold ">Our Company</li>
                                    <li>
                                        <ul className="space-y-2">
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Become Teacher</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Register</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Login</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Dashboard</a></li>
                                            <li><a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" href="#">Contact</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 lg:col-span-4">
                                <ul className="space-y-3">
                                    <li className="text-xl text-dark font-extrabold ">Get Contact</li>
                                    <li>
                                        <ul className="">
                                            <li className="flex items-center gap-x-2 text-gray-500">
                                                <span className="font-bold">Phone:</span>
                                                <a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 " href="tel:01728068200">01728068200</a>
                                            </li>
                                            <li className="flex items-center gap-x-2 text-gray-500">
                                                <span className="font-bold">E-mail:</span>
                                                <a className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 " href="#">admin@example.com</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="text-lg text-gray-700 font-extrabold ">Newsletter</li>
                                    <li>
                                        <ul className="space-y-3">
                                            <li className="text-gray-600">2000+ Our students are subscribe Around the World. <br />   Don’t be shy introduce yourself!</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container px-5 lg:px-0 border-t border-gray-200 py-5">
                        <div className="flex flex-col items-center justify-center lg:justify-between gap-y-3 lg:flex-row  ">
                            <p className="text-gray-600 text-center">Copyright © 2023 <a href="#" className="text-gray-950 hover:text-blue-700">Mohin Rana</a>. All Rights Reserved</p>
                            <ul className="flex flex-wrap items-center justify-center text-gray-600 ">
                                <li className="px-2"><a className="text-base font-medium hover:text-blue-700" href="#">Terms of service</a></li> | 
                                <li className="px-2"><a className="text-base font-medium hover:text-blue-700" href="#">Privacy policy</a></li> |
                                <li className="px-2"><a className="text-base font-medium hover:text-blue-700" href="#">Subscription</a></li> |
                                <li className="px-2"><a className="text-base font-medium hover:text-blue-700" href="#">Login & Register</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


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
                                    <li className="border-b border-gray-200"><a className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 " href="#">Home</a></li>
                                    <li className="border-b border-gray-200"><a className="text-gray-800 text-lg hover:text-blue-700 py-1 inline-block transition-all duration-300 " href="#">About</a></li>
                                   
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <a href="#" className="w-full inline-block text-center  rounded-[50px] p-[3px] group  bg-gradient-to-l from-pink-600 to-blue-600 hover:text-white">
                                    <span className="w-full h-full inline-block  py-3 bg-white rounded-3xl group-hover:bg-gradient-to-l group-hover:from-pink-600 group-hover:to-blue-600 font-bold transition-all duration-500">Enroll now</span>
                                </a>
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