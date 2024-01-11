import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { IoPlay } from "react-icons/io5";
import avater from "../../assets/images/user/avatar-2.jpg"
import { FaArrowLeft, FaCertificate } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import Rating from "react-rating"
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Details = () => {
    const navigate = useNavigate();
    const {user} = useAuth();
    const [getCourseAuthor, setGetCourseAuthor] = useState({});

    const axios = useAxios();
    const course = useLoaderData();
    const {_id,title, thumnail, marks, level,duration,totalStudents=[],ratings=[],description,date,updateAt,user:courseAuthor} = course || {};
    console.log(course);

    const totalReivewsCount = ratings?.reduce((t , c) => t + c.rating,0);
    const reviewAvg = totalReivewsCount/ratings?.length;

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/user/${courseAuthor}`, {
            method:"GET",
            headers:{"Content-type":'application/json'}
        }).then(res => res.json())
        .then(data => setGetCourseAuthor(data));
    },[courseAuthor])

    const {mutate:subMitsion} = useMutation({
        mutationFn: async (submition) => {
            try {
                const res = await axios.post(`/create-submition`, submition);
                const result = await res.data;
                if( result.insertedId ){
                    const updateCourseStudent = {
                        totalStudents : [...totalStudents, user?.email ]
                    }
                    fetch(`${import.meta.env.VITE_SERVER_URL}/update-students/${_id}`, {
                        method:"PATCH",
                        headers:{"Content-type":'application/json'},
                        body : JSON.stringify(updateCourseStudent)
                    }).then(res => res.json())
                    .then(() => '')
                    toast.success("Successfully submited");
                    navigate('/all-submited')
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
        const examinName = user?.displayName || user?.email;
        const submission = {pdf,note,status,examinName,email,title,level, marks, thumnail};


        try {
            subMitsion(submission)
            form.reset();
        } catch (error) {
            toast.error("Somthing wrong");
        }
    }


    const handleReview = (e) => {
        e.preventDefault();

        const text= e.target.text.value;
        const rating= Number(e.target.rating.value);
        const newRating = {
            ratings: [...ratings, {rating, text}]
        }
        fetch(`${import.meta.env.VITE_SERVER_URL}/update-students/${_id}`, {
            method:"PATCH",
            headers:{"Content-type":'application/json'},
            body : JSON.stringify(newRating)
        }).then(res => res.json())
        .then((data) =>  {
            if(data.modifiedCount > 0){
                toast.success("Successfull review")
            }
        } )
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
                                            <button onClick={() => navigate(-1)} className='flex gap-1 items-center'> <FaArrowLeft /> Go back</button>
                                           
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
                                                <li className="flex items-center gap-x-1 ">
                                                    <span className="text-gray-600 text-sm font-medium">{reviewAvg>0?reviewAvg?.toFixed(1) : 0}</span>
                                                    <ul className="flex items-center  ">
                                                        <Rating
                                                        initialRating={reviewAvg}
                                                        emptySymbol={<IoIosStarOutline />}
                                                        fullSymbol={<IoIosStar />}
                                                        readonly
                                                        />
                                                       
                                                    </ul>
                                                </li>
                                                <li>
                                                    <button className="px-4 py-1 rounded-md border bg-red-300  bg-opacity-10 text-dark"> {ratings?.length} rating</button>
                                                    <span>{totalStudents?.length} students</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="flex items-center gap-x-3">
                                                <a href="#" className="w-8 h-8 rounded-full ">
                                                    <img src={getCourseAuthor?.photo ? getCourseAuthor?.photo : avater} className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-gray-200" alt="author" />
                                                </a>
                                                <p className="text-sm text-gray-400"> By <a href="#" className="text-dark hover:text-blue-600">{getCourseAuthor?.name || ''}</a> In <a  href="#" className="text-dark hover:text-blue-600">Development</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <ul className="flex gap-x-3">
                                                <li className="text-gray-500 text-sm flex items-center gap-x-2">
                                                    <span><i className="fas fa-calendar-alt"></i></span>
                                                    <span>Last updated {updateAt?.split('T')[0]}</span>
                                                </li>
                                                <li className="text-gray-500 text-sm flex items-center gap-x-2">
                                                    <span> <FaCertificate /> </span>
                                                    <span>Certified Course</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className='w-full'>
                                        <form onSubmit={handleReview} className='max-w-[400px] mt-20 w-full space-y-4'>
                                        <p className='text-xl font-bold '>Study course Review</p>
                                            <input type="text" name='text' placeholder='Write here...' className="input w-full input-bordered" />
                                            <select name="rating" id="" className="input w-full input-bordered">
                                                <option value="5">Select Rating </option>
                                                <option value="1"  >1</option>
                                                <option value="2"  >2</option>
                                                <option value="3"  >3</option>
                                                <option value="4"  >4</option>
                                                <option value="5"  >5</option>
                                            </select>
                                            <button type='submit' className='btn btn-primary w-full'>Submit</button>
                                        </form>
                                    </div>
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
                                                    <span className="text-base font-semibold text-gray-700">Duration</span>
                                                    <span className="bg-gray-50 rounded-md text-xs font-bold text-gray-500 py-1 px-3">{duration}</span>
                                                </li>
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
                    <h3 className="font-bold text-lg">{title}</h3>
                    <form onSubmit={handleSubmision} >
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