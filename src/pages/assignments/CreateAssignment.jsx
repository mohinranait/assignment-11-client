
import useAuth from '../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import DatePickerCompo from '../../components/DatePickerCompo';
import { useState } from 'react';

const CreateAssignment = () => {
    const [date, setDate] = useState('');
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
        const level = form.level.value || 'easy';
        const description = form.description.value;
        const thumnail = form.thumnail.value;
        const datee = date || '';
        const features = form.features.value == 'true' ? true : false;
        const email = user?.email;
        const assignment = {title, marks,features, level, description, thumnail, date:datee, email};

    
        
        try {
            mutate(assignment)
            form.reset();
        } catch (error) {
            toast.error(error.message)
        }

    }


   

    return (
        <section>
            <div className="container px-5 lg:px-0">
                <div className='bg-white  px-8 py-10'>
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
                       
                        <div className="grid md:grid-cols-2 gap-5 mb-4">
                            
                            <div className='w-full'>
                                <DatePickerCompo setDate={setDate} />
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feature Products</span>
                                </label>
                                <select name="features" id="" className="input input-bordered">
                                    <option value="">Feature Products</option>
                                    <option value="false">Non Features</option>
                                    <option value="true">Is Features</option>
                                </select>
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
                                <textarea name="description" required id="" cols="30" className="input input-bordered py-2" rows="5"></textarea>
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