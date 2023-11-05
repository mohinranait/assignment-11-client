
import { Link } from 'react-router-dom';
import AssignmentTableCard from './AssignmentTableCard';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';

const AllAssignment = () => {
    const {user} = useAuth();
    const axios = useAxios();

    const {data:assignments} = useQuery({
        queryKey : ['myassignments'],
        queryFn: async () => {
            const res = await axios.get(`/my-assignment?email=${user?.email}`);
            const result = await res.data;
            return result;
        }
    })

    return (
        <div className=''>
            <div className='mb-5 flex items-center justify-between'>
                <h1 className='text-xl lg:text-3xl text-gray-600 font-bold'>Assignment lists</h1>
                <Link to={'/dashboard/create-assignment'} className='px-4 text-sm md:text-base py-2 bg-primary rounded-md text-white font-semibold'>New Assignment</Link>
            </div>
            <div className=''>
                <div className='overflow-x-auto'>
                    <table className="table-auto w-full border-collapse border border-slate-200">
                        <thead>
                            <tr>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>Title</th>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>Marks</th>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>Level</th>
                                <th className='border border-slate-200 text-left text-gray-700 py-2 pl-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                assignments?.map(assignment => <AssignmentTableCard key={assignment?._id} assignment={assignment} /> )
                            }  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;