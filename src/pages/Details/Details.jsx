import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { IoPlay } from "react-icons/io5";
import avater from "../../assets/images/user/avatar-2.jpg"
import { FaCertificate } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';

const Details = () => {
    const {user} = useAuth();
    const axios = useAxios();
    const course = useLoaderData();
    const {title, thumnail, marks, level,description,date} = course || {};

    const {mutate:SubMitsion} = useMutation({
        mutationFn: async (submition) => {
            try {
                const res = await axios.post(`/create-submition`, submition);
                const result = await res.data;
                if( result.insertedId ){
                    toast.success("Successfully submited");
                }else{
                    toast.error("Somthing wrong")
                }
            } catch (error) {
                toast.error("Somthing wrong");
            }
        }
    })

    const handleSubmision  = (e) => {
        e.preventDefault();

        const form = e.target;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const status = false;
        const email = user?.email;
        const submission = {pdf,note,status,email};

        try {
            SubMitsion(submission)
        } catch (error) {
            toast.error("Somthing wrong");
        }
    }

    return (
        <>
            <section>
                
                    <div className=" py-16 bg-gradient-to-br from-transparent to-blue-300 backdrop-blur-md z-10">
                        <div className="container px-5 ">
                            <div className="grid grid-cols-1 lg:grid-cols-5  gap-y-10 gap-5 lg:gap-y-0 md:gap-5 ">
                                <div className="lg:col-span-3">
                                    <ul className=" space-y-4 md:space-y-6 lg:space-y-8">
                                        <li className="flex items-center gap-x-3 text-gray-600">
                                            <a href="./index.html" >Home</a>
                                            <i className="fas fa-angle-right text-sm"></i>
                                            <span className="text-gray-400">Web Development</span>
                                        </li>
                                        <li className="flex items-center gap-x-4">
                                            <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                                        
                                        </li>
                                        <li>
                                            <p className="text-lg text-gray-800">{description}</p>
                                        </li>
                                        <li>
                                            <ul className="flex flex-wrap items-center gap-4">
                                                <li>
                                                    <button className="px-5 py-3 rounded-3xl border bg-red-300  bg-opacity-10 text-dark"><i className=" fas fa-certificate"></i> Best Seller</button>
                                                </li>
                                                <li className="flex items-center gap-x-1">
                                                    <span className="text-gray-600 text-sm font-medium">4.5</span>
                                                    <ul className="flex items-center ">
                                                        <li><i className="fas fa-star text-sm text-yellow-500"></i></li>
                                                        <li><i className="fas fa-star text-sm text-yellow-500"></i></li>
                                                        <li><i className="fas fa-star text-sm text-yellow-500"></i></li>
                                                        <li><i className="fas fa-star text-sm text-yellow-500"></i></li>
                                                        <li><i className="fas fa-star text-sm text-yellow-500"></i></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <button className="px-4 py-1 rounded-md border bg-red-300  bg-opacity-10 text-dark"> 215,475 rating</button>
                                                    <span>616,029 students</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-x-3">
                                                <a href="#" className="w-8 h-8 rounded-full ">
                                                    <img src={avater} className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-gray-200" alt="author" />
                                                </a>
                                                <p className="text-sm text-gray-400"> By <a href="#" className="text-dark hover:text-blue-600">Angela</a> In <a  href="#" className="text-dark hover:text-blue-600">Development</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <ul className="flex gap-x-3">
                                                <li className="text-gray-500 text-sm flex items-center gap-x-2">
                                                    <span><i className="fas fa-calendar-alt"></i></span>
                                                    <span>Last updated 12/2024</span>
                                                </li>
                                                <li className="text-gray-500 text-sm flex items-center gap-x-2">
                                                    <span> <FaCertificate /> </span>
                                                    <span>Certified Course</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-2">
                                    <div className="   ">
                                        <div className="bg-white space-y-5 p-5 z-[50]  shadow-[0px_6px_34px_rgba(215_,_216_,_222_,_0.41)] rounded-md">
                                            <div className=" rounded-md overflow-hidden relative">
                                                <button className=" w-full h-full bg-black absolute top-0 left-0 bg-opacity-40 flex items-center justify-center">
                                                    <span className="relative" > 
                                                        <span  className="animate-blob absolute w-full h-full bg-white bg-opacity-50 rounded-full left-0 top-0 bottom-0 right-0 z-0"></span>
                                                        <span className=" w-20 h-20 bg-white rounded-full z-10">
                                                            <div className=" w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                                                <span className="fas fa-play text-3xl text-blue-600 z-50"><IoPlay /></span>
                                                            </div>
                                                        </span>
                                                    </span>
                                                </button>
                                                <img src={thumnail} className="rounded-md " alt="" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-3xl  font-bold text-dark">
                                                    Marks: <span>{marks}</span>
                                                </div>
                                                <p className="py-1 px-2 bg-red-100 text-red-600 font-medium rounded-lg"><i className="far fa-clock"></i> {date}</p>
                                            </div>
                                            <div>
                                                <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="text-xl font-bold text-center px-10 w-full py-3 rounded-md bg-gradient-to-l from-blue-700 to-purple-600 text-white inline-block">Take assignment</button>
                                            </div>
                                            <ul>
                                                <li className="flex items-center justify-between border-b border-gray-200 py-2">
                                                    <span className="text-base font-semibold text-gray-700">Start Date</span>
                                                    <span className="bg-gray-50 rounded-md text-xs font-bold text-gray-500 py-1 px-3">{date}</span>
                                                </li>
                                                <li className="flex items-center justify-between border-b border-gray-200 py-2">
                                                    <span className="text-base font-semibold text-gray-700">Marks</span>
                                                    <span className="bg-gray-50 rounded-md text-xs font-bold text-gray-500 py-1 px-3">{marks}</span>
                                                </li>
                                                <li className="flex items-center justify-between   py-2">
                                                    <span className="text-base font-semibold text-gray-700">Level</span>
                                                    <span className="bg-gray-50 rounded-md text-xs font-bold text-gray-500 py-1 px-3 capitalize">{level}</span>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             
            </section>   


            <dialog id="my_modal_4" className="modal">
                <div className="modal-box lg:w-1/2 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <form onSubmit={handleSubmision}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">PDF Link</span>
                            </label>
                            <input type="text" name='pdf' placeholder="PDF Link" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Quick note</span>
                            </label>
                            <textarea name="note" id="" cols="30" placeholder='Quick note...' className="input input-bordered" rows="5"></textarea>

                        </div>
                        <div className="form-control mb-4">
                           <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button  className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

Details.propTypes = {
    
};

export default Details;