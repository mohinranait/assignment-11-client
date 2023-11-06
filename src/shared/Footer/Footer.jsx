import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SocialLinks from "../../components/SocilaLinks/SocialLinks";


const Footer = () => {
    return (
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
                                            <li><Link to={'/'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >Home</Link></li>
                                            <li><Link to={'/assignment'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >All Assignment</Link></li>
                                            <li><Link to={'/all-submited'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >All Submited</Link></li>
                                           
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <ul className="space-y-3">
                                    <li className="text-xl text-dark font-extrabold ">Our Company</li>
                                    <li>
                                        <ul className="space-y-2">
                                            <li><Link to={'/dashboard'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >Dashboard</Link></li>
                                            <li><Link to={'/dashboard/my-submition'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >My Submited</Link></li>
                                            <li><Link to={'/register'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >Register</Link></li>
                                            <li><Link to={'/login'} className="text-base  py-1 font-medium text-gray-500 hover:text-blue-700 transition-all duration-300 hover:pl-1" >Login</Link></li>

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
    );
};

export default Footer;