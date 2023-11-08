import { useQuery } from "@tanstack/react-query";
import AssignmentCard from "../../components/AssignmentCard";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import LoadingSpin from "../../components/LoadingSpin";


const Home = () => {
    const axios = useAxios();
    const {data:features, isLoading} = useQuery({
        queryKey:['features'],
        queryFn: async () => {
            const res = await axios.get("/features-assignment");
            const result = await res.data;
            return result; 
        }
    })

    if( isLoading){
        return <LoadingSpin />
    }
    return (
        <>
            <section>
                <div className="container px-5 lg:px-0">
                    <div className="pb-10 pt-10">
                        <p className="text-3xl font-bold text-center">Features assignments</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            features?.map(item => <AssignmentCard key={item?._id} assignment={item}  /> )
                        }
                    </div>
                    <div className="text-center py-10">
                        <Link to={'/assignment'} className="btn bg-blue-600 text-white hover:text-blue-600">View All</Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5 lg:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div>
                                <p className="text-2xl font-bold mb-3">FAQ</p>
                            </div>
                            <div className="space-y-4">
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                                    <div className="collapse-title text-xl font-medium">
                                        What should be submitted in the assignment?
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>You must provide a Google Drive PDF link to submit the assignment. And you can add your quick note if you want.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" /> 
                                    <div className="collapse-title text-xl font-medium">
                                        What are the benefits here?
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>You can publish an assignment from your account and share it with your friends. You can explore your confidence level.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" /> 
                                    <div className="collapse-title text-xl font-medium">
                                        Can I login with email?
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hey You can login via email.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>

                                <img className="lg:w-[60%] mx-auto" src="https://pngimg.com/d/question_mark_PNG56.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;