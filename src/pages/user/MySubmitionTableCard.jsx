
import PropTypes from 'prop-types';

const MySubmitionTableCard = ({assignment}) => {
    const {title,marks,level,given_marks} = assignment || {};
    return (
        <>
        <tr >
            <td className='border border-slate-200 px-3 py-2 text-gray-600 '>
                <p>{title} </p>
                <p className='text-sm'>Marks: {marks}</p>
            </td>
            <td className='border text-sm border-slate-200 px-3 py-2 text-gray-600 '>
                <p> My Marks: {given_marks || <span className='text-xs bg-red-50 text-red-600 px-2 inline-block py-[1px]'>Pending</span> }</p>
            </td>
            <td className='border border-slate-200 px-3 py-2 text-gray-600 capitalize'>{level}</td>
            
        </tr>       
    </>
    );
};

MySubmitionTableCard.propTypes = {
    assignment: PropTypes.object
};

export default MySubmitionTableCard;