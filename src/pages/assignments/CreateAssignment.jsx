
import useAuth from '../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';

const CreateAssignment = () => {
    const {user} = useAuth();
    const axios = useAxios();

    const {mutate} = useMutation({
        mutationFn: async (assignment) => {
            try {
                const res = await axios.post('/create-assignment', assignment);
                const result = await res.data;
                if( result.insertedId ){
                    toast.success("Assignment created successfull");
                }else{
                    toast.error("Somthing wrong")
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
        const level = form.level.value;
        const description = form.description.value;
        const thumnail = form.thumnail.value;
        const date = form.date.value;
        const email = user?.email;
        const assignment = {title, marks, level, description, thumnail, date, email};

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
                        <p className='text-2xl font-semibold text-gray-700'>Crate new assignment</p>
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Title" className="input input-bordered" required />
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumnail</span>
                                </label>
                                <input type="text" name='thumnail' placeholder="thumnail" className="input input-bordered" required />
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                            </div>
                        </div>
                       
                        <div className="grid md:grid-cols-2 gap-5 mb-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="number" name='marks' placeholder="marks" className="input input-bordered" required />
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
                                <textarea name="description" id="" cols="30" className="input input-bordered py-2" rows="5"></textarea>
                            </div>
                        </div>
                       
                        <div className="grid grid-cols-1 gap-5 mb-4">
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateAssignment;