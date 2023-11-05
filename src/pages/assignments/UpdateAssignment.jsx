
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

const UpdateAssignment = () => {
    const getAsmt= useLoaderData();
    console.log(getAsmt);
    const axios = useAxios();

    const {mutate} = useMutation({
        mutationFn: async (assignment) => {
            try {
                const res = await axios.patch(`/update-assignment/${getAsmt?._id}`, assignment);
                const result = await res.data;
                if( result.modifiedCount > 0 ){
                    toast.success("Assignment Update successfull");
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
        const date = form.date.value || getAsmt?.date;
        // const email = getAsmt?.email
        const assignment = {title, marks, level, description, thumnail, date};

        try {
            mutate(assignment)
        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <section>
            <div className="container px-5 lg:px-0">
                <div className='bg-white my-16 px-8 py-10 md:px-20 md:py-20'>
                    <form onSubmit={handleSubmitAssignment}>
                        <p className='text-2xl font-semibold text-gray-700'>Update assignment</p>
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
                       
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' defaultValue={getAsmt.date} placeholder="Date" className="input input-bordered" required />
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
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
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