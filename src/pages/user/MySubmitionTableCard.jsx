
import PropTypes from 'prop-types';

const MySubmitionTableCard = ({assignment}) => {
    const {_id,title,marks,level,given_marks,status,feedback,thumnail} = assignment || {};
    return (
        <>
        <tr className='border-b'>
            <td className='border-l border-gray-200 px-3 py-2 text-gray-600 flex gap-2 items-center'>
                <img src={thumnail} className='w-10' alt="" />
                <p>{title} </p>
            </td>
            <td className='border-l border-gray-200 text-sm  px-3 py-2 text-gray-600 '>
                <p> Marks: <sup>{given_marks || '--'}</sup>/<sub>{marks}</sub> </p>
            </td>
            <td className='border-l border-gray-200 px-3 py-2 text-gray-600 capitalize'>{level}</td>
            <td className='border-l border-gray-200 px-3 py-2 text-gray-600 capitalize'>
                {
                    status == true ? <span className='inline-block py-[1px] px-1 rounded bg-green-50 text-green-500 text-xs '>Completed</span> : <span className=' text-xs inline-block py-[1px] px-1 rounded bg-red-50 text-red-500'>Pending</span>
                }
            </td>
            <td className='border-l border-gray-200 px-3 py-2 text-gray-600 capitalize'>
                <button className='btn btn-sm bg-blue-200 text-blue-500 text-xs' onClick={()=>document.getElementById(`my_modal${_id}`).showModal()}>Feedback</button>
            </td>
            
        </tr>   

        <dialog id={`my_modal${_id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-semibold text-base ">{title}</h3>
                <p className="py-4 text-sm text-gray-600">{feedback || "-/-"}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>    
    </>
    );
};

MySubmitionTableCard.propTypes = {
    assignment: PropTypes.object
};

export default MySubmitionTableCard;