import PropTypes from "prop-types"
import { HiBars3CenterLeft, HiOutlineBookmark, HiOutlineSquares2X2 } from 'react-icons/hi2';
import HomeBanner from '../../components/Banner/HomeBanner';
import Logo from '../../components/Logo';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
import useAuth from '../../hooks/useAuth';
import { FaThLarge, FaThList } from "react-icons/fa";
import "./Header.css"

const Header = ({toggleMobileMenu}) => {
    const {user,logout} = useAuth();
    const location = useLocation();

    const handleLogout = async () => {
        await logout()
    }

    return (
        <>
           <header  className={`relative pt-10`}>
                <div className="w-72 md:w-[700px] blur-3xl -z-10 h-[350px] left-0 bottom-0 bg-blue-100 absolute"></div>
                <div className="w-72 md:w-[400px] blur-3xl -z-10 h-[300px] right-0 top-0 bg-red-100 absolute"></div>
                <div>
                    <div className="container px-4 lg:px-0 z-30 top-0  transition-all duration-1000  left-0 right-0">
                        <div className="" >
                            <nav className="flex  lg:grid lg:grid-cols-6 items-center shadow-[0px_6px_34px_rgba(215_,_216_,_222_,_0.41)] justify-between bg-white h-20 px-5 rounded-md">
                                <div className=" grid grid-cols-2 w-full items-center justify-between ">
                                    <Logo />
                                    <button onClick={toggleMobileMenu} className="block ml-auto lg:hidden text-gray-600">
                                        <HiBars3CenterLeft className='text-3xl' />
                                    </button>
                                </div>
                                <ul className="hidden headerMenu lg:col-span-4 lg:flex items-center justify-center">
                                    <li><NavLink to={'/'} className="text-base px-3 py-1 font-medium" >Home</NavLink></li>
                                    <li><NavLink to={'/assignment'} className="text-base px-3 py-1 font-medium" >Assignments</NavLink></li>
                                    <li><NavLink to={'/all-submited'} className="text-base px-3 py-1 font-medium" >all submited</NavLink></li>
                                    {
                                        user?.email ? <>
                                        <li><Link to="/dashboard/assignment-lists" className="text-base px-3 py-1 font-medium" >My List</Link></li>
                                        <li><Link to="/dashboard/my-submition" className="text-base px-3 py-1 font-medium" >My assignment</Link></li>
                                        <li><button onClick={handleLogout} className="text-base px-3 py-1 font-medium" >Logout</button></li>
                                        </> : <>
                                        <li><NavLink to={'/login'} className="text-base px-3 py-1 font-medium" >Login</NavLink></li>
                                        <li><NavLink to={'/register'} className="text-base px-3 py-1 font-medium" >Register</NavLink></li></>
                                    }
                                   
                                </ul>
                                <div className="hidden  lg:flex gap-2 items-center justify-end">
                                    {
                                        user?.email &&  <div className='relative group '>
                                        <span className='cursor-pointer'>
                                            <img className='w-8 h-8 rounded-full border p-[2px]' src={user?.photoURL ? user?.photoURL : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"} alt="" />
                                        </span>
                                        <ul className='min-w-[200px] hidden z-50 group-hover:block bg-white border absolute right-0 top-full'>
                                            <li className='bg-slate-50 py-5 px-4'>
                                                <p className='text-center text-lg font-semibold'>{user?.displayName}</p> 
                                                <p className='text-center text-sm font-medium text-gray-400'>{user?.email}</p>
                                            </li>
                                            <li className='px-4 py-2'><Link to={'/dashboard'} className='flex items-center gap-2'> <FaThLarge /> Dashboard</Link></li>
                                            <li className='px-4 py-2'><Link to={'/dashboard/create-assignment'} className='flex items-center gap-2'> <HiOutlineBookmark /> Create assignment</Link></li>
                                            <li className='px-4 py-2'><Link to={'/dashboard/assignment-lists'} className='flex items-center gap-2'> <HiOutlineSquares2X2 />  Assignment List</Link></li>
                                            <li className='px-4 py-2'><Link to={'/dashboard/my-submition'} className='flex items-center gap-2'> <FaThList /> My Assignment</Link></li>
                                            <li className='px-4 py-2'><button onClick={handleLogout} className='flex items-center gap-2'> <IoLogOutOutline /> Logout</button></li>
                                        </ul>
                                    </div>
                                    }
                                   
                                    <Link to={'/dashboard/create-assignment'} className=" group  w-[150px] overflow-hidden transition-all duration-300 font-semibold text-white  rounded-md">
                                        <div className="flex items-center w-[300px] flex-nowrap   bg-gradient-to-l from-blue-500 via-purple-500 to-blue-500  group-hover:-translate-x-[150px] duration-500">
                                            <span className="w-[150px] py-3  inline-block text-center ">New assignment</span>
                                            <span className="w-[150px] py-3  inline-block text-center">New assignment</span>
                                        </div>
                                    </Link>
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


Header.propTypes = {
    toggleMobileMenu: PropTypes.func
}

export default Header;