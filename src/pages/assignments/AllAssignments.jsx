import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import AssignmentCard from "../../components/AssignmentCard";
import { useState } from "react";
import LoadingSpin from "../../components/LoadingSpin";



const AllAssignments = () => {
    const axios = useAxios();
    const [selectLevel, setSelectLevel] = useState('');
    const [parPage, setParPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0);

  


    const handleFilter = (e) => {
        setSelectLevel(e.target.value);
    }

    const {data:assignments, isLoading} = useQuery({
        queryKey : ['assignments',selectLevel,currentPage],
        queryFn : async () => {
            try {
                const response = await axios.get(`/assignments?page=${currentPage}&size=${parPage}&level=${selectLevel}`);
                const result = await response.data;
              
                return result;
            } catch (error) {
                toast.error(error.message)
            }
        }
    })

    const totalAssignment = assignments?.count || 0;
    const totlaPages = Math.ceil(totalAssignment / parPage )
    const pages = [...Array(totlaPages).keys()]


    const handlePrevius = () => {
        if( currentPage > 0  ){
            setCurrentPage(currentPage - 1)
        }
    }
    

    const handleNext = () => {
        if( totlaPages-1 > currentPage  ){
            setCurrentPage( currentPage + 1)
        }
    }

    const handleCurrentPage = (currentPage) => {
        setCurrentPage(--currentPage)
    }

    if(isLoading){
        return <LoadingSpin />
    }

    return (
        <section>
            <div className="container px-5 lg:px-0">
                <div className="flex justify-between items-center py-3 bg-white rounded-md mt-16 mb-6 shadow px-5">
                    <div className="font-medium">
                        Total <span className="font-semibold">{totalAssignment}</span> - view <span className="font-semibold">{assignments?.result?.length}</span> assignments
                    </div>
                    <div>
                        <select name="" onChange={handleFilter} className="input input-bordered" id="">
                            <option value="">Filter</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        assignments?.result?.map(assignment => <AssignmentCard key={assignment?._id} assignment={assignment} /> )
                    }
                </div>
                <div className="mt-10">
                    <ul className="flex items-center justify-start gap-3">
                        <li><button onClick={handlePrevius} className={`px-3 py-1 rounded inline-block  font-semibold ${currentPage === 0 ? 'bg-slate-200 text-gray-400':'bg-blue-600 text-white'} `}>Prev</button></li>
                        {
                            pages?.map(button => <li key={button}><button onClick={()=>handleCurrentPage(button)}  className={`px-3 py-1 rounded inline-block border font-semibold ${currentPage == button ? 'bg-blue-600 text-white':'bg-white text-gray-700'} `}>{++button}</button></li> )
                        }
                        <li><button onClick={handleNext} className={`px-3 py-1 rounded inline-block  font-semibold ${currentPage === totlaPages-1 ? 'bg-slate-200 text-gray-400':'bg-blue-600 text-white'} `}>Next</button></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AllAssignments;