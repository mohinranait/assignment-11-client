
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assignment}) => {
    const {_id,title,marks, description,level} = assignment || {};
    return (
        <div className="px-5 py-5 rounded border border-slate-100 shadow bg-blue-50">
            <div className="mb-2">
                <Link>
                    <img className="rounded" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                </Link>
            </div>
            <div>
                <p className="font-medium flex justify-between items-center"><span>Total Marks: {marks}</span> <span className='capitalize'>Level: {level} </span> </p>
                <Link className="text-xl font-bold ">{title}</Link>
                <p>{description}</p>
                <div className='flex items-center gap-2 mt-4'>
                    <Link className='w-full'>
                        <button className="btn  bg-blue-100 w-full btn-sm">View</button>
                    </Link>
                    <Link to={`/update-assignment/${_id}`} className='w-full'>
                        <button className="btn bg-gray-100 w-full btn-sm">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object.isRequired
};

export default AssignmentCard;