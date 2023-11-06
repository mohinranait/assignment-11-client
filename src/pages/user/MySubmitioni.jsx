import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import MySubmitionTableCard from './MySubmitionTableCard';

const MySubmitioni = () => {
    const {user} = useAuth();
    const axios = useAxios();
    const {data:mySubmites} = useQuery({
        queryKey: ['mySubmites'],
        queryFn: async () => {
            const res = await axios.get(`my-submition?email=${user?.email}`);
            const result = await res.data;
            return result;
        }
    })
    return (
        <div className=''>
            <div className='mb-5 flex items-center justify-between'>
                <h1 className='text-xl lg:text-3xl text-gray-600 font-bold'>My submition</h1>
               
            </div>
            <div className=''>
                <div className='overflow-x-auto'>
                    <table className="table-auto w-full border-collapse border border-slate-200">
                        <thead>
                            <tr>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>Title</th>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>My Marks</th>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySubmites?.map(assignment => <MySubmitionTableCard key={assignment?._id} assignment={assignment} /> )
                            }  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySubmitioni;