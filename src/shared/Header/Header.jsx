
import { HiBars3CenterLeft } from 'react-icons/hi2';
import HomeBanner from '../../components/Banner/HomeBanner';
import Logo from '../../components/Logo';
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({toggleMobileMenu}) => {
    const location = useLocation();
    return (
        <>
           <header  className={`relative ${location.pathname == '/' ? 'pt-10':"pt-0"} `}>
                <div className="w-72 md:w-[700px] blur-3xl -z-10 h-[350px] left-0 bottom-0 bg-blue-100 absolute"></div>
                <div className="w-72 md:w-[400px] blur-3xl -z-10 h-[300px] right-0 top-0 bg-red-100 absolute"></div>
                <div>
                    <div className="container px-4 lg:px-0 z-30 top-0  transition-all duration-1000  left-0 right-0">
                        <div className="" >
                            <nav className="flex  lg:grid lg:grid-cols-3 items-center shadow-[0px_6px_34px_rgba(215_,_216_,_222_,_0.41)] justify-between bg-white h-20 px-5 rounded-md">
                                <div className=" grid grid-cols-2 w-full items-center justify-between ">
                                    <Logo />
                                    <button onClick={toggleMobileMenu} className="block ml-auto lg:hidden text-gray-600">
                                        <HiBars3CenterLeft className='text-3xl' />
                                    </button>
                                </div>
                            
                                <ul className="hidden lg:flex items-center justify-center">
                                    <li><NavLink to={'/'} className="text-base px-3 py-1 font-medium" >Home</NavLink></li>
                                    <li><NavLink to={'/login'} className="text-base px-3 py-1 font-medium" >Login</NavLink></li>
                                    <li><NavLink to={'/register'} className="text-base px-3 py-1 font-medium" >Register</NavLink></li>
                                </ul>
                                <div className="hidden  lg:flex items-center justify-end">
                                    <a href="#" className=" group  w-[150px] overflow-hidden transition-all duration-300 font-semibold text-white  rounded-md">
                                        <div className="flex items-center w-[300px] flex-nowrap   bg-gradient-to-l from-blue-500 via-purple-500 to-blue-500  group-hover:-translate-x-[150px] duration-500">
                                            <span className="w-[150px] py-3  inline-block text-center ">Assignment</span>
                                            <span className="w-[150px] py-3  inline-block text-center">Assignment</span>
                                        </div>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                
                {
                    location.pathname == '/' &&   <HomeBanner />
                }
              
            </header> 
        </>
    );
};

export default Header;