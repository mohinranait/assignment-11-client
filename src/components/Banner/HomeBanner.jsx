
import user1 from "../../assets/images/user/client-04.png"
import user2 from "../../assets/images/user/client-05.png"
import user3 from "../../assets/images/user/client-06.png"
import banner from "../../assets/images/banner/language-club.png"
import { HiStar  } from "react-icons/hi2";

const HomeBanner = () => {
    return (
        <>
            <div className=" py-16 relative">
                {/* <div className="w-72 md:w-[700px] blur-3xl -z-10 h-[350px] left-0 bottom-0 bg-blue-100 absolute"></div>
                <div className="w-72 md:w-[400px] blur-3xl -z-10 h-[300px] right-0 top-0 bg-red-100 absolute"></div> */}
                <div className="container px-5 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-y-0 md:gap-5">
                        <div className="order-2 lg:order-1">
                            <div className=" space-y-4 md:space-y-6 lg:space-y-8">
                                <div>
                                    <span className="uppercase text-blue-600 bg-blue-200 font-semibold rounded-3xl py-2 px-4 text-sm">ASSIGNMENT FOR EVERYONE</span>
                                </div>
                                <h1 className="text-3xl leading-[40px] md:text-5xl md:leading-[60px] lg:text-5xl lg:leading-[65px] xl:text-6xl font-bold xl:leading-[75px]">Innovative <br /> <span className="bg-gradient-to-l to-blue-500 from-purple-500 bg-clip-text text-transparent">Study  Academic</span> Platform for  Your Career.</h1>
                                <div className="flex items-center flex-wrap">
                                    <div className="flex items-center ">
                                        <span   className="group hover:z-10 w-16 h-16 scale-105 relative  rounded-full">
                                            <div className=" bottom-2/4  bg-blue-600 text-white duration-200 w-0 group-hover:bottom-full absolute left-2/4 -translate-x-2/4 z-10 invisible transition-all group-hover:visible inline-block group-hover:w-[90px] overflow-hidden scale-0 group-hover:scale-100 text-center px-2 py-1 text-xs font-medium  border border-gray-200 rounded-lg shadow-sm opacity-1">
                                                Mark Jorden
                                            </div>
                                            <img src={user1} className="w-16 h-16 scale-95 hover:z-30 hover:scale-105 transition-all duration-200 border-[3px] border-white rounded-full" alt="user one" />
                                        </span>
                                    
                                        <span   className="group hover:z-10 -left-4 w-16 h-16 scale-105 relative  rounded-full">
                                            <div className=" bottom-2/4 bg-blue-600 text-white duration-200 w-0 group-hover:bottom-full absolute left-2/4 -translate-x-2/4 z-10 invisible transition-all group-hover:visible inline-block group-hover:w-[60px] overflow-hidden scale-0 group-hover:scale-100 text-center px-2 py-1 text-xs font-medium   border border-gray-200 rounded-lg shadow-sm opacity-1">
                                                Mohin
                                            </div>
                                            <img src={user2} className="w-16 h-16 scale-95 hover:z-30 hover:scale-105 transition-all duration-200 border-[3px] border-white rounded-full" alt="user one"/>
                                        </span>
                                    
                                    
                                        <span   className="group hover:z-10 -left-8 w-16 h-16 scale-105 relative  rounded-full">
                                            <div className=" bottom-2/4 bg-blue-600 text-white duration-200 w-0 group-hover:bottom-full absolute left-2/4 -translate-x-2/4 z-10 invisible transition-all group-hover:visible inline-block group-hover:w-[45px] overflow-hidden scale-0 group-hover:scale-100 text-center px-2 py-1 text-xs font-medium  border border-gray-200 rounded-lg shadow-sm opacity-1">
                                                Jhon
                                            </div>
                                            <img src={user3} className="w-16 h-16 scale-95 hover:z-30 hover:scale-105 transition-all duration-200 border-[3px] border-white rounded-full" alt="user one"/>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">Join Over 3000+ friends</p>
                                        <p className="text-gray-500">Have a new ideas every week.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <a href="#" className=" group w-24 lg:w-[130px] overflow-hidden hover:-translate-y-1 transition-all duration-300 font-semibold text-white  rounded-md">
                                        <div className="flex items-center w-[192px] lg:w-[260px] flex-nowrap   bg-gradient-to-l from-blue-500 via-purple-500 to-blue-500  group-hover:-translate-x-[96px] lg:group-hover:-translate-x-[130px] duration-500">
                                            <span className="w-24 text-sm py-3 lg:w-[130px] lg:py-4 lg:text-base   inline-block text-center ">Sign up now</span>
                                            <span className="w-24 text-sm py-3 lg:w-[130px] lg:py-4 lg:text-base   inline-block text-center">Sign up now</span>
                                        </div>
                                    </a>
                                    <a href="#" className=" group w-24 lg:w-[130px] overflow-hidden hover:-translate-y-1 transition-all duration-300 font-semibold text-white  rounded-md">
                                        <div className="flex items-center w-[192px] lg:w-[260px] flex-nowrap   bg-gradient-to-l from-blue-500 via-blue-500 to-blue-500  group-hover:-translate-x-[96px] lg:group-hover:-translate-x-[130px] duration-500">
                                            <span className="w-24 text-sm py-3 lg:w-[130px] lg:py-4 lg:text-base   inline-block text-center "> Assignment</span>
                                            <span className="w-24 text-sm py-3 lg:w-[130px] lg:py-4 lg:text-base   inline-block text-center"> Assignment</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <figure>
                                    <img src={banner} className="mx-auto" alt="Banner" />
                                </figure>
                                <div className="hidden lg:block py-6 animate-bounce shadow px-10 bg-white  rounded-md absolute left-0 bottom-0">
                                    <div className=" ">
                                        <img src={user3} className="w-16 h-16 rounded-full absolute -top-8 -left-8" alt="user" />
                                        <p className="text-lg font-bold text-dark">Helery <span className="text-gray-400 font-normal text-base">/ USA</span> </p>
                                        <div className="flex items-center gap-x-2">
                                            <ul className="flex items-center gap-x-1">
                                                <li><HiStar className="text-yellow-500" /> </li>
                                                <li><HiStar className="text-yellow-500" /> </li>
                                                <li><HiStar className="text-yellow-500" /> </li>
                                                <li><HiStar className="text-yellow-500" /> </li>
                                                <li><HiStar className="text-yellow-500" /> </li>
                                               
                                            </ul>
                                            <span className="text-gray-600 font-medium">(Google review)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default HomeBanner;