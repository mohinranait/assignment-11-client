
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import textLimit from '../utils/textLimit';

const AssignmentCard = ({assignment}) => {
    const location = useLocation();
    const {_id,title,marks,thumnail,duration, description,level} = assignment || {};
    return (
        <div className="px-5 py-5 group rounded border hover:shadow-[0px,10px,30px,red] border-slate-100 shadow bg-slate-50">
            <div className="mb-3 overflow-hidden rounded relative">
                <Link to={`/assignments/${_id}`} className='relative'>
                <span className='absolute bottom-2 left-2'>
                    <span className='relative z-50 bg-black bg-opacity-50 px-1 text-sm  rounded-sm text-white py-1'>Duration: {duration}</span>
                </span>
                    <img className="rounded group-hover:scale-105 transition-all duration-500 mx-auto h-40 w-full object-cover" src={thumnail} alt={title} />
                </Link>
            </div>
            <div>
                <p className="font-medium flex justify-between text-gray-500 text-sm items-center mb-1"><span>Total Marks: {marks}</span> <span className='capitalize'>Level: {level} </span> </p>
                <Link to={`/assignments/${_id}`} className="text-[18px] font-bold mb-1" title={title}>{ textLimit(title,25)}</Link>
                <p className='text-gray-500'>{ textLimit(description, 130)}</p>
                {
                    location.pathname != '/' &&  <div className='flex items-center gap-2 mt-4'>
                        <Link to={`/assignments/${_id}`} className='w-full'>
                            <button className="btn  bg-blue-100 w-full btn-sm">View</button>
                        </Link>
                        <Link to={`/update-assignment/${_id}`} className='w-full'>
                            <button className="btn bg-gray-100 w-full btn-sm">Update</button>
                        </Link>
                    </div>
                }
               
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object.isRequired
};

export default AssignmentCard;