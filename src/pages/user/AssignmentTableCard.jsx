import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoPencilSharp, IoTrashOutline } from 'react-icons/io5';
import useAxios from '../../hooks/useAxios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const AssignmentTableCard = ({assignment}) => {
    const {user} = useAuth();
    const queryClient = useQueryClient()
    const axios = useAxios();
    const {_id,title,marks,level,features} = assignment || {};


    const {mutate:deleteMyAssignment} = useMutation({
        mutationFn: async (_id) => {
            const res = await axios.delete(`/delete-my-assign/${_id}?email=${user?.email}`)
            const result = await res.data;
            if(result.deletedCount > 0){
                swal("Assignment has been deleted!", {
                    icon: "success",
                });
            }else{
                toast.error("You cannot delete it.")
            }
        },
        onSuccess : () =>{
            queryClient.invalidateQueries({ queryKey: ['myassignments'] })
        }
    })

    const handleDelete = async () => {
        swal({
            title: "Are you sure?",
            text: "You want to delete this assignment",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( async (willDelete) => {
            if (willDelete) {
                deleteMyAssignment(_id);
            }
        });
    }


    return (
        <>
            <tr >
                <td className='border border-slate-200 px-3 py-2 text-gray-600 '>{title} , {features} </td>
                <td className='border border-slate-200 px-3 py-2 text-gray-600 '>{marks}</td>
                <td className='border border-slate-200 px-3 py-2 text-gray-600 capitalize'>{level}</td>
                <td className='border border-slate-200 px-3 py-2 text-gray-600 '>
                    <ul className='flex items-center justify-end gap-4'>
                        <li> <Link to={`/dashboard/update-assignment/${_id}`}  className=''><IoPencilSharp /></Link> </li>
                        <li> <button onClick={handleDelete}  className=''><IoTrashOutline /></button> </li>
                    </ul>
                </td>
            </tr>       
        </>
    );
};

AssignmentTableCard.propTypes = {
    assignment: PropTypes.object.isRequired
};

export default AssignmentTableCard;