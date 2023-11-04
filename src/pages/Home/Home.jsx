import AssignmentCard from "../../components/AssignmentCard";


const Home = () => {
    return (
        <>
            <section>
                <div className="container px-5 lg:px-0">
                    <div className="pb-10 pt-10">
                        <p className="text-3xl font-bold text-center">Features assignments</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5 lg:px-0">
                    <div className="pb-10 pt-10">
                        <p className="text-3xl font-bold text-center">Features assignments</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div>
                                <p className="text-2xl font-bold mb-3">What is Question</p>
                            </div>
                            <div className="space-y-4">
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                                    <div className="collapse-title text-xl font-medium">
                                        Click to open this one and close others
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hello</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" /> 
                                    <div className="collapse-title text-xl font-medium">
                                        Click to open this one and close others
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hello</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" /> 
                                    <div className="collapse-title text-xl font-medium">
                                        Click to open this one and close others
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hello</p>
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