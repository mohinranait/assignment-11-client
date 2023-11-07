
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DatePickerCompo from '../../components/DatePickerCompo';
import { useState } from 'react';

const UpdateAssignment = () => {
    
    const getAsmt= useLoaderData();
    const [date, setDate] = useState(getAsmt?.date)
    const {user} = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const {mutate} = useMutation({
        mutationFn: async (assignment) => {
            try {
                const res = await axios.patch(`/update-assignment/${getAsmt?._id}?email=${user?.email}&productEmail=${getAsmt?.email}`, assignment);
                const result = await res.data;
                if( result.modifiedCount > 0 ){
                    toast.success("Assignment Update successfull");
                    navigate("/dashboard/assignment-lists")
                }else{
                    toast.error("Please! Modify your data")
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    })

    const handleSubmitAssignment = async (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const marks = Number(form.marks.value);
        const level = form.level.value || getAsmt?.level;
        const description = form.description.value;
        const thumnail = form.thumnail.value;
        const datee = date || getAsmt?.date;
        const features = form.features.value == 'true' ? true : false;
        const assignment = {title, marks, features, level, description, thumnail, date:datee};

        try {
            if( user?.email !== getAsmt?.email ){
                toast.error("You do not own this product")
            }else{
                mutate(assignment)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <section>
            <div className="container px-5 lg:px-0">
                <div className='bg-white  px-8 py-10 '>
                    <form onSubmit={handleSubmitAssignment}>
                        <p className='text-2xl font-semibold text-gray-700'>Update assignment</p>
                        <div className='flex mt-4'>
                            <div className='border rounded-md p-2'>
                                <img className='w-24 rounded' src={getAsmt?.thumnail} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' defaultValue={getAsmt.title} placeholder="Title" className="input input-bordered" required />
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumnail</span>
                                </label>
                                <input type="text" name='thumnail' defaultValue={getAsmt.thumnail} placeholder="thumnail" className="input input-bordered" required />
                            </div>
                        </div>
                       
                        <div className="grid md:grid-cols-2 gap-5 mb-4">
                            <div className='w-full'>
                                <DatePickerCompo setDate={setDate} currentDate={getAsmt?.date} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Features {getAsmt?.features}</span>
                                </label>
                                <select name="features" id="" className="input input-bordered">
                                    <option value="">Feature Products  </option>
                                    <option value="false" selected={getAsmt?.features == false  ? 'selected':''} >In Acitve</option>
                                    <option value="true" selected={getAsmt?.features == true ? 'selected':'' } >Acitve</option>
                                </select>
                            </div>
                        </div>
                       
                        <div className="grid md:grid-cols-2 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="number" name='marks' defaultValue={getAsmt.marks} placeholder="marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Level</span>
                                </label>
                                <select name="level" id="" className="input input-bordered">
                                    <option value="">Select Level</option>
                                    <option value="easy" selected={getAsmt?.level == 'easy' ? 'selected':''} >Easy</option>
                                    <option value="medium" selected={getAsmt?.level == 'medium' ? 'selected':''} >Medium</option>
                                    <option value="hard" selected={getAsmt?.level == 'hard' ? 'selected':''} >Hard</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 mb-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name="description" defaultValue={getAsmt.description} id="" cols="30" className="input input-bordered py-2" rows="5"></textarea>
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <button type='submit' className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateAssignment;